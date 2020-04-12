<template>
  <div>
    <CaptureMovementEventDetailItem />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import CaptureMovementEventDetailItem from "./CaptureMovementEventDetailItem";

export default {
  name: "CaptureMovementEventDetail",
  components: {
    CaptureMovementEventDetailItem,
  },
  methods: {
    ...mapActions(["addRows", "resetRows"]),
  },
  data() {
    return {};
  },
};
</script>
