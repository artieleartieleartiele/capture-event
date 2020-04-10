<template>
  <div>
    <v-row>
      <v-col>
        <v-btn class="mr-2" small tile outlined color="success">
          Edit Rows
        </v-btn>
        <v-btn class="mr-2" small tile outlined color="warning">
          Remove Rows
        </v-btn>
        <v-btn class="mr-2" small tile outlined color="error">
          Reset Rows
        </v-btn>
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
