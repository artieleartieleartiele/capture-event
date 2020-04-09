<template>
  <div>
    <v-form
      v-for="{
        eqpList,
        ladenEmptyList,
        conditionList,
        vgmMethodList,
        authTypeList,
        eventTypeList,
        sealTypeList,
        facilityList,
      } in commonValuesList"
      :key="facilityList.length"
    >
      <v-row>
        <v-col cols="3">
          <v-text-field
            v-model="commonValues.customer"
            maxlength="20"
            label="Customer"
          ></v-text-field>
          <v-select
            v-model="commonValues.eqpType"
            :items="eqpList"
            :menu-props="{ maxHeight: '400' }"
            label="Equipment Type"
            persistent-hint
          ></v-select>
          <v-text-field
            v-model="commonValues.authNo"
            maxlength="20"
            label="Authorization Number"
          ></v-text-field>
          <v-select
            v-model="commonValues.vgmMethod"
            :items="vgmMethodList"
            :menu-props="{ maxHeight: '400' }"
            label="VGM Method"
            persistent-hint
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-menu
            v-model="menu2Event"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="200px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="commonValues.eventDate"
                label="Event Date"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="commonValues.eventDate"
              @input="menu2Event = false"
              :allowed-dates="allowedDates"
            ></v-date-picker>
          </v-menu>
          <v-select
            v-model="commonValues.condition"
            :items="conditionList"
            :menu-props="{ maxHeight: '400' }"
            label="Equipment Condition"
            persistent-hint
          ></v-select>
          <v-select
            v-model="commonValues.authType"
            :items="authTypeList"
            :menu-props="{ maxHeight: '400' }"
            label="Authorization Type"
            persistent-hint
          ></v-select>
          <v-select
            v-model="commonValues.eventType"
            :items="eventTypeList"
            :menu-props="{ maxHeight: '400' }"
            label="Event Type"
            persistent-hint
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-menu
            v-model="menu2Vgm"
            :close-on-content-click="false"
            :nudge-right="40"
            transition="scale-transition"
            offset-y
            min-width="200px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="commonValues.vgmDate"
                label="VGM Date"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="commonValues.vgmDate"
              @input="menu2Vgm = false"
            ></v-date-picker>
          </v-menu>
          <v-text-field
            v-model="commonValues.carrier"
            maxlength="20"
            label="Carrier"
          ></v-text-field>
          <v-text-field
            v-model="commonValues.vgmResParty"
            maxlength="20"
            label="VGM Responsible Party"
          ></v-text-field>
          <v-select
            v-model="commonValues.facility"
            :items="facilityList"
            :menu-props="{ maxHeight: '400' }"
            label="Facility"
            persistent-hint
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="commonValues.ladenEmpty"
            :items="ladenEmptyList"
            :menu-props="{ maxHeight: '400' }"
            label="Equipment Type"
            persistent-hint
          ></v-select>
          <v-select
            v-model="commonValues.sealType"
            :items="sealTypeList"
            :menu-props="{ maxHeight: '400' }"
            label="Seal Type"
            persistent-hint
          ></v-select>
          <v-text-field
            v-model="commonValues.vgmOfficial"
            maxlength="20"
            label="VGM Authorized Official"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-btn
          class="ma-2"
          :elevation="7"
          tile
          outlined
          color="blue-grey darken-1"
          @click="reset"
          >Clear Common Values</v-btn
        >
      </v-row>
    </v-form>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CaptureMovementEventHeaderItem",
  created() {
    this.fetchCommonValuesList();
  },
  computed: {
    ...mapGetters(["commonValuesList", "labelsList"]),
  },
  methods: {
    ...mapActions(["fetchCommonValuesList"]),
    allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0,
    reset(e) {
      e.preventDefault();
      for (let o in this.commonValues) this.commonValues[o] = "";
    },
  },
  data() {
    return {
      menu2Event: false,
      menu2Vgm: false,
      commonValues: {
        customer: "",
        eqpType: "",
        authNo: "",
        vgmMethod: "",
        eventDate: "",
        condition: "",
        authType: "",
        eventType: "",
        vgmDate: "",
        carrier: "",
        facility: "",
        vgmResParty: "",
        ladenEmpty: "",
        sealType: "",
        vgmOfficial: "",
      },
    };
  },
};
</script>
