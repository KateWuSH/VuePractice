<template>
  <div class="page-main">
    <h2>{{ msg }}</h2>
    <p><el-button
      type="primary"
      :loading="loadStatus"
      v-on:click="loadToggle">ElementUI Button</el-button></p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg: "About Vue.js App",
      loadStatus: false
    };
  },
  methods: {
    loadToggle: function() {
      this.loadStatus = !this.loadStatus;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/cp-About.scss";
</style>
