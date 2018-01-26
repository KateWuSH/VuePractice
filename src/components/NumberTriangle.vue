<template>
  <div class="frame">
    <h2>數字金字塔</h2>
    <span class="subtitle">Number Triangle</span>
    <div class="input">
      <span>層數：</span><input type="number" placeholder="請輸入層數" v-model="level" min="0">
    </div>
      <div id="result"></div>
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
      var num = "";
      var br = "<br/>";
      for (var i = 0; i <= levels; i++) {
        for (var j = 0; j < 2 * i - 1; j++) {
          num += i;
        }
        num = num + br;
      }
      document.getElementById("result").innerHTML = num;
    }
  },
  updated() {
    this.enter();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-NumberTriangle.scss";
</style>
