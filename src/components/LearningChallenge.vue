
<template>
  <!--  -->
  <!-- Chalenge component starts here -->
  <!--  -->
    <q-card inline class="bg-white">
      <q-card-media>
        <img src="~assets/anglepoise.jpg" height="300px">
      </q-card-media>
      <q-card-separator />
      <q-card-title >
        <p class="q-title">{{ sting }}</p>
      </q-card-title>
      <q-card-main>
        <p class="q-subheading">{{ description }}</p>
        <p class="text-faded">Year Level | Subject</p>
        <q-btn round color="secondary" class="float-right" @click="modalOpened = true">
          <q-icon name="edit" />
        </q-btn>
      </q-card-main>
      <q-card-separator />
      <q-list link>
        <q-list-header>Primary Alignment</q-list-header>
        <q-item tag="label" v-for="statement in primaryStatements" :key="statement.Item">
          <q-item-side>
            <q-icon name="vertical_split" style="font-size: 35px"/>
          </q-item-side>
          <q-item-main>
            <q-item-tile label>{{ statement.Item }}</q-item-tile>
            <q-item-tile sublabel>{{ statement.Text }}</q-item-tile>
          </q-item-main>
          <q-item-side>
            <!-- <q-checkbox v-model="primaryStatements" color="secondary" :val="statement"/> -->
            <!-- <q-radio v-model="primaryStatement" color="secondary" :val="statement"/> -->
          </q-item-side>
        </q-item>
      </q-list>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat color="primary" icon="edit" label="Change" @click="modalOpened = true"/>
      </q-card-actions>
    </q-card>
</template>

<script>

export default {
  name: 'LearningChallenge',
  data () {
    return {}
  },
  computed: {
    sting: {
      get () {
        return this.$store.state.lc.lcSting
      }
    },
    description: {
      get () {
        return this.$store.state.lc.lcDescription
      }
    },
    modalOpened: {
      get () {
        return this.$store.state.lc.lcTextModal
      },
      set (val) {
        this.$store.commit('lc/updateLcTextModal', val)
      }
    },
    primaryStatements: {
      get () {
        return this.$store.state.lc.primaryStatements
      }
    }
  }
}
</script>

<style>
</style>
