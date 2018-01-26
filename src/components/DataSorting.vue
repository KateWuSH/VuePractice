<template>
  <div class="frame">
    <h2>資料排序</h2>
    <span class="subtitle">Data Sorting</span>
    <div class="input">
      <span>數字：</span><input type="text" placeholder="請以空白鍵隔開" v-model="massage">
      <button type="button" @click="sort()">排序</button>
    </div>
    <div id="dsResult"></div>
  </div>
</template>

<script>
export default {
  name: "PascalTriangle",
  data() {
    return {
      massage: ""
    };
  },
  methods: {
    sort() {
      let vm = this;
      var content = vm.massage;
      var stringToArray = content.split(" ");
      var sort = stringToArray.sort(function(a, b) {
        return a - b;
      });
      document.getElementById("dsResult").innerHTML = sort;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-PascalTriangle.scss";
</style>
