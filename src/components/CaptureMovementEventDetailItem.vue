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
        <tr
          v-for="({
            e_customer = commonValues.customer,
            e_eqpType = commonValues.eqpType,
            e_authNo = commonValues.authNo,
            e_vgmMethod = commonValues.vgmMethod,
            e_eventDate = commonValues.eventDate,
            e_condition = commonValues.condition,
            e_authType = commonValues.authType,
            e_eventType = commonValues.eventType,
            e_vgmDate = commonValues.vgmDate,
            e_carrier = commonValues.carrier,
            e_facility = commonValues.facility,
            e_vgmResParty = commonValues.vgmResParty,
            e_ladenEmpty = commonValues.ladenEmpty,
            e_sealType = commonValues.sealType,
            e_vgmOfficial = commonValues.vgmOfficial,
          },
          i) in events"
          :key="i"
        >
          <td><input type="text" :value="e_customer" /></td>
          <td><input type="text" :value="e_eqpType" /></td>
          <td><input type="text" :value="e_authNo" /></td>
          <td><input type="text" :value="e_vgmMethod" /></td>
          <td><input type="text" :value="e_eventDate" /></td>
          <td><input type="text" :value="e_condition" /></td>
          <td><input type="text" :value="e_authType" /></td>
          <td><input type="text" :value="e_eventType" /></td>
          <td><input type="text" :value="e_vgmDate" /></td>
          <td><input type="text" :value="e_carrier" /></td>
          <td><input type="text" :value="e_facility" /></td>
          <td><input type="text" :value="e_vgmResParty" /></td>
          <td><input type="text" :value="e_ladenEmpty" /></td>
          <td><input type="text" :value="e_sealType" /></td>
          <td><input type="text" :value="e_vgmOfficial" /></td>
        </tr>
      </tbody>
    </table>
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
      events: [
        {
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
      ],
    };
  },
};
</script>
