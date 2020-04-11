<template>
  <div>
    <div>
      <v-btn @click="addRows(2)" class="mr-2" small tile outlined color="info">
        Add Rows
      </v-btn>
      <v-btn class="mr-2" small tile outlined color="success">
        Edit Rows
      </v-btn>
      <v-btn @click="resetRows" class="mr-2" small tile outlined color="error">
        Reset Rows
      </v-btn>
      <v-btn
        @click="clickRemove"
        class="mr-2"
        small
        tile
        outlined
        color="warning"
      >
        Remove Rows
      </v-btn>
    </div>
    <br />
    <span>{{ selected }}</span>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="inputtedEvents"
      :single-select="singleSelect"
      show-select
      item-key="dumbKey"
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
    <v-btn @click="logger" small tile color="primary" class="mt-5"
      >Submit</v-btn
    >
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CaptureMovementEventDetailItem",
  computed: {
    ...mapGetters(["commonValuesChoices", "commonValues", "inputtedEvents"]),
  },
  methods: {
    ...mapActions(["addRows", "resetRows", "removeRows"]),
    logger() {},
    clickRemove() {
      this.removeRows(this.selected);
      this.selected = [];
    },
  },
  data() {
    return {
      singleSelect: false,
      selected: [],
      headers: [
        { text: "Customer", value: "customer" },
        { text: "Equipment Type", value: "eqpType" },
        { text: "Authorization Number", value: "authNo" },
        { text: "VGM Method", value: "vgmMethod" },
        { text: "Event Date", value: "eventDate" },
        { text: "Equipment Condition", value: "condition" },
        { text: "Authorization Type", value: "authType" },
        { text: "Event Type", value: "eventType" },
        { text: "VGM Date", value: "vgmDate" },
        { text: "Carrier", value: "carrier" },
        { text: "VGM Responsible Party", value: "facility" },
        { text: "Facility", value: "vgmResParty" },
        { text: "Equipment Type", value: "ladenEmpty" },
        { text: "Seal Type", value: "sealType" },
        { text: "VGM Authorized Official", value: "vgmOfficial" },
      ],
    };
  },
};
</script>
<style scoped>
table {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: inherit;
}

table td,
table th {
  border: 1px solid #ddd;
}

table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:hover {
  background-color: #ddd;
}

table th {
  padding: 5px;
  text-align: left;
  background-color: #546e7a;
  color: white;
}
table body {
  border: 1px solid #546e7a;
}
</style>
