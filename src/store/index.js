import Vue from 'vue'
import Vuex from 'vuex'

// we first import the module
import lc from './lc'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    // then we reference it
    lc
  }
})

// if we want some HMR magic for it, we handle
// the hot update like below. Notice we guard this
// code with "process.env.DEV" -- so this doesn't
// get into our production build (and it shouldn't).
if (process.env.DEV && module.hot) {
  module.hot.accept(['./lc'], () => {
    const newLc = require('./lc').default
    store.hotUpdate({ modules: { lc: newLc } })
  })
}

export default store
