<template>
  <div class="page-main">
    <h2>{{ msg }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/cp-Home.scss';
</style>
