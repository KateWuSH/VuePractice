<template>
  <div class="frame">
    <h2>樂透開獎</h2>
    <button type="button" @click="random()">START</button>
    <div id="lRresult">
      <ul >
        <li></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "NumberTriangle",

  data() {
    return {
      msg: "Hello",
      data: [""]
    };
  },
  methods: {
    random() {
      var num = "";
      for (var i = 0; i < 6; i++) {
        var num = Math.floor(Math.random(i) * 42 + 1);
        console.log(num);
      }
      document.getElementById("lRresult").innerHTML = num;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-Lottery.scss";
</style>
