<!--  -->
<!-- Chip list display of curriculum statements  -->
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
      <q-chips-input v-model="selectedStatements" chips-color="dark" hide-underline chips-bg-color="amber"/>
    </q-card-main>
  </q-card>
</template>

<script>

export default {
  name: 'SelectedCurriculumStatements',
  data () {
    return {}
  },
  computed: {
    selectedStatements: {
      get () {
        return this.$store.state.lc.selectedStatements
      },
      set (val) {
        this.$store.commit('lc/updateSelectedStatements', val)
      }
    }
  }
}
</script>

<style>
</style>
