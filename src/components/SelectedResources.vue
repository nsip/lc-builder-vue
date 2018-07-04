<!--  -->
<!-- Chip list display of subject areas  -->
<!-- selected for this learning challenge -->
<!--  -->
<template>
  <q-card class="bg-white" flat>
    <q-card-title>
      <span slot="subtitle">Selected</span>
    </q-card-title>
    <!-- <q-card-separator /> -->
    <q-card-main>
      <!-- main conent area -->
      <q-chips-input v-model="curriculumResources" chips-color="dark" hide-underline chips-bg-color="amber"/>
    </q-card-main>
  </q-card>
</template>

<script>

export default {
  name: 'SelectedResources',
  data () {
    return {}
  },
  computed: {
    curriculumResources: {
      get () {
        return this.$store.state.lc.selectedResources
      },
      set (val) {
        this.$store.commit('lc/updateSelectedResources', val)
      }
    }
  }
}
</script>

<style>
</style>
