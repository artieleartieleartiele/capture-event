<template>
  <div>
    <v-row>
      <v-col>
        <v-btn class="mr-2" :elevation="7" tile outlined color="info"
          >Add Rows</v-btn
        >
        <v-btn class="mr-2" :elevation="7" tile outlined color="success"
          >Edit Rows</v-btn
        >
        <v-btn class="mr-2" :elevation="7" tile outlined color="warning"
          >Remove Rows</v-btn
        >
        <v-btn class="mr-2" :elevation="7" tile outlined color="error"
          >Reset Rows</v-btn
        >
        <v-btn :elevation="7" tile outlined color="blue-grey darken-1"
          >Toggle Column Display</v-btn
        >
        <!-- open dropdown to de-select column display -->
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <CaptureMovementEventDetailItem />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CaptureMovementEventDetailItem from "./CaptureMovementEventDetailItem";

export default {
  name: "CaptureMovementEventDetail",
  components: {
    CaptureMovementEventDetailItem,
  },
  data() {
    return {};
  },
};
</script>
