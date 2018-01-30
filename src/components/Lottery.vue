<template>
  <div class="frame">
    <h2>樂透開獎</h2>
    <button type="button" @click="getRandomArray(1, 42, 6)" class="start">START</button>
    <div>
      <ul id="lRresult">
        <li v-for="(list, index) in rdmArray" v-if="index < 6">{{ list }}</li>
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
      rdmArray: [],
      arr: ["aaa", "bbb", "ccc"]
    };
  },
  methods: {
    getRandomArray: function(minNum, maxNum, n) {
      let rdmArray = [];
      // 將陣列歸零 array reset to zero
      let vm = this;
      vm.rdmArray = [];
      for (let i = 0; i < n; i++) {
        let rdm = 0;
        do {
          var exist = false;
          // 產生亂數 generate the random number
          rdm = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
          // 判斷是否數字是否重複 judge whether the number is repeated
          if (rdmArray.indexOf(rdm) != -1) exist = true;
        } while (exist);
        rdmArray[i] = rdm;
        vm.rdmArray.push(rdm);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-Lottery.scss";
</style>
