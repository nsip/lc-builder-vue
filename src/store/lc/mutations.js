
// import lodash from 'lodash'

export const updateChallengeSting = (state, update) => {
  state.lcSting = update
}

export const updateChallengeDescription = (state, update) => {
  state.lcDescription = update
}

export const updateLcTextModal = (state, update) => {
  state.lcTextModal = update
}

export const updateSelectedStatements = (state, update) => {
  state.selectedStatements = update
}

export const updateStatementsCache = (state, update) => {
  var i
  for (i = 0; i < update.length; i++) {
    // on;y update if not already cached
    if (!state.statementsCache.hasOwnProperty(update[i].Item)) {
      state.statementsCache[update[i].Item] = update[i]
    }
  }
}

export const updateSelectedYearLevels = (state, update) => {
  state.selectedYearLevels = update
}

export const updateSelectedCurriculumSubjects = (state, update) => {
  state.selectedCurriculumSubjects = update
}

export const updateSelectedResources = (state, update) => {
  state.selectedResources = update
}

export const updateSelectedSlide = (state, update) => {
  state.selectedSlide = update
}
