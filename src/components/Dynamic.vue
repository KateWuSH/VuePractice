<template lang="pug">
  .wrapper
    h2 Vuex 練習
    .child
      p 子組件 
      span 狀態： {{ showStatus }}
      div
        input(v-model='username')
        button(class="btn" @click="updateUsername") 更新姓名
</template>





<script>
export default {
  name: 'Dynamic',
  data() {
    return {
      message: ':is 動態更換組件 + keep-alive',
      // message: ":is 動態增加組件",
      items: [],
      username: 'Kate'
    }
  },
  methods: {
    updateUsername() {
      this.$store.state.username = this.username
    }
  },
  computed: {
    showStatus() {
      // 資料呈現
      return this.$store.state.status
    }
  }
}
</script>

<style lang="scss" scoped>
h2 {
  margin: 100px 0 30px;
}

.child {
  width: 50%;
  float: right;

  p {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  span {
    display: block;
    margin: 15px 0;
  }
  .btn {
    background: rgb(6, 115, 216);
    color: white;
    border: none;
    font-family: '微軟正黑體';
    border-radius: 2px;
    height: 30px;
    width: 80px;
    margin-left: 10px;
  }
  input {
    height: 25px;
    font-size: 1rem;
    width: 150px;
    padding-left: 5px;
  }
}
</style>
