<template>
  <div>
    <table>
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
        <tr v-for="(event, i) in inputtedEvents" :key="i">
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

    <button @click="logger">Submit</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CaptureMovementEventDetailItem",
  computed: {
    ...mapGetters(["commonValuesChoices", "commonValues", "inputtedEvents"]),
  },
  data() {
    return {};
  },
  methods: {
    logger() {
      console.log(this.inputtedEvents);
    },
  },
};
</script>
