<template>
  <div>
    <div>
      <v-btn
        @click="clickAddRows"
        :disabled="(commonValues.length < 1)"
        class="mr-2"
        small
        tile
        outlined
        color="teal lighten-1"
      >Add Common Values</v-btn>
      <v-btn
        @click="clickSubmit"
        :disabled="(events.length < 1)"
        class="mr-2"
        small
        tile
        color="primary"
      >Submit Events</v-btn>
      <v-text-field
        label="Paste events here..."
        id="contentPasted"
        @paste="clickContentPaste"
        type="text"
        v-model="contentPaste"
      ></v-text-field>
    </div>
    <br />

    <v-data-table :headers="headers" :items="inputtedEvents">
      <!-- <template v-slot:item.dumbKey="props">{{props.item.dumbKey}}</template> -->

      <template v-slot:item.action="{ item }">
        <!-- <v-icon small @click="deleteItem(item)">mdi-delete</v-icon> -->
        <v-icon small @click="clickDeleteItem(item.dumbKey)" color="error">mdi-delete</v-icon>
      </template>
      <template v-slot:item.customer="props">
        <v-edit-dialog :return-value.sync="props.item.customer" @save="save" @cancel="cancel">
          {{ props.item.customer }}
          <template v-slot:input>
            <v-text-field v-model="props.item.customer" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.eqpType="props">
        <v-edit-dialog :return-value.sync="props.item.eqpType" @save="save" @cancel="cancel">
          {{ props.item.eqpType }}
          <template v-slot:input>
            <v-text-field v-model="props.item.eqpType" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.authNo="props">
        <v-edit-dialog :return-value.sync="props.item.authNo" @save="save" @cancel="cancel">
          {{ props.item.authNo }}
          <template v-slot:input>
            <v-text-field v-model="props.item.authNo" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.vgmMethod="props">
        <v-edit-dialog :return-value.sync="props.item.vgmMethod" @save="save" @cancel="cancel">
          {{ props.item.vgmMethod }}
          <template v-slot:input>
            <v-text-field v-model="props.item.vgmMethod" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>

      <template v-slot:item.eventDate="props">
        <v-edit-dialog :return-value.sync="props.item.eventDate" @save="save" @cancel="cancel">
          {{ props.item.eventDate }}
          <template v-slot:input>
            <v-text-field v-model="props.item.eventDate" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.condition="props">
        <v-edit-dialog :return-value.sync="props.item.condition" @save="save" @cancel="cancel">
          {{ props.item.condition }}
          <template v-slot:input>
            <v-text-field v-model="props.item.condition" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.authType="props">
        <v-edit-dialog :return-value.sync="props.item.authType" @save="save" @cancel="cancel">
          {{ props.item.authType }}
          <template v-slot:input>
            <v-text-field v-model="props.item.authType" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.eventType="props">
        <v-edit-dialog :return-value.sync="props.item.eventType" @save="save" @cancel="cancel">
          {{ props.item.eventType }}
          <template v-slot:input>
            <v-text-field v-model="props.item.eventType" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.vgmDate="props">
        <v-edit-dialog :return-value.sync="props.item.vgmDate" @save="save" @cancel="cancel">
          {{ props.item.vgmDate }}
          <template v-slot:input>
            <v-text-field v-model="props.item.vgmDate" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.carrier="props">
        <v-edit-dialog :return-value.sync="props.item.carrier" @save="save" @cancel="cancel">
          {{ props.item.carrier }}
          <template v-slot:input>
            <v-text-field v-model="props.item.carrier" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.facility="props">
        <v-edit-dialog :return-value.sync="props.item.facility" @save="save" @cancel="cancel">
          {{ props.item.facility }}
          <template v-slot:input>
            <v-text-field v-model="props.item.facility" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.vgmResParty="props">
        <v-edit-dialog :return-value.sync="props.item.vgmResParty" @save="save" @cancel="cancel">
          {{ props.item.vgmResParty }}
          <template v-slot:input>
            <v-text-field
              v-model="props.item.vgmResParty"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.ladenEmpty="props">
        <v-edit-dialog :return-value.sync="props.item.ladenEmpty" @save="save" @cancel="cancel">
          {{ props.item.ladenEmpty }}
          <template v-slot:input>
            <v-text-field
              v-model="props.item.ladenEmpty"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.sealType="props">
        <v-edit-dialog :return-value.sync="props.item.sealType" @save="save" @cancel="cancel">
          {{ props.item.sealType }}
          <template v-slot:input>
            <v-text-field v-model="props.item.sealType" label="Edit" single-line counter autofocus></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
      <template v-slot:item.vgmOfficial="props">
        <v-edit-dialog :return-value.sync="props.item.vgmOfficial" @save="save" @cancel="cancel">
          {{ props.item.vgmOfficial }}
          <template v-slot:input>
            <v-text-field
              v-model="props.item.vgmOfficial"
              label="Edit"
              single-line
              counter
              autofocus
            ></v-text-field>
          </template>
        </v-edit-dialog>
      </template>
    </v-data-table>

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
    ...mapGetters([
      "commonValuesChoices",
      "commonValues",
      "inputtedEvents",
      "events"
    ]),
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
      "removeItem"
    ]),
    clickAddRows() {
      this.addRows(5);
      // this.resetCommonValues();
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
          this.events.unshift(event);
        }
      });
      // cb.clearData("Text");
    },
    clickSubmit() {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "Events submitted";
    },
    save() {
      this.snack = true;
      this.snackColor = "info";
      this.snackText = "Saved";
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
    }
  },
  data() {
    return {
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
        { text: "VGM Authorized Official", value: "vgmOfficial" }
      ]
    };
  }
};
</script>
