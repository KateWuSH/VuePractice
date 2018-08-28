<template>
  <div class="page-main">
    <div class="pass-frame">
      <h2>父、子組件資料傳遞和更新</h2>
      <p>
        Parent: {{ message }} <input v-model="message">
      </p> 
    </div>
    <!-- ** 重點：將資料綁入子組件中 -->
    <Container  :parent-message="message" :items="items"/>
    <Dynamic />
  </div>
</template>

<script>
import Container from "../Container.vue";
import Dynamic from "../Dynamic.vue";

export default {
  name: "Props",
  components: {
    Container,
    Dynamic
  },
  data() {
    return {
      //  將要傳入子組件的資料放這邊
      message: "Hello",
      items: [
        {
          title: "Heading1",
          info:
            "1. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          btntext: "View details »"
        },
        {
          title: "Heading2",
          info:
            "2. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ",
          btntext: "View details »"
        },
        {
          title: "Heading3",
          info:
            "3. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",
          btntext: "View details »"
        }
      ]
    };
  },
  // 自動更新父組件
  methods: {
    selfUpdate(val) {
      this.message = val;
    }
  },
  // 用 $on 監聽子組件的改變
  mounted() {
    this.$on("update", this.selfUpdate);
  }
};
</script>

<style lang="scss" scoped>
.pass-frame {
  margin: 30px auto;
  width: 450px;
  text-align: left;
}

h2 {
  margin-bottom: 40px;
}
</style>
