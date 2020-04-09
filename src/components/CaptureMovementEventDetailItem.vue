<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="inputtedEvents"
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
      inputtedEvents: [
        {
          customer: "TEST",
          eqpType: "TEST",
          authNo: "TEST",
          vgmMethod: "TEST",
          eventDate: "TEST",
          condition: "TEST",
          authType: "TEST",
          eventType: "TEST",
          vgmDate: "TEST",
          carrier: "TEST",
          facility: "TEST",
          vgmResParty: "TEST",
          ladenEmpty: "TEST",
          sealType: "TEST",
          vgmOfficial: "TEST",
        },
        {
          customer: "TEST2",
          eqpType: "TEST2",
          authNo: "TEST2",
          vgmMethod: "TEST2",
          eventDate: "TEST2",
          condition: "TEST2",
          authType: "TEST2",
          eventType: "TEST2",
          vgmDate: "TEST2",
          carrier: "TEST2",
          facility: "TEST2",
          vgmResParty: "TEST2",
          ladenEmpty: "TEST2",
          sealType: "TEST2",
          vgmOfficial: "TEST2",
        },
        {
          customer: "TEST3",
          eqpType: "TEST3",
          authNo: "TEST3",
          vgmMethod: "TEST3",
          eventDate: "TEST3",
          condition: "TEST3",
          authType: "TEST3",
          eventType: "TEST3",
          vgmDate: "TEST3",
          carrier: "TEST3",
          facility: "TEST3",
          vgmResParty: "TEST3",
          ladenEmpty: "TEST3",
          sealType: "TEST3",
          vgmOfficial: "TEST3",
        },
      ],
    };
  },
};
</script>
