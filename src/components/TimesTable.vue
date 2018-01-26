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
  name: "NumberTriangle"
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-TimesTable.scss";
</style>
