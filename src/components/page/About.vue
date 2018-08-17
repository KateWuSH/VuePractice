<template lang="pug">
#components-demo
  .page-main
    .button
      h2 {{ msg }}
      p
        el-button(type="primary" :loading="loadStatus" @click="loadToggle") ElementUI Button
    
    .tab-frame
      h2 {{ title }}
      ul
        li(@click="toggle(index ,tab.view)" v-for="(tab,index) in tabs" :class="{active:active===index}") {{tab.type}}
      component(:is="currentView")
</template>

<script>
// 局部註冊(Local Registration)：不需共用的 component，可採用；須共用則採用全域註冊
var child1 = {
  template: "<p>this is child1</p>"
};
var child2 = {
  template: "<p>this is child2</p>"
};

export default {
  name: "About",
  data() {
    return {
      msg: "UI Button",
      loadStatus: false,
      title: "Tab Practice",
      active: 0,
      currentView: "child1",
      tabs: [
        {
          type: "tab1",
          view: "child1"
        },
        {
          type: "tab2",
          view: "child2"
        }
      ]
    };
  },
  methods: {
    loadToggle: function() {
      this.loadStatus = !this.loadStatus;
    },
    toggle(i, v) {
      this.active = i;
      this.currentView = v;
    }
  },
  components: {
    child1,
    child2
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/cp-About.scss";
</style>
