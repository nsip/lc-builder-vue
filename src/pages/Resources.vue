<template>
  <!-- <q-page padding> -->
  <q-page>
    <!-- <div class="row items-start gutter-xs"> -->
    <div class="row items-start">
        <div class="col">
          <ResourcesService></ResourcesService>
          <!-- <LearningChallenge></LearningChallenge> -->
        </div>
        <div class="col-4">
          <!-- <AlignmentService></AlignmentService> -->
          <!-- <LearningChallenge></LearningChallenge> -->
          <!-- <div class="q-title q-pt-lg">Challenge</div> -->
          <!-- <ChallengeTextEditor></ChallengeTextEditor> -->
          <div class="q-title q-pt-lg">Alignment Statements</div>
          <SelectedCurriculumStatements></SelectedCurriculumStatements>
          <div class="q-title">Year Levels</div>
          <SelectedYearLevels></SelectedYearLevels>
          <div class="q-title">Learning Areas</div>
          <SelectedCurriculumSubjects></SelectedCurriculumSubjects>
          <div class="q-title">Keywords</div>
          <div class="q-title">Resources</div>
          <SelectedResources></SelectedResources>
        </div>
    </div>
    <ChallengeTextModal></ChallengeTextModal>
  </q-page>
</template>

<script>
import LearningChallenge from 'components/LearningChallenge.vue'
import ResourcesService from 'components/ResourcesService.vue'
import ChallengeTextModal from 'components/ChallengeTextModal.vue'
import ChallengeTextEditor from 'components/ChallengeTextEditor.vue'
import SelectedCurriculumStatements from 'components/SelectedCurriculumStatements.vue'
import SelectedYearLevels from 'components/SelectedYearLevels.vue'
import SelectedCurriculumSubjects from 'components/SelectedCurriculumSubjects.vue'
import SelectedResources from 'components/SelectedResources.vue'

export default {
  name: 'Resources',
  data () {
    return {}
  },
  components: {
    LearningChallenge: LearningChallenge,
    ResourcesService: ResourcesService,
    ChallengeTextModal: ChallengeTextModal,
    ChallengeTextEditor: ChallengeTextEditor,
    SelectedCurriculumStatements: SelectedCurriculumStatements,
    SelectedYearLevels: SelectedYearLevels,
    SelectedCurriculumSubjects: SelectedCurriculumSubjects,
    SelectedResources: SelectedResources
  }
}
</script>

<style>
</style>
