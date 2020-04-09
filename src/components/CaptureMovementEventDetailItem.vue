<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    class="elevation-1"
  >
    <template v-slot:top>
      <v-switch
        v-model="singleSelect"
        label="Single select"
        class="pa-3"
      ></v-switch>
    </template>
  </v-data-table>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CaptureMovementEventDetailItem",
  computed: {
    ...mapGetters(["commonValuesList", "labelsList"]),
  },
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        { text: "Customer" },
        { text: "Equipment Type" },
        { text: "Authorization Number" },
        { text: "VGM Method" },
        { text: "Event Date" },
        { text: "Equipment Condition" },
        { text: "Authorization Type" },
        { text: "Event Type" },
        { text: "VGM Date" },
        { text: "Carrier" },
        { text: "VGM Responsible Party" },
        { text: "Facility" },
        { text: "Equipment Type" },
        { text: "Seal Type" },
        { text: "VGM Authorized Official" },
      ],
      desserts: [],
    };
  },
};
</script>
