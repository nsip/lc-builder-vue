<template>
  <q-page padding>
    <div class="row items-start gutter-sm">
        <div class="col-5">
          <LearningChallenge></LearningChallenge>
        </div>
        <div class="col">
        </div>
    </div>
  </q-page>
</template>

<script>
import LearningChallenge from 'components/LearningChallenge.vue'

export default {
  name: 'Resources',
  data () {
    return {}
  },
  components: {
    LearningChallenge: LearningChallenge
  }
}
</script>

<style>
</style>
