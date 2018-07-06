<template>
  <q-page padding>
    <!-- content -->
    <div>
      <div class="row justify-center gutter-y-xl">
        <div class="col-10">
          <h5>New Learning Challenge</h5>
            <q-carousel
              ref="carousel"
              v-model="selectedSlide"
              color="white"
              arrows
              height="250px"
              :thumbnails="[
                'statics/rocks.jpg',
                'statics/physics.jpg',
                'statics/nature.jpg',
                'statics/earth.jpg',
                'statics/chemistry.jpg'
              ]"
            >
              <q-carousel-slide img-src="statics/rocks.jpg" />
              <q-carousel-slide img-src="statics/physics.jpg" />
              <q-carousel-slide img-src="statics/nature.jpg" />
              <q-carousel-slide img-src="statics/earth.jpg" />
              <q-carousel-slide img-src="statics/chemistry.jpg" />
            </q-carousel>
        </div>
      </div>
      <div class="layout-padding"></div>
      <div class="row justify-center gutter-y-xl">
        <div class="col-10"><q-input v-model="sting" float-label="Sting" placeholder="catchy title here" class="no-margin"/></div>
      </div>
      <div class="row">
        <p>
          <br>
        </p>
      </div>
      <div class="row justify-center gutter-y-xl">
        <div class="col-10"><q-input v-model="description" type="textarea" float-label="Description" placeholder="longer text or keywords here" class="no-margin"/></div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ChallengeText',
  data () {
    return {
      // slide: 2
    }
  },
  computed: {
    selectedSlide: {
      get () {
        return this.$store.state.lc.selectedSlide
      },
      set (val) {
        this.$store.commit('lc/updateSelectedSlide', val)
      }
    },
    sting: {
      get () {
        return this.$store.state.lc.lcSting
      },
      set (val) {
        this.$store.commit('lc/updateChallengeSting', val)
      }
    },
    description: {
      get () {
        return this.$store.state.lc.lcDescription
      },
      set (val) {
        this.$store.commit('lc/updateChallengeDescription', val)
      }
    }
  },
  created: function () {
    this.$nextTick(() => {
      this.$refs.carousel.goToSlide(this.selectedSlide)
    })
  }
}
</script>

<style>
</style>
