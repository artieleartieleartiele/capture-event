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
    <table>
      <thead>
        <tr>
          <th>Action</th>
          <th>Customer</th>
          <th>Equipment Type</th>
          <th>Authorization Number</th>
          <th>VGM Method</th>
          <th>Event Date</th>
          <th>Equipment Condition</th>
          <th>Authorization Type</th>
          <th>Event Type</th>
          <th>VGM Date</th>
          <th>Carrier</th>
          <th>VGM Responsible Party</th>
          <th>Facility</th>
          <th>Equipment Type</th>
          <th>Seal Type</th>
          <th>VGM Authorized Official</th>
        </tr>
      </thead>
      <tbody v-show="inputtedEvents.length !== 0">
        <tr v-for="(event, i) in inputtedEvents" :key="i">
          <td><v-checkbox :value="i" v-model="selected" /></td>
          <td><input type="text" v-model="event.customer" /></td>
          <td><input type="text" v-model="event.eqpType" /></td>
          <td><input type="text" v-model="event.authNo" /></td>
          <td><input type="text" v-model="event.vgmMethod" /></td>
          <td><input type="text" v-model="event.eventDate" /></td>
          <td><input type="text" v-model="event.condition" /></td>
          <td><input type="text" v-model="event.authType" /></td>
          <td><input type="text" v-model="event.eventType" /></td>
          <td><input type="text" v-model="event.vgmDate" /></td>
          <td><input type="text" v-model="event.carrier" /></td>
          <td><input type="text" v-model="event.facility" /></td>
          <td><input type="text" v-model="event.vgmResParty" /></td>
          <td><input type="text" v-model="event.ladenEmpty" /></td>
          <td><input type="text" v-model="event.sealType" /></td>
          <td><input type="text" v-model="event.vgmOfficial" /></td>
        </tr>
      </tbody>
    </table>

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
    logger() {
      console.log(this.selected);
    },
    clickRemove() {
      this.removeRows(this.selected);
      this.selected = [];
    },
  },
  data() {
    return {
      selected: [],
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
