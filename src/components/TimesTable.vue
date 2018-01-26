<template>
  <div class="frame">
    <h2>九九乘法表</h2>
    <div id="ttRresult">
      <div v-for="i in 9" class="times">
        <div v-for="j in 9" class="single">
          <div >{{ i }} * {{ j }} = {{ i* j}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberTriangle",

  data() {
    return {
      msg: "Hello"
    };
  },
  methods: {
    enter() {
      var result = "";
      var print = "";
      for (var i = 1; i < 10; i++) {
        for (var j = 1; j < 10; j++) {
          result = i * j;
          console.log(i, j, result);
          print = i + " * " + j + " = " + result;
          console.log(print);
        }
      }
      document.getElementById("ttResult").innerHTML = print;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-TimesTable.scss";
</style>
