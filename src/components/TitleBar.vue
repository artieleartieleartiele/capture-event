<template>
  <div class="title">{{ title }}</div>
</template>
<script>
export default {
  name: "TitleBar",
  data() {
    return {
      title: "Smart Vendor Platform"
    };
  }
};
</script>
<style scoped>
.title {
  padding: 10px;
}
</style>
