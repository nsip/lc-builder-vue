<!--  -->
<!-- Chip list display of year levels  -->
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
      <q-chips-input v-model="yearLevels" chips-color="dark" hide-underline chips-bg-color="amber"/>
    </q-card-main>
  </q-card>
</template>

<script>

export default {
  name: 'SelectedYearLevels',
  data () {
    return {}
  },
  computed: {
    yearLevels: {
      get () {
        return this.$store.state.lc.selectedYearLevels
      },
      set (val) {
        this.$store.commit('lc/updateSelectedYearLevels', val)
      }
    }
  }
}
</script>

<style>
</style>
