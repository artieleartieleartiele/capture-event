<template>
  <v-expansion-panels
    hover
    :accordion="true"
    :flat="true"
    :focusable="true"
    :tile="true"
    :value="0"
  >
    <v-expansion-panel style="border: 1px solid #546E7A;">
      <v-expansion-panel-header :ripple="true" class="blue-grey darken-1 ma-0">
        <span class="white--text subtitle-1">Capture Movement Event</span>
        <template v-slot:actions>
          <v-icon color="white">$expand</v-icon>
        </template>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="py-2">
        <CaptureMovementEventHeaderItem />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import CaptureMovementEventHeaderItem from "./CaptureMovementEventHeaderItem";

export default {
  name: "CaptureMovementEventHeader",
  components: {
    CaptureMovementEventHeaderItem
  },
  data() {
    return {};
  }
};
</script>
