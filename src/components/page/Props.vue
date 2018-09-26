<template lang="pug">
  .page-main
    .pass-frame
      h2 父、子組件資料傳遞和更新
      p Parent: {{ message }} 
        input(v-model="message")
    //- ** 重點：將資料綁入子組件中
    Container(:parent-message="message" :items="items")
    Dynamic(@pushNewName='getNewName')
    .parent 
      p 父組件
      select(v-model="status" @change="changeStatus")
        option 線上
        option 線下
      span Hi, {{ showUsername }}
</template>

<script>
import Container from '../Container.vue'
import Dynamic from '../Dynamic.vue'

export default {
  name: 'Props',
  components: {
    Container,
    Dynamic
  },
  data() {
    return {
      //  將要傳入子組件的資料放這邊
      message: 'Hello',
      items: [
        {
          title: 'Heading1',
          info:
            '1. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          title: 'Heading2',
          info:
            '2. Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
          btntext: 'View details »'
        },
        {
          title: 'Heading3',
          info:
            '3. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
          btntext: 'View details »'
        }
      ],
      status: this.$store.state.status
    }
  },
  // 自動更新父組件
  methods: {
    selfUpdate(val) {
      this.message = val
    },
    changeStatus() {
      //- 當狀態改變時，status 並不會自動更新，所以要綁定事件
      this.$store.state.status = this.status
    },
    getNewName(newName) {
      this.username = newName
    }
  },
  computed: {
    showUsername() {
      return this.$store.state.username
    }
  },
  // 用 $on 監聽子組件的改變
  mounted() {
    this.$on('update', this.selfUpdate)
  }
}
</script>

<style lang="scss" scoped>
.page-main {
  width: 1200px;
  margin: auto;
}
.pass-frame {
  margin: 30px auto 10px;
  width: 450px;
  text-align: center;
}

h2 {
  margin-bottom: 40px;
}

select {
  margin-left: 10px;
}
.parent {
  width: 50%;
  border-right: 1px solid #ccc;

  p {
    font-size: 1rem;
    line-height: 2.5rem;
  }
  select {
    margin: 15px 0;
  }

  span {
    display: block;
  }
}
</style>
