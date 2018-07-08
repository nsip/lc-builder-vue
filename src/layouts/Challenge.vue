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
          <q-item>
            <q-item-tile>
              <q-btn
                disabled
                color="amber"
                text-color="black"
                icon="people"
                round
                to="people"
                replace
              />
              <div class="q-caption q-pt-sm">people</div>
            </q-item-tile>
          </q-item>
          <q-item>
            <q-item-tile>
              <q-btn
                disabled
                color="amber"
                text-color="black"
                icon="assessment"
                round
                to="assessment"
                replace
              />
              <div class="q-caption q-pt-sm">assessment</div>
            </q-item-tile>
          </q-item>
          <q-item>
            <q-item-tile>
              <q-btn
                disabled
                color="amber"
                text-color="black"
                icon="timeline"
                round
                to="timeline"
                replace
              />
              <div class="q-caption q-pt-sm">timeline</div>
            </q-item-tile>
          </q-item>
          <q-item>
            <q-item-tile>
              <q-btn
                disabled
                color="amber"
                text-color="black"
                icon="play_arrow"
                round
                to="actions"
                replace
              />
              <div class="q-caption q-pt-sm">actions</div>
            </q-item-tile>
          </q-item>
          <q-item>
            <q-item-tile>
              <q-btn
                color="amber"
                text-color="black"
                icon="playlist_add_check"
                round
                to="manifest"
                replace
              />
              <div class="q-caption q-pt-sm">manifest</div>
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
