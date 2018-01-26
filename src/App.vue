<template>
  <div id="app">
    <head-view/>
    <router-view/>
  </div>
</template>

<script>
import Layout from '@/components/layout'

export default {
  name: 'app',
  components: {
    'head-view': Layout.Head
  }
}
</script>

<style lang="scss">
@import './assets/css/main.scss';
</style>
