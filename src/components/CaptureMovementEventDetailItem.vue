<template>
  <div>
    <div>
      <v-btn
        @click="clickAddRows"
        :disabled="commonValues.length < 1"
        class="mr-2"
        small
        tile
        outlined
        color="teal lighten-1"
        >Add Common Values</v-btn
      >
      <v-btn
        @click="clickSubmit"
        :disabled="events.length < 1"
        class="mr-2"
        small
        tile
        color="primary"
        >Submit Events</v-btn
      >
      <v-text-field
        label="Paste events here..."
        id="contentPasted"
        @paste="clickContentPaste"
        type="text"
        v-model="contentPaste"
      ></v-text-field>
    </div>
    <br />

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Action</th>
            <th class="text-left">Customer</th>
            <th class="text-left">Equipment Type</th>
            <th class="text-left">Authorization Number</th>
            <th class="text-left">VGM Method</th>
            <th class="text-left">Event Date</th>
            <th class="text-left">Equipment Condition</th>
            <th class="text-left">Authorization Type</th>
            <th class="text-left">Event Type</th>
            <th class="text-left">VGM Date</th>
            <th class="text-left">Carrier</th>
            <th class="text-left">VGM Responsible Party</th>
            <th class="text-left">Facility</th>
            <th class="text-left">Equipment Type</th>
            <th class="text-left">Seal Type</th>
            <th class="text-left">VGM Authorized Official</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="event of events" :key="event.dumbKey">
            <td>
              <v-icon @click="clickDeleteItem(event.dumbKey)" color="error">mdi-delete</v-icon>
            </td>
            <td>
              <div v-if="editingId == event.dumbKey">
                <v-text-field
                  v-model="event.customer"
                  :id="`edit-${editingId}`"
                  @blur="save(editingId)"
                  @keydown.enter="save(editingId)"
                ></v-text-field>
              </div>
              <div v-else @click="setToEditing(event.dumbKey)">{{ event.customer }}</div>
            </td>
            <td>{{ event.eqpType }}</td>
            <td>{{ event.authNo }}</td>
            <td>{{ event.vgmMethod }}</td>
            <td>{{ event.eventDate }}</td>
            <td>{{ event.condition }}</td>
            <td>{{ event.authType }}</td>
            <td>{{ event.eventType }}</td>
            <td>{{ event.vgmDate }}</td>
            <td>{{ event.carrier }}</td>
            <td>{{ event.facility }}</td>
            <td>{{ event.vgmResParty }}</td>
            <td>{{ event.ladenEmpty }}</td>
            <td>{{ event.sealType }}</td>
            <td>{{ event.vgmOfficial }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-snackbar v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}
      <v-btn text @click="snack = false">Close</v-btn>
    </v-snackbar>

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
    CaptureMovementEventCommonValuesModal,
  },
  computed: {
    ...mapGetters(["commonValuesChoices", "commonValues", "events"]),
    isDisabled() {
      return this.selected.length === 0;
    },
  },
  methods: {
    ...mapActions([
      "addRows",
      "resetCommonValues",
      "resetRows",
      "removeRows",
      "editRows",
      "applyCommonValues",
      "resetCommonValuesModal",
      "removeItem",
      "removeItems",
    ]),
    clickAddRows() {
      this.addRows(5);
      this.resetCommonValues();
    },
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
      rows.forEach((row, idx) => {
        if (row) {
          let cell = row.split("\t");
          let event = {
            dumbKey:
              new Date().getFullYear() + new Date().getMilliseconds() + new Date().getTime() + idx,
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
            vgmOfficial: cell[14],
          };
          this.events.unshift(event);
        }
      });
      // cb.clearData("Text");
    },
    clickSubmit() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Events submitted";
      this.removeItems();
    },
    save(id) {
      console.log(id);
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Saved";
      this.editingId = "";
    },
    cancel() {
      this.snack = true;
      this.snackColor = "warning";
      this.snackText = "Canceled";
    },
    delete() {
      this.snack = true;
      this.snackColor = "error";
      this.snackText = "Event deleted";
    },
    clickDeleteItem(id) {
      console.log(id);
      let confirmed = confirm("Are you sure you want to delete this item?");
      if (confirmed) {
        this.removeItem(id);
        this.delete();
      }
    },
    setToEditing(id) {
      this.editingId = id;
      setTimeout(() => {
        document.getElementById(`edit-${id}`).focus();
      }, 10);
    },
  },
  data() {
    return {
      editingId: "",
      snack: false,
      snackColor: "",
      snackText: "",
      singleSelect: false,
      dialog: false,
      selected: [],
      contentPaste: [],
      headers: [
        { text: "Action", value: "action" },
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
