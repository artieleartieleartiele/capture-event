<template>
  <v-container>
    <v-row>
      <v-col>
        <CaptureMovementEventHeader />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <CaptureMovementEventDetail />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CaptureMovementEventHeader from "./CaptureMovementEventHeader";
import CaptureMovementEventDetail from "./CaptureMovementEventDetail";

export default {
  name: "CaptureMovementEvent",
  components: {
    CaptureMovementEventHeader,
    CaptureMovementEventDetail,
  },
};
</script>
