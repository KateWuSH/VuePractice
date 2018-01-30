<template>
  <div class="list-frame">
    <h2>Temperature Conversion</h2>
    <div class="tc" v-if="isCelsius">
      <p>攝氏</p><input type="number" v-model="celsius"><span>°C</span>
    </div>
    <div class="tc" v-if="!isCelsius">
      <p>華氏</p><input type="number" v-model="fahrenheit"><span>°Ｆ</span>
    </div>
    <button @click="toggle">Change</button>
    <div class="tf" v-show="isCelsius">
      <p>華氏</p><span>{{ celsius * 9 / 5 + 32 }}</span> °F
    </div>
    <div class="tf" v-show="!isCelsius">
      <p>攝氏</p><span>{{ (fahrenheit - 32) * 5 / 9 }}</span> °Ｃ<br/><br/>
    </div>
  </div>
</template>

<script>
export default {
  name: "TemperatureConversion",
  data() {
    return {
      celsius: 0,
      fahrenheit: 32,
      isCelsius: true
    };
  },
  methods: {
    toggle: function() {
      this.isCelsius = !this.isCelsius;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-TemperatureConversion.scss";
</style>
