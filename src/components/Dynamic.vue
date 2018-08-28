<template>
  <div>
    <!-- <h2>{{ message }}</h2>
    <div class="content">
      <div class="left">
        <button @click="currentView = 'channel-1'">Channel 1</button>
        <button @click="currentView = 'channel-2'">Channel 2</button>
        <button @click="currentView = 'channel-3'">Channel 3</button>
      </div>
      <div class="right">
        加上 keep-alive 可保存該 component 的狀態，就不會去再去走 created 那個狀態，只會走 actived 的狀態
        <keep-alive>
          <component :is="currentView"></component>
        </keep-alive>
      </div>
    </div> -->


    <!-- <div id="app">
      <h2>{{ message }}</h2>
      <button @click="add('a-component', '我是A')">添加A组件</button>
      <button @click="add('b-component', '我是B')">添加B组件</button>
      <component :is="item.component" :text="item.text" v-for="item in items"></component>
    </div> -->

    <!-- <div id="example">  
      <input type="radio" id="one" value="fast" v-model="currentView" />  
      <label for="one">fast</label>  <br />  
      <input type="radio" id="two" value="bus" v-model="currentView" />  
      <label for="two">bus</label>  <br />  
      <input type="radio" id="three" value="business" v-model="currentView" />  
      <label for="three">business</label>  
      <component :is="currentView">    
      </component>
    </div> -->

  </div>
</template>





<script>
export default {
  name: "Dynamic",
  data() {
    return {
      message: ":is 動態更換組件 + keep-alive",
      // message: ":is 動態增加組件",
      items: []
    };
  }
};
</script>

<style lang="scss" scoped>
h2 {
  margin: 100px 0 30px;
}

.content {
  display: flex;
  width: 1200px;
  margin: auto;
}

.left {
  width: 20%;
  background: #ccc;
  padding: 5%;
}

.left button {
  display: block;
  width: 100px;
  height: 30px;
  background: #fff;
  margin: 0 auto 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.right {
  width: 70%;
  background: #eee;
  padding: 5%;
}
</style>
