<template>
  <div class="frame">
    <h2>巴斯卡三角形</h2>
    <span class="subtitle">Pascal's Triangle</span>
    <div class="input">
      <span>層數：</span><input type="number" placeholder="請輸入層數" v-model="level" min="0">
    </div>
      <div id="ptResult"></div>
  </div>
</template>

<script>
export default {
  name: "PascalTriangle",
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
      for (var i = 0; i <= levels; i++) {
        for (var j = 0; j < 2 * i - 1; j++) {
          star += i;
        }
        star = star + br;
      }
      document.getElementById("ptResult").innerHTML = star;
    }
  },
  updated() {
    this.enter();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-PascalTriangle.scss";
</style>
