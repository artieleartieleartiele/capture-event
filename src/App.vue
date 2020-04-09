<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <template>
        <v-list-item></v-list-item>
      </template>
      <v-list dense v-for="[icon, name] in menuList" :key="name">
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-list-item link>
              <v-list-item-action>
                <v-icon>{{ icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title v-on="on">{{ name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <span>{{ name }}</span>
        </v-tooltip>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="rgb(4,96,237)" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <CaptureMovementEvent />
    </v-content>

    <v-footer color="rgb(4,96,237)" app class="justify-center">
      <span class="white--text">OneOperation &copy; 2020</span>
    </v-footer>
  </v-app>
</template>

<script>
import CaptureMovementEvent from "./components/CaptureMovementEvent";

export default {
  name: "App",
  components: {
    CaptureMovementEvent
  },
  data: () => ({
    drawer: true,
    title: "Smart Vendor Platform",
    menuList: [
      ["mdi-home", "Capture Movement Event"],
      ["mdi-home", "Capture Creation/Termination Event"],
      ["mdi-home", "Event Enquiry"],
      ["mdi-home", "Booking Enquiry"]
    ]
  })
};
</script>
<style>
* {
  font-size: 12px;
}
</style>
