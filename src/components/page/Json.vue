<template lang="pug">
  .json 
    input(type='text')
    a(href='javascript:void()') Create
    ol
      li alex
        a(href='javascript:void()') Update
        a(href='javascript:void()') Delete
      li alex
        a(href='javascript:void()') Update
        a(href='javascript:void()') Delete
</template>

<script>
export default {
  name: 'JsonServer',
  data() {
    return {
      test: '123'
    }
  }
}
</script>

<style lang="sass" scoped>
  .json
    width: 80%
    margin: 50px auto
  input
    margin-bottom: 30px
    height: 25px
  li
    list-style-type: decimal
    list-style-position: inside
    margin-bottom: 30px
  a
    color: white
    background-color: Teal 
    margin-left: 15px
    padding: 5px 10px
    border-radius: 5px  
</style>

