<!--  -->
<!-- List display of secondary curriculum statements  -->
<!-- selected for this learning challenge -->
<!--  -->
<template>
  <q-card class="bg-white" flat>
    <q-card-title>
      <span slot="subtitle">Secondary</span>
    </q-card-title>
    <!-- <q-card-separator /> -->
    <q-card-main>
      <!-- main conent area -->
      <q-chips-input v-model="secondaryStatements" chips-color="dark" hide-underline chips-bg-color="amber"/>
    </q-card-main>
  </q-card>
</template>

<script>

export default {
  name: 'SecondaryCurriculumStatements',
  data () {
    return {}
  },
  computed: {
    primaryStatements: {
      get () {
        return this.$store.state.lc.secondaryStatements
      },
      set (val) {
        this.$store.commit('lc/updateSecondaryStatements', val)
      }
    }
  }
}
</script>

<style>
</style>
