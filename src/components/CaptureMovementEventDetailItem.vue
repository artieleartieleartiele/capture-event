<template>
  <div>
    <div>
      <v-col cols="6" style="display: inline-block !important;">
        <v-btn
          @click="clickAddRows"
          :disabled="commonValues.length < 1"
          class="mr-2"
          small
          tile
          outlined
          color="teal lighten-1"
        >Add Event</v-btn>
        <v-btn
          @click="clickRemove"
          :disabled="selected.length < 1"
          class="mr-2"
          small
          tile
          outlined
          color="warning"
        >Delete Event</v-btn>
        <v-btn
          @click="clickClearAll"
          :disabled="events.length < 1"
          class="mr-2"
          small
          tile
          outlined
          color="teal lighten-1"
        >Clear All</v-btn>
        <v-btn
          @click="clickSubmit"
          :disabled="events.length < 1"
          class="mr-2"
          small
          tile
          color="primary"
        >Submit</v-btn>
      </v-col>
      <v-col cols="3" style="display: inline-block !important;">
        <v-select
          :items="headersSelection"
          item-text="text"
          v-model="columnSelected"
          multiple
          label="Select columns..."
          @change="filterColumns"
        >
          <template v-slot:selection="{ item, index }">
            <v-chip v-if="index === 0">
              <span>{{ item.text }}</span>
            </v-chip>
            <span
              v-if="index === 1"
              class="grey--text caption"
            >(+{{ columnSelected.length - 1 }} others)</span>
          </template>
        </v-select>
      </v-col>
      <v-col cols="3" style="display: inline-block !important;">
        <v-text-field
          label="Paste events here..."
          id="contentPasted"
          @paste="clickContentPaste"
          type="text"
          v-model="contentPaste"
        ></v-text-field>
      </v-col>
    </div>
    <v-simple-table dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">{{headers[0].text }}</th>
            <th v-show="headers[1].display" class="text-left">{{headers[1].text }}</th>
            <th v-show="headers[2].display" class="text-left">{{headers[2].text }}</th>
            <th v-show="headers[3].display" class="text-left">{{headers[3].text }}</th>
            <th v-show="headers[4].display" class="text-left">{{headers[4].text }}</th>
            <th v-show="headers[5].display" class="text-left">{{headers[5].text }}</th>
            <th v-show="headers[6].display" class="text-left">{{headers[6].text }}</th>
            <th v-show="headers[7].display" class="text-left">{{headers[7].text }}</th>
            <th v-show="headers[8].display" class="text-left">{{headers[8].text }}</th>
            <th v-show="headers[9].display" class="text-left">{{headers[9].text }}</th>
            <th v-show="headers[10].display" class="text-left">{{headers[10].text }}</th>
            <th v-show="headers[11].display" class="text-left">{{headers[11].text }}</th>
            <th v-show="headers[12].display" class="text-left">{{headers[12].text }}</th>
            <th v-show="headers[13].display" class="text-left">{{headers[13].text }}</th>
            <th v-show="headers[14].display" class="text-left">{{headers[14].text }}</th>
            <th v-show="headers[15].display" class="text-left">{{headers[15].text }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(event) of events" :key="event.dumbKey">
            <td>
              <v-checkbox v-model="selected" :value="`${event.dumbKey}`"></v-checkbox>
            </td>

            <td @click="setToEditing(`customer-${event.dumbKey}`)" v-show="headers[1].display">
              <div v-if="editingId == `customer-${event.dumbKey}`">
                <v-text-field
                  v-model="event.customer"
                  :id="`customer-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `eqpType-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.customer }}</div>
            </td>

            <td @click="setToEditing(`eqpType-${event.dumbKey}`)" v-show="headers[2].display">
              <div v-if="editingId == `eqpType-${event.dumbKey}`">
                <v-text-field
                  v-model="event.eqpType"
                  :id="`eqpType-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `authNo-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.eqpType }}</div>
            </td>

            <td @click="setToEditing(`authNo-${event.dumbKey}`)" v-show="headers[3].display">
              <div v-if="editingId == `authNo-${event.dumbKey}`">
                <v-text-field
                  v-model="event.authNo"
                  :id="`authNo-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `vgmMethod-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.authNo }}</div>
            </td>

            <td @click="setToEditing(`vgmMethod-${event.dumbKey}`)" v-show="headers[4].display">
              <div v-if="editingId == `vgmMethod-${event.dumbKey}`">
                <v-text-field
                  v-model="event.vgmMethod"
                  :id="`vgmMethod-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `eventDate-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.vgmMethod }}</div>
            </td>

            <td @click="setToEditing(`eventDate-${event.dumbKey}`)" v-show="headers[5].display">
              <div v-if="editingId == `eventDate-${event.dumbKey}`">
                <v-text-field
                  v-model="event.eventDate"
                  :id="`eventDate-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `condition-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.eventDate }}</div>
            </td>

            <td @click="setToEditing(`condition-${event.dumbKey}`)" v-show="headers[6].display">
              <div v-if="editingId == `condition-${event.dumbKey}`">
                <v-text-field
                  v-model="event.condition"
                  :id="`condition-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `authType-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.condition }}</div>
            </td>

            <td @click="setToEditing(`authType-${event.dumbKey}`)" v-show="headers[7].display">
              <div v-if="editingId == `authType-${event.dumbKey}`">
                <v-text-field
                  v-model="event.authType"
                  :id="`authType-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `eventType-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.authType }}</div>
            </td>

            <td @click="setToEditing(`eventType-${event.dumbKey}`)" v-show="headers[8].display">
              <div v-if="editingId == `eventType-${event.dumbKey}`">
                <v-text-field
                  v-model="event.eventType"
                  :id="`eventType-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `vgmDate-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.eventType }}</div>
            </td>

            <td @click="setToEditing(`vgmDate-${event.dumbKey}`)" v-show="headers[9].display">
              <div v-if="editingId == `vgmDate-${event.dumbKey}`">
                <v-text-field
                  v-model="event.vgmDate"
                  :id="`vgmDate-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `carrier-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.vgmDate }}</div>
            </td>

            <td @click="setToEditing(`carrier-${event.dumbKey}`)" v-show="headers[10].display">
              <div v-if="editingId == `carrier-${event.dumbKey}`">
                <v-text-field
                  v-model="event.carrier"
                  :id="`carrier-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `facility-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.carrier }}</div>
            </td>

            <td @click="setToEditing(`facility-${event.dumbKey}`)" v-show="headers[11].display">
              <div v-if="editingId == `facility-${event.dumbKey}`">
                <v-text-field
                  v-model="event.facility"
                  :id="`facility-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `vgmResParty-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.facility }}</div>
            </td>

            <td @click="setToEditing(`vgmResParty-${event.dumbKey}`)" v-show="headers[12].display">
              <div v-if="editingId == `vgmResParty-${event.dumbKey}`">
                <v-text-field
                  v-model="event.vgmResParty"
                  :id="`vgmResParty-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `ladenEmpty-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.vgmResParty }}</div>
            </td>

            <td @click="setToEditing(`ladenEmpty-${event.dumbKey}`)" v-show="headers[13].display">
              <div v-if="editingId == `ladenEmpty-${event.dumbKey}`">
                <v-text-field
                  v-model="event.ladenEmpty"
                  :id="`ladenEmpty-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `sealType-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.ladenEmpty }}</div>
            </td>

            <td @click="setToEditing(`sealType-${event.dumbKey}`)" v-show="headers[14].display">
              <div v-if="editingId == `sealType-${event.dumbKey}`">
                <v-text-field
                  v-model="event.sealType"
                  :id="`sealType-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, `vgmOfficial-${event.dumbKey}`)"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.sealType }}</div>
            </td>

            <td @click="setToEditing(`vgmOfficial-${event.dumbKey}`)" v-show="headers[15].display">
              <div v-if="editingId == `vgmOfficial-${event.dumbKey}`">
                <v-text-field
                  v-model="event.vgmOfficial"
                  :id="`vgmOfficial-${event.dumbKey}`"
                  v-on:keyup.enter="save($event, '')"
                  :autofocus="true"
                ></v-text-field>
              </div>
              <div v-else>{{ event.vgmOfficial }}</div>
            </td>
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
    CaptureMovementEventCommonValuesModal
  },
  computed: {
    ...mapGetters(["commonValuesChoices", "commonValues", "events"]),
    isDisabled() {
      return this.selected.length === 0;
    }
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
      "removeItems"
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
      let confirmed = confirm("Are you sure you want to delete this item?");
      if (confirmed) {
        this.removeRows(this.selected);
        this.selected = [];
        this.delete();
      }
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
              new Date().getFullYear() +
              new Date().getMilliseconds() +
              new Date().getTime() +
              idx,
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
          this.events.unshift(event);
        }
      });
      // cb.clearData("Text");
    },
    clickClearAll() {
      let confirmed = confirm("Are you sure you want to delete this item?");
      if (confirmed) {
        this.snack = true;
        this.snackColor = "success";
        this.snackText = "Events cleared";
        this.removeItems();
      }
    },
    clickSubmit() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Events submitted";
      this.removeItems();
    },
    save(e, id) {
      this.nextPlease(id);
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
      let confirmed = confirm("Are you sure you want to delete this item?");
      if (confirmed) {
        this.removeItem(id);
        this.delete();
      }
    },
    setToEditing(id) {
      this.editingId = id;
    },
    nextPlease(id) {
      this.$nextTick(() => {
        this.setToEditing(id);
      });
    },
    filterColumns() {
      if (this.columnSelected.length < 1) return;
      this.headers.map(h => {
        if (this.columnSelected.includes(h.value)) {
          h.display = true;
        } else {
          h.display = false;
        }
      });
    }
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
        { display: true, text: "Action", value: "action" },
        { display: true, text: "Customer", value: "customer" },
        { display: true, text: "Equipment Type", value: "eqpType" },
        { display: true, text: "Authorization Number", value: "authNo" },
        { display: true, text: "VGM Method", value: "vgmMethod" },
        { display: true, text: "Event Date", value: "eventDate" },
        { display: true, text: "Equipment Condition", value: "condition" },
        { display: true, text: "Authorization Type", value: "authType" },
        { display: true, text: "Event Type", value: "eventType" },
        { display: true, text: "VGM Date", value: "vgmDate" },
        { display: true, text: "Carrier", value: "carrier" },
        { display: true, text: "VGM Responsible Party", value: "facility" },
        { display: true, text: "Facility", value: "vgmResParty" },
        { display: true, text: "Equipment Type", value: "ladenEmpty" },
        { display: true, text: "Seal Type", value: "sealType" },
        { display: true, text: "VGM Authorized Official", value: "vgmOfficial" }
      ],
      headersSelection: [
        { display: true, text: "Customer", value: "customer" },
        { display: true, text: "Equipment Type", value: "eqpType" },
        { display: true, text: "Authorization Number", value: "authNo" },
        { display: true, text: "VGM Method", value: "vgmMethod" },
        { display: true, text: "Event Date", value: "eventDate" },
        { display: true, text: "Equipment Condition", value: "condition" },
        { display: true, text: "Authorization Type", value: "authType" },
        { display: true, text: "Event Type", value: "eventType" },
        { display: true, text: "VGM Date", value: "vgmDate" },
        { display: true, text: "Carrier", value: "carrier" },
        { display: true, text: "VGM Responsible Party", value: "facility" },
        { display: true, text: "Facility", value: "vgmResParty" },
        { display: true, text: "Equipment Type", value: "ladenEmpty" },
        { display: true, text: "Seal Type", value: "sealType" },
        { display: true, text: "VGM Authorized Official", value: "vgmOfficial" }
      ],
      columnSelected: [
        "action",
        "customer",
        "eqpType",
        "authNo",
        "vgmMethod",
        "eventDate",
        "condition",
        "authType",
        "eventType",
        "vgmDate",
        "carrier",
        "facility",
        "vgmResParty",
        "ladenEmpty",
        "sealType",
        "vgmOfficial"
      ]
    };
  }
};
</script>
