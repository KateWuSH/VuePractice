<template>
  <div class="page-main">
    <h2>{{ errorCode }}</h2>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'EmptyPage',
  data () {
    return {
      errorCode: 404,
      msg: '您所要求的頁面不存在，請透過上方連結瀏覽網站！'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/css/cp-EmptyPage.scss';
</style>
