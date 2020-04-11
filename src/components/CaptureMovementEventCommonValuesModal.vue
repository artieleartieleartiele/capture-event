<template>
  <div>
    <div
      v-for="{
        eqpList,
        ladenEmptyList,
        conditionList,
        vgmMethodList,
        authTypeList,
        eventTypeList,
        sealTypeList,
        facilityList,
      } in commonValuesChoices"
      :key="facilityList.length"
    >
      <v-row>
        <v-col cols="3">
          <v-text-field
            v-model="commonValues.customer"
            maxlength="20"
            label="Customer"
            @change="clickApplyCommonValuesModal()"
          ></v-text-field>
          <v-select
            v-model="commonValues.eqpType"
            :items="eqpList"
            :menu-props="{ maxHeight: '400' }"
            label="Equipment Type"
            @change="clickApplyCommonValuesModal()"
            persistent-hint
          ></v-select>
          <v-text-field
            v-model="commonValues.authNo"
            maxlength="20"
            label="Authorization Number"
            @change="clickApplyCommonValuesModal()"
          ></v-text-field>
          <v-select
            v-model="commonValues.vgmMethod"
            :items="vgmMethodList"
            :menu-props="{ maxHeight: '400' }"
            label="VGM Method"
            @change="clickApplyCommonValuesModal()"
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
                @change="clickApplyCommonValuesModal()"
                readonly
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="commonValues.eventDate"
              @input="menu2Event = false"
            ></v-date-picker>
          </v-menu>
          <v-select
            v-model="commonValues.condition"
            :items="conditionList"
            :menu-props="{ maxHeight: '400' }"
            label="Equipment Condition"
            @change="clickApplyCommonValuesModal()"
            persistent-hint
          ></v-select>
          <v-select
            v-model="commonValues.authType"
            :items="authTypeList"
            :menu-props="{ maxHeight: '400' }"
            label="Authorization Type"
            @change="clickApplyCommonValuesModal()"
            persistent-hint
          ></v-select>
          <v-select
            v-model="commonValues.eventType"
            :items="eventTypeList"
            :menu-props="{ maxHeight: '400' }"
            label="Event Type"
            @change="clickApplyCommonValuesModal()"
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
                @change="clickApplyCommonValuesModal()"
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
            @change="clickApplyCommonValuesModal()"
          ></v-text-field>
          <v-text-field
            v-model="commonValues.vgmResParty"
            maxlength="20"
            label="VGM Responsible Party"
            @change="clickApplyCommonValuesModal()"
          ></v-text-field>
          <v-select
            v-model="commonValues.facility"
            :items="facilityList"
            :menu-props="{ maxHeight: '400' }"
            label="Facility"
            @change="clickApplyCommonValuesModal()"
            persistent-hint
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="commonValues.ladenEmpty"
            :items="ladenEmptyList"
            :menu-props="{ maxHeight: '400' }"
            label="Equipment Type"
            @change="clickApplyCommonValuesModal()"
            persistent-hint
          ></v-select>
          <v-select
            v-model="commonValues.sealType"
            :items="sealTypeList"
            :menu-props="{ maxHeight: '400' }"
            label="Seal Type"
            @change="clickApplyCommonValuesModal()"
            persistent-hint
          ></v-select>
          <v-text-field
            v-model="commonValues.vgmOfficial"
            maxlength="20"
            label="VGM Authorized Official"
            @change="clickApplyCommonValuesModal()"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-btn
          class="ma-2"
          small
          tile
          outlined
          color="blue-grey darken-1"
          @click="reset"
          >Clear Common Values
        </v-btn>
      </v-row>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CaptureMovementEventCommonValuesModal",
  created() {
    this.fetchCommonValuesList();
  },
  computed: {
    ...mapGetters(["commonValuesChoices", "commonValuesModal"]),
  },
  methods: {
    ...mapActions(["fetchCommonValuesList", "applyCommonValuesModal"]),
    reset() {
      for (let o in this.commonValues) this.commonValues[o] = "";
    },
    clickApplyCommonValuesModal() {
      this.applyCommonValuesModal(this.commonValues);
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
