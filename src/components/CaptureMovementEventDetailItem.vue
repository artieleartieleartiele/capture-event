<template>
  <!-- <v-data-table
    v-model="selected"
    :headers="headers"
    :items="events"
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
  </v-data-table> -->

  <div>
    <v-simple-table :dense="true" :fixed-header="true">
      <!-- <template v-slot:events> -->
      <thead>
        <tr>
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
      <tbody>
        <tr v-for="event in events" :key="event">
          <td>{{ commonValues.customer }}</td>
          <td>{{ commonValues.eqpType }}</td>
          <td>{{ commonValues.authNo }}</td>
          <td>{{ commonValues.vgmMethod }}</td>
          <td>{{ commonValues.eventDate }}</td>
          <td>{{ commonValues.condition }}</td>
          <td>{{ commonValues.authType }}</td>
          <td>{{ commonValues.eventType }}</td>
          <td>{{ commonValues.vgmDate }}</td>
          <td>{{ commonValues.carrier }}</td>
          <td>{{ commonValues.facility }}</td>
          <td>{{ commonValues.vgmResParty }}</td>
          <td>{{ commonValues.ladenEmpty }}</td>
          <td>{{ commonValues.sealType }}</td>
          <td>{{ commonValues.vgmOfficial }}</td>
        </tr>
      </tbody>
      <!-- </template> -->
    </v-simple-table>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CaptureMovementEventDetailItem",
  computed: {
    ...mapGetters(["commonValuesChoices", "commonValues"]),
  },
  data() {
    return {
      events: new Array(10),
      // customer: "",
      // eqpType: "",
      // authNo: "",
      // vgmMethod: "",
      // eventDate: "",
      // condition: "",
      // authType: "",
      // eventType: "",
      // vgmDate: "",
      // carrier: "",
      // facility: "",
      // vgmResParty: "",
      // ladenEmpty: "",
      // sealType: "",
      // vgmOfficial: "",
      // singleSelect: false,
      // selected: [],
      // headers: [
      //   { text: "Customer", value: "customer" },
      //   { text: "Equipment Type", value: "eqpType" },
      //   { text: "Authorization Number", value: "authNo" },
      //   { text: "VGM Method", value: "vgmMethod" },
      //   { text: "Event Date", value: "eventDate" },
      //   { text: "Equipment Condition", value: "condition" },
      //   { text: "Authorization Type", value: "authType" },
      //   { text: "Event Type", value: "eventType" },
      //   { text: "VGM Date", value: "vgmDate" },
      //   { text: "Carrier", value: "carrier" },
      //   { text: "VGM Responsible Party", value: "facility" },
      //   { text: "Facility", value: "vgmResParty" },
      //   { text: "Equipment Type", value: "ladenEmpty" },
      //   { text: "Seal Type", value: "sealType" },
      //   { text: "VGM Authorized Official", value: "vgmOfficial" },
      // ],
      // events: [
      //   {
      //     customer: "customer",
      //     eqpType: "TEST",
      //     authNo: "TEST",
      //     vgmMethod: "TEST",
      //     eventDate: "TEST",
      //     condition: "TEST",
      //     authType: "TEST",
      //     eventType: "TEST",
      //     vgmDate: "TEST",
      //     carrier: "TEST",
      //     facility: "TEST",
      //     vgmResParty: "TEST",
      //     ladenEmpty: "TEST",
      //     sealType: "TEST",
      //     vgmOfficial: "TEST",
      //   },
      // ],
    };
  },
};
</script>
