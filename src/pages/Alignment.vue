<template>
  <!-- <q-page padding> -->
  <q-page>
    <!-- <div class="row items-start gutter-xs"> -->
    <div class="row items-start">
        <div class="col">
          <AlignmentService></AlignmentService>
          <!-- <LearningChallenge></LearningChallenge> -->
        </div>
        <div class="col-4">
          <!-- <AlignmentService></AlignmentService> -->
          <!-- <LearningChallenge></LearningChallenge> -->
          <div class="q-title q-pt-lg">Challenge</div>
          <ChallengeTextEditor></ChallengeTextEditor>
          <div class="q-title">Alignment Statements</div>
          <SelectedCurriculumStatements></SelectedCurriculumStatements>
          <div class="q-title">Year Levels</div>
          <SelectedYearLevels></SelectedYearLevels>
          <div class="q-title">Learning Areas</div>
          <SelectedCurriculumSubjects></SelectedCurriculumSubjects>
        </div>
    </div>
    <ChallengeTextModal></ChallengeTextModal>
  </q-page>
</template>

<script>
import LearningChallenge from 'components/LearningChallenge.vue'
import AlignmentService from 'components/AlignmentService.vue'
import ChallengeTextModal from 'components/ChallengeTextModal.vue'
import ChallengeTextEditor from 'components/ChallengeTextEditor.vue'
import SelectedCurriculumStatements from 'components/SelectedCurriculumStatements.vue'
import SelectedYearLevels from 'components/SelectedYearLevels.vue'
import SelectedCurriculumSubjects from 'components/SelectedCurriculumSubjects.vue'

export default {
  name: 'Alignment',
  data () {
    return {}
  },
  components: {
    LearningChallenge: LearningChallenge,
    AlignmentService: AlignmentService,
    ChallengeTextModal: ChallengeTextModal,
    ChallengeTextEditor: ChallengeTextEditor,
    SelectedCurriculumStatements: SelectedCurriculumStatements,
    SelectedYearLevels: SelectedYearLevels,
    SelectedCurriculumSubjects: SelectedCurriculumSubjects
  }
}
</script>

<style>
</style>
