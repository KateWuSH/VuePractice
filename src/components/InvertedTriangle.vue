<template>
  <div class="frame">
    <h2>倒三角形</h2>
    <span class="subtitle">Inverted Triangle</span>
    <div class="input">
      <span>層數：</span><input type="number" placeholder="請輸入層數" v-model="level" min="0">
    </div>
      <div id="itResult"></div>
  </div>
</template>

<script>
export default {
  name: "NumberTriangle",
  data() {
    return {
      level: ""
    };
  },
  methods: {
    enter() {
      let vm = this;
      var levels = vm.level;
      var star = "";
      var br = "<br/>";
      for (var i = 1; i <= levels; i++) {
        for (var j = 0; j < 2 * levels - (2 * i - 1); j++) {
          star += "*";
        }
        star = star + br;
      }
      document.getElementById("itResult").innerHTML = star;
    }
  },
  updated() {
    this.enter();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-InvertedTriangle.scss";
</style>
