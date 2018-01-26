<template>
  <div>
    <marquee>
      <ul>
        <li v-for="item in items">
          {{ item.message }}
        </li>
      </ul>
    </marquee>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      items: [
        {
          message:
            "Netflix 去年大增 2400 萬用戶，盤後股價創高，市值突破千億美元。"
        },
        {
          message:
            "Facebook 重新定義時間，推新計時單位「Flick」幫助影像創作者。"
        },
        { message: "CES 展 5G 聯網願景 IoT 雲服務邁向新里程。" },
        {
          message:
            "挖角 NASA 與特斯拉人才，Uber CEO：十年內要讓美國「飛行車」滿天飛。"
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-Marquee.scss";
</style>
