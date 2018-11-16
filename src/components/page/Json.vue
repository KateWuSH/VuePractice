<template lang="pug">
  .json 
    input(type='text' v-model='input')
    a(href='javascript:void()' @click.prevent='createHandler') Create
    h6 為避免 live server 自動更新，要在設定裡的 liveServer.settings.ignoreFiles，加上 data.json
    ol
      li(v-for='content in contents') {{ content.content }}
        a(href='javascript:void()') Update
        a(href='javascript:void()') Delete
</template>

<script>
export default {
  name: 'JsonServer',
  data() {
    return {
      input: '',
      contents: []
    }
  },
  methods: {
    createHandler() {
      console.log('Click', this.input);
      this.axios.post('http://localhost:3000/contents', {
        content: this.input
      }).then((res) => {
        console.log(res);
        
      })
    }
  },
  mounted() {
    this.axios.get('http://localhost:3000/contents').then((res) => {
      this.contents = res.data;
      
    })
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
  h6
    margin-bottom: 30px
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

