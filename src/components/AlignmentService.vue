<!-- -->
<!-- Displays results of queries to the Curriculum Alignment Service -->
<!-- -->
<!--  -->

<template>

<q-card class="bg-white" flat>
    <q-tabs no-pane-border align="justify" v-model="tabsModel" color="amber" text-color="black" inverted>
      <q-tab slot="title" name="xtab-1" icon="location_city" label="National"/>
      <q-tab slot="title" name="xtab-2" icon="domain" label="Local"/>
    <q-tab-pane name="xtab-1">
    <q-list link separator sparse>
        <q-list-header>Results</q-list-header>
        <q-item tag="label" v-for="statement in serviceResponses" :key="statement.Item" v-if="statement.isNational">
          <q-item-side>
            <!-- <q-icon name="vertical_split" style="font-size: 35px"/> -->
          </q-item-side>
          <q-item-main>
            <q-item-tile label>{{ statement.Item }}</q-item-tile>
            <q-item-tile sublabel>{{ statement.Text }}</q-item-tile>
          </q-item-main>
          <q-item-side>
            <q-checkbox v-model="selectedStatements" color="amber" :val="statement.Item"/>
          </q-item-side>
        </q-item>
    </q-list>
  </q-tab-pane>
  <q-tab-pane name="xtab-2">
    <q-list link separator sparse>
        <q-list-header>Results</q-list-header>
        <q-item tag="label" v-for="statement in serviceResponses" :key="statement.Item" v-if="statement.isLocal">
          <q-item-side>
            <!-- <q-icon name="vertical_split" style="font-size: 35px"/> -->
          </q-item-side>
          <q-item-main>
            <q-item-tile label>{{ statement.Item }}</q-item-tile>
            <q-item-tile sublabel>{{ statement.Text }}</q-item-tile>
          </q-item-main>
          <q-item-side>
            <!-- <q-checkbox v-model="selectedStatements" color="amber" :val="statement.Item"/> -->
            <q-checkbox v-model="selectedStatements" color="amber" :val="statement.Item"/>
          </q-item-side>
        </q-item>
    </q-list>
  </q-tab-pane>
  </q-tabs>
</q-card>
</template>

<script>

import axios from 'axios'
import lodash from 'lodash'

// dummy data to inject until available from service
var yrLevels = ['8']
// var subjects = ['Science', 'Science Understanding', 'Science Inquiry Skills', 'Knowledge & Understanding', 'Values & Attitudes', 'Problem Solving', 'Communicating', 'Physical World', 'Earth & Space']

export default {
  name: 'AlignmentService',
  data () {
    return {
      serviceResponses: [],
      tabsModel: 'xtab-1'
    }
  },
  computed: {
    description: {
      get () {
        return this.$store.state.lc.lcDescription
      }
    },
    selectedStatements: {
      get () {
        return this.$store.state.lc.selectedStatements
      },
      set (val) {
        this.$store.commit('lc/updateSelectedStatements', val)
      }
    },
    statementsCache: {
      get () {
        return this.$store.state.lc.statementsCache
      },
      set (val) {
        this.$store.commit('lc/updateStatementsCache', val)
      }
    },
    selectedYearLevels: {
      get () {
        return this.$store.state.lc.selectedYearLevels
      },
      set (val) {
        this.$store.commit('lc/updateSelectedYearLevels', val)
      }
    },
    selectedCurriculumSubjects: {
      get () {
        return this.$store.state.lc.selectedCurriculumSubjects
      },
      set (val) {
        this.$store.commit('lc/updateSelectedCurriculumSubjects', val)
      }
    }
  },
  watch: {
    description: function (newDescription, oldDescription) {
      if (newDescription === '') {
        return
      }
      this.debouncedInvokeAlignmentService()
    },
    selectedYearLevels: function (newYearLevels, oldYearLevels) {
      if (newYearLevels === oldYearLevels) {
        return
      }
      this.debouncedInvokeAlignmentService()
    },
    selectedStatements: function (newStatements, oldStatements) {
      var cache = this.statementsCache
      var subjects = []
      var yrLevels = []
      var i
      for (i = 0; i < newStatements.length; i++) {
        // de-dupe the list
        var newSubj = cache[newStatements[i]].LearningArea
        if (lodash.indexOf(subjects, newSubj) === -1) {
          subjects.push(newSubj)
        }
        var newYrLvl = cache[newStatements[i]].yearLevel
        if (lodash.indexOf(yrLevels, newYrLvl) === -1) {
          yrLevels.push(newYrLvl)
        }
      }
      this.selectedCurriculumSubjects = subjects
      this.selectedYearLevels = yrLevels
    }
  },
  created: function () {
    this.debouncedInvokeAlignmentService = lodash.debounce(this.invokeAlignmentService, 500)
    // this.debouncedInvokeAlignmentService()
    this.invokeAlignmentService()
  },
  methods: {
    invokeAlignmentService: function () {
      axios.get('/alignservice/curricalign', {
        params: {
          text: this.description,
          year: this.selectedYearLevels.join(', ')
        }
      })
        .then(response => {
          var responses = response.data
          var i
          for (i = 0; i < responses.length; i++) {
            // determine local/national
            responses[i].isNational = false
            responses[i].isLocal = false
            if (responses[i].Item.includes('ACS')) {
              responses[i].isNational = true
            } else {
              responses[i].isLocal = true
            }
            // inject subject / year-level until avaiable from service
            var year = yrLevels[Math.floor(Math.random() * yrLevels.length)]
            // var subject = subjects[Math.floor(Math.random() * subjects.length)]
            responses[i].yearLevel = year
            // responses[i].subject = subject
          }
          // keep a cache of statements
          this.statementsCache = responses
          // add the returned statments to the local array to build ui lists
          this.serviceResponses = responses
        })
        .catch(e => {
          console.log(e)
          // this.errors.push(e)
        })
    }
  }
}
</script>

<style>
</style>
