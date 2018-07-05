<!-- -->
<!-- Displays results of queries to the Resources Service -->
<!-- -->
<!--  -->

<template>

<q-card class="bg-white" flat>
    <q-tabs no-pane-border align="justify" v-model="tabsModel" color="amber" text-color="black" inverted>
      <q-tab slot="title" name="xtab-1" icon="message" label="Curated"/>
      <q-tab slot="title" name="xtab-2" icon="fingerprint" label="Web"/>
    <q-tab-pane name="xtab-1">
    <q-list link separator sparse>
        <q-list-header>Results</q-list-header>
        <q-item tag="label" v-for="statement in serviceResponses" :key="statement.Url">
          <q-item-side>
            <!-- <q-icon name="vertical_split" style="font-size: 35px"/> -->
            <q-btn round outline color="amber" icon="card_giftcard" @click="linkHandler(statement)"/>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>Aligned to: {{ statement.Statement }}</q-item-tile>
            <q-item-tile sublabel>{{ statement.Content }}</q-item-tile>
            <!-- <q-rating/> -->
          </q-item-main>
          <q-item-side>
            <q-checkbox v-model="selectedResources" color="amber" :val="statement.Url"/>
          </q-item-side>
        </q-item>
    </q-list>
  </q-tab-pane>
  <q-tab-pane name="xtab-2">
    <q-list link separator sparse>
        <q-list-header>Results</q-list-header>
        <q-item tag="label" v-for="searchResult in searchResponses" :key="searchResult.displayUrl">
          <q-item-side>
            <q-btn round outline color="amber" icon="card_giftcard" @click="searchLinkHandler(searchResult)"/>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>{{ searchResult.name }}</q-item-tile>
            <q-item-tile sublabel>{{ searchResult.snippet }}</q-item-tile>
          </q-item-main>
          <q-item-side>
            <!-- <q-checkbox v-model="selectedStatements" color="amber" :val="statement.Item"/> -->
            <q-checkbox v-model="selectedResources" color="amber" :val="searchResult.displayUrl"/>
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
// var yrLevels = ['8']
// var subjects = ['Science', 'Science Understanding', 'Science Inquiry Skills', 'Knowledge & Understanding', 'Values & Attitudes', 'Problem Solving', 'Communicating', 'Physical World', 'Earth & Space']

export default {
  name: 'ResourcesService',
  data () {
    return {
      serviceResponses: [],
      searchResponses: [],
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
    },
    selectedResources: {
      get () {
        return this.$store.state.lc.selectedResources
      },
      set (val) {
        this.$store.commit('lc/updateSelectedResources', val)
      }
    }
  },
  watch: {
    description: function (newDescription, oldDescription) {
      if (newDescription === '') {
        return
      }
      this.debouncedInvokeResourcesService()
      this.debouncedInvokeSearchService()
    },
    selectedYearLevels: function (newYearLevels, oldYearLevels) {
      if (newYearLevels === oldYearLevels) {
        return
      }
      this.debouncedInvokeResourcesService()
    },
    selectedCurriculumSubjects: function (newSubjects, oldSubjects) {
      if (newSubjects === oldSubjects) {
        return
      }
      this.debouncedInvokeSearchService()
    },
    selectedStatements: function (newStatements, oldStatements) {
      var cache = this.statementsCache
      var subjects = []
      var yrLevels = []
      var i
      for (i = 0; i < newStatements.length; i++) {
        // de-dupe the list
        var newSubj = cache[newStatements[i]].subject
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
      this.debouncedInvokeResourcesService()
    }
    // selected subjects used for google search
  },
  created: function () {
    this.debouncedInvokeResourcesService = lodash.debounce(this.invokeResourcesService, 500)
    this.invokeResourcesService()
    this.debouncedInvokeSearchService = lodash.debounce(this.invokeSearchService, 500)
    this.invokeSearchService()
  },
  methods: {
    linkHandler: function (resource) {
      window.open(resource.Url, '_blank')
    },
    searchLinkHandler: function (resource) {
      window.open(resource.url, '_blank')
    },
    invokeResourcesService: function () {
      axios.get('/alignservice/align', {
        params: {
          item: this.selectedStatements.join(', '),
          year: this.selectedYearLevels.join(', '),
          area: 'Science'
        }
      })
        .then(response => {
          var responses = response.data
          // add the returned statments to the local array to build ui lists
          this.serviceResponses = responses
        })
        .catch(e => {
          console.log(e)
          // this.errors.push(e)
        })
    },
    invokeSearchService: function () {
      axios.get('/alignservice/resourceSearch', {
        params: {
          searchTerms: this.description + ' ' + this.selectedCurriculumSubjects.join(' ')
        }
      })
        .then(response => {
          var responses = response.data
          // add the returned statments to the local array to build ui lists
          // console.log('SEARCH:')
          // console.log(responses)
          // console.log(responses.webPages.value)
          this.searchResponses = responses.webPages.value
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
