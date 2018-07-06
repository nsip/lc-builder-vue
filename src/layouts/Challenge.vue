<template>
  <q-layout> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-layout-drawer
      side="left"
      v-model="leftDrawer"
      mini
      mini-width="85px"
      content-class="bg-white"
    >
      <!-- Drawer Content here -->
      <q-list no-border>
          <q-item>
            <q-item-tile>
              <q-btn
                color="amber"
                text-color="black"
                icon="edit"
                round
                to="challengeText"
                replace
              />
              <div class="q-caption q-pt-sm">text</div>
            </q-item-tile>
          </q-item>
          <q-item>
            <q-item-tile>
              <q-btn
                color="amber"
                text-color="black"
                icon="map"
                round
                to="alignment"
                replace
              />
              <div class="q-caption q-pt-sm">alignment</div>
            </q-item-tile>
          </q-item>
          <q-item>
            <q-item-tile>
              <q-btn
                color="amber"
                text-color="black"
                icon="assignment"
                round
                to="resources"
                replace
              />
              <div class="q-caption q-pt-sm">resources</div>
            </q-item-tile>
          </q-item>

      </q-list>
    </q-layout-drawer>

    <!--  -->
    <!-- main content area -->
    <!--  -->
    <q-page-container class="bg-white">
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'Challenge',
  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>

<style>
</style>
