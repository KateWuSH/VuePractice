<template>
  <div>
    <div class="child">
      <div>
        Child:
        <span>{{ parentMessage }}</span>
        <input v-model="message">
        <button @click="updateText">Update</button>
      </div>
    </div>
    <div class="frame" >
      <h2>父組件將資料用 Props 傳入子組件</h2>
      <div class="wrapper">
        <div class="inner" v-for="item in items">
          <h3>{{ item.title }}</h3>
          <p>{{ item.info }}</p>
          <p><a class="btn btn-default" href="#" role="button">{{ item.btntext }}</a></p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Container",
  // 從父組件呼叫資料
  props: {
    items: Array,
    parentMessage: String
  },
  // 將父組件的資料傳過來
  data() {
    return {
      message: this.parentMessage
    };
  },
  // 將子組件的資料傳給父組件
  methods: {
    updateText() {
      this.$parent.$emit("update", this.message);
      console.log(this.$parent);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-Container.scss";
</style>
