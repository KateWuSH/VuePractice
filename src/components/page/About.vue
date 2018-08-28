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
        //- 為了確保 v-for 會重新渲染，建議加上 :key
        li(v-for="(tab, index) in tabs" :key="tab.view" :class="{ active:active===index }" @click="toggle(index, tab.view)") {{ tab.type }}
      keep-alive
        component(:is="currentView")
</template>

<script>
// 局部註冊(Local Registration)：不需共用的 component，可採用；須共用則採用全域註冊
var child1 = {
  template: "<p>Child 1 - this is child 1</p>"
};
var child2 = {
  template: "<p>Child 2 - this is child 2</p>"
};

export default {
  name: "About",
  data() {
    return {
      msg: "UI Button",
      loadStatus: false,
      title: "Tab Practice",
      //- 預設 tab class active 的位置
      active: 0,
      currentView: "child1",
      tabs: [
        {
          type: "Tab1",
          view: "child1"
        },
        {
          type: "Tab2",
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
