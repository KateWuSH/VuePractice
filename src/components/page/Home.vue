<template lang="pug">
  .page-main
    h2 {{ msg }}
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/cp-Home.scss";
</style>
