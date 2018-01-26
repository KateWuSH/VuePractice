<template>
  <div class="page-main">
    <!-- 放入引用的 component -->
    <NumberTriangle />
    <PascalTriangle />
    <TimesTable />
    <InvertedTriangle />
    <DataSorting />
    <Lottery />


  </div>
</template>

<script>
// 載入引用的 component
import NumberTriangle from "../NumberTriangle.vue";
import TimesTable from "../TimesTable.vue";
import PascalTriangle from "../PascalTriangle.vue";
import InvertedTriangle from "../InvertedTriangle.vue";
import DataSorting from "../DataSorting.vue";
import Lottery from "../Lottery.vue";

export default {
  name: "Practice",
  // 在 components 裡宣告使用
  components: {
    NumberTriangle,
    TimesTable,
    PascalTriangle,
    InvertedTriangle,
    DataSorting,
    Lottery
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/cp-Practice.scss";
</style>
