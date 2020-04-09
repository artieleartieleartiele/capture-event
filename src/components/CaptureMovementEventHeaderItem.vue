<template>
  <div>
    <v-form ref="formCommonValues">
      <v-row>
        <v-col cols="3">
          <v-text-field v-model="customer" maxlength="20" label="Customer"></v-text-field>
          <v-select
            v-model="eqpType"
            :items="eqpList"
            :menu-props="{ maxHeight: '400' }"
            label="Equipment Type"
            persistent-hint
          ></v-select>
          <v-text-field v-model="authNo" maxlength="20" label="Authorization Number"></v-text-field>
          <v-select
            v-model="vgmMethod"
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
              <v-text-field v-model="eventDate" label="Event Date" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker
              v-model="eventDate"
              @input="menu2Event = false"
              :allowed-dates="allowedDates"
            ></v-date-picker>
          </v-menu>
          <v-select
            v-model="condition"
            :items="conditionList"
            :menu-props="{ maxHeight: '400' }"
            label="Equipment Condition"
            persistent-hint
          ></v-select>
          <v-select
            v-model="authType"
            :items="authTypeList"
            :menu-props="{ maxHeight: '400' }"
            label="Authorization Type"
            persistent-hint
          ></v-select>
          <v-select
            v-model="eventType"
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
              <v-text-field v-model="vgmDate" label="VGM Date" readonly v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="vgmDate" @input="menu2Vgm = false"></v-date-picker>
          </v-menu>
          <v-text-field v-model="carrier" maxlength="20" label="Carrier"></v-text-field>
          <v-text-field v-model="vgmResParty" maxlength="20" label="VGM Responsible Party"></v-text-field>
          <v-select
            v-model="facility"
            :items="facilityList"
            :menu-props="{ maxHeight: '400' }"
            label="Facility"
            persistent-hint
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="ladenEmpty"
            :items="ladenEmptyList"
            :menu-props="{ maxHeight: '400' }"
            label="Equipment Type"
            persistent-hint
          ></v-select>
          <v-select
            v-model="sealType"
            :items="sealTypeList"
            :menu-props="{ maxHeight: '400' }"
            label="Seal Type"
            persistent-hint
          ></v-select>
          <v-text-field v-model="vgmOfficial" maxlength="20" label="VGM Authorized Official"></v-text-field>
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
        >Clear Common Values</v-btn>
      </v-row>
    </v-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu2Event: false,
      menu2Vgm: false,

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

      eqpList: ["RF", "GP", "GS", "CH"],
      ladenEmptyList: ["L", "E"],
      conditionList: ["Good", "MNR", "Damage"],
      vgmMethodList: ["Method1", "Method2"],
      authTypeList: ["Authorization1", "Authorization2"],
      eventTypeList: ["Creation", "Termination", "Movement"],
      sealTypeList: ["Seal1", "Seal2"],
      facilityList: [
        "HKG01 - COSCO - HIT Terminals",
        "MNL01 - COSCO - Pasay Terminals",
        "LGB09 - COSCO - Long Beach Terminals",
        "GUA90 - COSCO - Guam Terminals",
        "TKY06 - COSCO - Tokyo Terminals",
        "JPN07 - COSCO - Japan Terminals",
        "NYC18 - COSCO - New York 18 City Terminals",
        "NYC19 - COSCO - New York 19 City Terminals",
        "NYC20 - COSCO - New York 20 City Terminals",
        "NYC21 - COSCO - New York 21 City Terminals",
        "DEN13 - COSCO - Denmark 13 Terminals",
        "DEN14 - COSCO - Denmark 14 Terminals",
        "DEN15 - COSCO - Denmark 15 Terminals",
        "DEN16 - COSCO - Denmark 16 Terminals",
        "DEN17 - COSCO - Denmark 17 Terminals",
        "DEN18 - COSCO - Denmark 18 Terminals",
        "DEN19 - COSCO - Denmark 19 Terminals",
        "DEN20 - COSCO - Denmark 20 Terminals"
      ]
    };
  },
  methods: {
    allowedDates: val => parseInt(val.split("-")[2], 10) % 2 === 0,
    reset(e) {
      e.preventDefault();
      this.$refs.formCommonValues.reset();
    }
  }
};
</script>
