<template>
  <q-page padding>
    <!-- content -->
    <div>
      <div class="row justify-center gutter-y-xl">
        <div class="col-10">
          <h5>New Learning Challenge</h5>
          <challengeImageChooser></challengeImageChooser>
        </div>
      </div>
      <div class="layout-padding"></div>
      <div class="row justify-center gutter-y-xl">
        <div class="col-10"><q-input v-model="sting" float-label="Sting" placeholder="catchy title here" class="no-margin"/></div>
      </div>
      <div class="row">
        <p>
          <br>
        </p>
      </div>
      <div class="row justify-center gutter-y-xl">
        <div class="col-10"><q-input v-model="description" type="textarea" float-label="Description" placeholder="longer text or keywords here" class="no-margin"/></div>
      </div>
    </div>
  </q-page>
</template>

<script>

import ChallengeImageChooser from 'components/ChallengeImageChooser.vue'

export default {
  name: 'ChallengeText',
  components: {
    ChallengeImageChooser: ChallengeImageChooser
  },
  data () {
    return {
      // slide: 2
    }
  },
  computed: {
    sting: {
      get () {
        return this.$store.state.lc.lcSting
      },
      set (val) {
        this.$store.commit('lc/updateChallengeSting', val)
      }
    },
    description: {
      get () {
        return this.$store.state.lc.lcDescription
      },
      set (val) {
        this.$store.commit('lc/updateChallengeDescription', val)
      }
    }
  }
}
</script>

<style>
</style>
