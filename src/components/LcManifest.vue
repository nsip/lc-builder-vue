<!--  -->
<!-- summary manifest view of the challenge -->
<!--  -->
<template>
  <div class="row">
    <div class="col-6 q-pr-md">
    <q-card square class="bg-white">
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
        <div class="row">
          <div class="col-auto q-subheading text-faded">Curriculum Alignment:</div>
        </div>
        <div class="row">
          <div class="col-12">
            <span class="q-subheading text-faded" v-for="(statement, index) in selectedStatements" :key="statement">
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
            <q-icon name="open_in_new" style="font-size: 25px"/>
          </q-item-side>
          <q-item-main>
            <q-item-tile sublabel>
              <q-btn class="fit" align="left" flat @click="resourceLinkHandler(resource)"><span style="text-overflow: ellipsis; overflow: hidden">{{ resource }}</span></q-btn>
            </q-item-tile>
          </q-item-main>
          <q-item-side>
          </q-item-side>
        </q-item>
      </q-list>
      <q-card-actions>
      </q-card-actions>
    </q-card>
  </div>
  <div class="col-6">
    <q-card square class="bg-white">
      <q-card-title>
        <q-icon class="q-pr-md" name="people" style="font-size: 25px"/>People
      </q-card-title>
      <q-card-main>
        <q-list dense>
          <q-list-header>Collaborate:</q-list-header>
          <q-item tag="label" v-for="teacher in collaborators" :key="teacher">
            <q-item-side>
              <!-- <q-icon name="open_in_new" style="font-size: 25px"/> -->
            </q-item-side>
            <q-item-main>
              <q-item-tile sublabel>{{ teacher }}
              </q-item-tile>
            </q-item-main>
            <q-item-side>
            </q-item-side>
          </q-item>
          <q-list-header>Notify:</q-list-header>
          <q-item tag="label" v-for="teacher in notifies" :key="teacher">
            <q-item-side>
              <!-- <q-icon name="open_in_new" style="font-size: 25px"/> -->
            </q-item-side>
            <q-item-main>
              <q-item-tile sublabel>{{ teacher }}
              </q-item-tile>
            </q-item-main>
            <q-item-side>
            </q-item-side>
          </q-item>
        </q-list>
      </q-card-main>
      <q-card-separator />
      <q-card-title>
        <q-icon class="q-pr-md" name="assessment" style="font-size: 25px"/>Assessment
      </q-card-title>
      <q-card-main>
        <p>Rubric has been created</p>
        <p>1 Long-form submission, 3 quizzes</p>
      </q-card-main>
      <q-card-separator />
      <q-card-title>
        <q-icon class="q-pr-md" name="timeline" style="font-size: 25px"/>Timeline
      </q-card-title>
      <q-card-main>
        <q-list dense>
          <q-list-header>Use With:</q-list-header>
          <q-item tag="label" v-for="time in timelines" :key="time.class">
            <q-item-side>
              <!-- <q-icon name="open_in_new" style="font-size: 25px"/> -->
            </q-item-side>
            <q-item-main>
              <q-item-tile sublabel>{{ time.class }}</q-item-tile>
            </q-item-main>
            <q-item-side>
              <q-item-tile sublabel>{{ time.time }}</q-item-tile>
            </q-item-side>
          </q-item>
        </q-list>
      </q-card-main>
      <q-card-separator />
      <q-card-title>
        <q-icon class="q-pr-md" name="assessment" style="font-size: 25px"/>Actions
      </q-card-title>
      <q-card-actions align="end">
        <q-btn flat color="primary" label="Deploy"/>
        <q-btn flat color="primary" label="Monitor"/>
      </q-card-actions>
    </q-card>
  </div>
  </div>
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
    return {
      // temp data until people service active
      collaborators: ['Mr Geology', 'Mrs Science'],
      notifies: ['Mrs Physics', 'Mrs Maths'],
      timelines: [
        {class: '7b', time: 'Wednesday 10:00 am'},
        {class: '7f', time: 'Friday 11:30 am'}
      ]
    }
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
