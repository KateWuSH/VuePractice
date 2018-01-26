<template>
  <div class="page-main">
    <!-- 放入引用的 component -->
    <Marquee />
    <List />
  </div>
</template>

<script>
// 載入引用的 component
import Marquee from "../Marquee.vue";
import List from "../List.vue";

export default {
  name: "Test",
  // 在 components 裡宣告使用
  components: {
    Marquee,
    List
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/cp-Test.scss";
</style>
