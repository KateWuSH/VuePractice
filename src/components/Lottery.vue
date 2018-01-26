<template>
  <div class="frame">
    <h2>樂透開獎</h2>
    <button type="button" @click="random()">START</button>
    <div>
      <ul id="lRresult">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
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
      msg: "Hello"
    };
  },
  methods: {
    random() {
      var num = "";
      for (var i = 0; i < 6; i++) {
        //var num = Math.floor(Math.random() * 42 + 1);
        //console.log(num);
        var li = document.getElementsByTagName("li")[i];
        // console.log(i);
        // console.log(li);
        li.innerHTML = 5;
        // var li = document.getElementById("lRresult").childNodes;
        // console.log(li);
        // li[i].innerHTML = num;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-Lottery.scss";
</style>
