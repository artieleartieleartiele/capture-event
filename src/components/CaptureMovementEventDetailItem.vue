<template>
  <div>
    <div>
      <v-btn
        @click="addRows(2)"
        :disabled="(commonValues.length < 1)"
        class="mr-2"
        small
        tile
        outlined
        color="info"
      >Add Rows</v-btn>
      <v-btn
        @click="clickEditRows"
        :disabled="isDisabled"
        class="mr-2"
        small
        tile
        outlined
        color="success"
      >Edit Rows</v-btn>
      <v-btn
        @click="clickRemove"
        :disabled="isDisabled"
        class="mr-2"
        small
        tile
        outlined
        color="warning"
      >Remove Rows</v-btn>
      <v-btn
        @click="clickResetRows"
        :disabled="isDisabled"
        class="mr-2"
        small
        tile
        outlined
        color="error"
      >Reset Rows</v-btn>
      <v-text-field
        label="Paste events here..."
        id="contentPasted"
        @paste="clickContentPaste"
        type="text"
        v-model="contentPaste"
      ></v-text-field>
    </div>
    <br />
    <span>{{ selected }}</span>
    <v-data-table
      id="inputtedEvents"
      v-model="selected"
      :headers="headers"
      :items="inputtedEvents"
      :single-select="singleSelect"
      show-select
      item-key="dumbKey"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-switch v-model="singleSelect" label="Single select" class="pa-3"></v-switch>
      </template>
    </v-data-table>
    <v-btn @click="logger" small tile color="primary" class="mt-5">Submit</v-btn>

    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="1161px">
        <v-card>
          <v-card-text>
            <v-container>
              <CaptureMovementEventCommonValuesModal />
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="clickEditCancel">Cancel</v-btn>
            <v-btn color="blue darken-1" text @click="clickEditSave">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CaptureMovementEventCommonValuesModal from "./CaptureMovementEventCommonValuesModal";

export default {
  name: "CaptureMovementEventDetailItem",
  components: {
    CaptureMovementEventCommonValuesModal
  },
  computed: {
    ...mapGetters(["commonValuesChoices", "commonValues", "inputtedEvents"]),
    isDisabled() {
      return this.selected.length === 0;
    }
  },
  methods: {
    ...mapActions([
      "addRows",
      "resetRows",
      "removeRows",
      "editRows",
      "applyCommonValues",
      "resetCommonValuesModal"
    ]),
    clickEditCancel() {
      this.dialog = false;
      this.resetCommonValuesModal();
    },
    clickEditSave() {
      this.editRows(this.selected);
      this.selected = [];
      this.dialog = false;
      this.resetCommonValuesModal();
    },
    logger() {},
    clickResetRows() {
      if (this.selected.length === 0) return;
      this.resetRows(this.selected);
      this.selected = [];
    },
    clickRemove() {
      if (this.selected.length === 0) return;
      this.removeRows(this.selected);
      this.selected = [];
    },
    clickEditRows() {
      if (this.selected.length === 0) return;
      this.dialog = true;
    },
    clickContentPaste(e) {
      let cb = e.clipboardData;
      let clipText = cb.getData("text/plain");
      let rows = clipText.split("\n");
      rows.forEach(row => {
        if (row) {
          let cell = row.split("\t");
          let event = {
            customer: cell[0],
            eqpType: cell[1],
            authNo: cell[2],
            vgmMethod: cell[3],
            eventDate: cell[4],
            condition: cell[5],
            authType: cell[6],
            eventType: cell[7],
            vgmDate: cell[8],
            carrier: cell[9],
            facility: cell[10],
            vgmResParty: cell[11],
            ladenEmpty: cell[12],
            sealType: cell[13],
            vgmOfficial: cell[14]
          };
          this.inputtedEvents.unshift(event);
        }
      });
      // cb.clearData("Text");
    }
  },
  data() {
    return {
      singleSelect: false,
      dialog: false,
      selected: [],
      contentPaste: [],
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
        { text: "VGM Authorized Official", value: "vgmOfficial" }
      ]
    };
  }
};
</script>
