<template>
  <q-modal v-model="opened" position="top" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
    <q-modal-layout>
    <q-toolbar slot="header">
      <q-btn
        flat
        round
        dense
        v-close-overlay
        icon="keyboard_arrow_left"
      />
      <q-toolbar-title>
        Update Challenge
      </q-toolbar-title>
    </q-toolbar>

    <q-toolbar slot="footer">
      <q-toolbar-title>
      </q-toolbar-title>
      <q-btn
        color="primary"
        @click="opened = false"
        label="Done"
      />
    </q-toolbar>

    <!-- main conent area -->
    <div class="layout-padding">
      <h5>Change Learning Challenge Text</h5>
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
    </q-modal-layout>
  </q-modal>
</template>

<script>
export default {
  name: 'ChallengeTextModal',
  data () {
    return {}
  },
  computed: {
    opened: {
      get () {
        return this.$store.state.lc.lcTextModal
      },
      set (val) {
        this.$store.commit('lc/updateLcTextModal', val)
      }
    },
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
