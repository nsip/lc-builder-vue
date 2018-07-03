<!--  -->
<!-- simple card layout of the -->
<!-- two challenge text fields -->
<!--  -->
<template>
  <q-card class="bg-white" flat>
    <!-- <q-card-title> -->
      <!-- Challenge -->
    <!-- </q-card-title> -->
    <!-- <q-card-separator /> -->
    <q-card-main>
      <!-- main conent area -->
      <div>
        <div class="row justify-center gutter-y-xl">
        <div class="col-12">
        <!-- <q-field icon="cloud" label="Sting"> -->
        <q-field label="Sting" label-width=3>
          <q-input v-model="sting" placeholder="catchy title here" class="no-margin"/>
        </q-field>
      </div>
      </div>
      <div class="row">
        <p>
          <br>
        </p>
      </div>
      <div class="row justify-center gutter-y-xl">
        <div class="col-12">
          <q-field label="Description" label-width=3>
            <q-input v-model="description" type="textarea" label="Description" placeholder="longer text or keywords here" class="no-margin"/>
          </q-field>
        </div>
      </div>
    </div>
    </q-card-main>
  </q-card>
</template>

<script>
export default {
  name: 'ChallengeTextEditor',
  data () {
    return {}
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
