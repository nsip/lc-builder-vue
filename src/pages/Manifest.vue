<!--  -->
<!-- page template for manifest display -->
<!-- most of the work done by LcManifest component -->
<template>
  <!-- <q-page padding> -->
  <q-page padding>
    <!-- <div class="row items-start gutter-xs"> -->
    <div class="row items-start justify-center">
        <div class="col-12">
          <LcManifest></LcManifest>
        </div>
    </div>
  </q-page>
</template>

<script>
import ResourcesService from 'components/ResourcesService.vue'
import ChallengeTextEditor from 'components/ChallengeTextEditor.vue'
import SelectedCurriculumStatements from 'components/SelectedCurriculumStatements.vue'
import SelectedYearLevels from 'components/SelectedYearLevels.vue'
import SelectedCurriculumSubjects from 'components/SelectedCurriculumSubjects.vue'
import SelectedResources from 'components/SelectedResources.vue'
import LcManifest from 'components/LcManifest.vue'

export default {
  name: 'Resources',
  data () {
    return {}
  },
  components: {
    ResourcesService: ResourcesService,
    ChallengeTextEditor: ChallengeTextEditor,
    SelectedCurriculumStatements: SelectedCurriculumStatements,
    SelectedYearLevels: SelectedYearLevels,
    SelectedCurriculumSubjects: SelectedCurriculumSubjects,
    SelectedResources: SelectedResources,
    LcManifest: LcManifest
  }
}
</script>

<style>
</style>
