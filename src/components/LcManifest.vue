
<template>
    <q-card inline class="bg-white" style="width: 500px">
      <ChallengeImageChooser></ChallengeImageChooser>
      <q-card-separator />
      <q-card-title >
        <p class="q-title">{{ sting }}</p>
        <p class="q-subheading">{{ description }}</p>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <div class="row text-faded">
          <div class="col-3 q-subheading">Year Levels:</div>
          <div class="col-auto">
            <span class="q-subheading" v-for="(yrLevel, index) in selectedYearLevels" :key="yrLevel">
              {{ yrLevel }}
              <span v-if="index < selectedYearLevels.length - 1">,
              </span>
            </span>
          </div>
        </div>
        <div class="row text-faded">
          <div class="col-3 q-subheading">Learning Areas:</div>
          <div class="col-auto">
            <span class="q-subheading" v-for="(subject, index) in selectedCurriculumSubjects" :key="subject">
              {{ subject }}
              <span v-if="index < selectedCurriculumSubjects.length - 1">
                -
              </span>
            </span>
          </div>
        </div>
      </q-card-main>
      <q-card-separator />
      <q-card-main>
        <div class="row text-faded">
          <div class="col-5 q-subheading">Curriculum Alignment:</div>
          <div class="col-auto">
            <span class="q-subheading" v-for="(statement, index) in selectedStatements" :key="statement">
              {{ statement }}
              <span v-if="index < selectedStatements.length - 1">
                -
              </span>
            </span>
          </div>
        </div>
      </q-card-main>
      <q-card-separator />
      <q-list>
        <q-list-header>Resources:</q-list-header>
        <q-item tag="label" v-for="resource in selectedResources" :key="resource">
          <q-item-side>
            <q-icon name="open_in_new" style="font-size: 35px"/>
          </q-item-side>
          <q-item-main>
            <q-item-tile sublabel>
              <q-btn class="fit" align="left" flat @click="resourceLinkHandler(resource)">{{ resource }}</q-btn>
            </q-item-tile>
          </q-item-main>
          <q-item-side>
          </q-item-side>
        </q-item>
      </q-list>
      <q-card-actions>
      </q-card-actions>
    </q-card>
</template>

<script>

import ChallengeTextEditor from 'components/ChallengeTextEditor.vue'
import ChallengeImageChooser from 'components/ChallengeImageChooser.vue'

export default {
  name: 'LcManifest',
  components: {
    ChallengeTextEditor: ChallengeTextEditor,
    ChallengeImageChooser: ChallengeImageChooser
    // SelectedCurriculumStatements: SelectedCurriculumStatements,
    // SelectedYearLevels: SelectedYearLevels,
    // SelectedCurriculumSubjects: SelectedCurriculumSubjects,
    // SelectedResources: SelectedResources,
    // LcManifest: LcManifest
  },
  data () {
    return {}
  },
  methods: {
    resourceLinkHandler: function (resource) {
      window.open(resource, '_blank')
    }
  },
  computed: {
    sting: {
      get () {
        return this.$store.state.lc.lcSting
      }
    },
    description: {
      get () {
        return this.$store.state.lc.lcDescription
      }
    },
    selectedYearLevels: {
      get () {
        return this.$store.state.lc.selectedYearLevels
      }
    },
    selectedCurriculumSubjects: {
      get () {
        return this.$store.state.lc.selectedCurriculumSubjects
      }
    },
    selectedStatements: {
      get () {
        return this.$store.state.lc.selectedStatements
      }
    },
    selectedResources: {
      get () {
        return this.$store.state.lc.selectedResources
      }
    }
  }
}
</script>

<style>
</style>
