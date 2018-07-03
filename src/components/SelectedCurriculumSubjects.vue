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
      <q-chips-input v-model="curriculumSubjects" chips-color="dark" hide-underline chips-bg-color="amber"/>
    </q-card-main>
  </q-card>
</template>

<script>

export default {
  name: 'SelectedCurriculumSubjects',
  data () {
    return {}
  },
  computed: {
    curriculumSubjects: {
      get () {
        return this.$store.state.lc.selectedCurriculumSubjects
      },
      set (val) {
        this.$store.commit('lc/updateSelectedCurriculumSubjects', val)
      }
    }
  }
}
</script>

<style>
</style>
