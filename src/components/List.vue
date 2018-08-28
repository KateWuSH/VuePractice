<template lang="pug">
  //- 資料來源：https://www.youtube.com/watch?v=mEjVUt_rsKs 
  .list-frame
    h1 User's List
    .gender-filter
      span 篩選條件：
      ul#filter
        li(v-for="(filter, index) in filters" :class="{active:active===index}" @click="toggle(index, filter.title)") {{ filter.title }}
    table
      thead
        tr
          th(v-for="th in ths") {{ th.title }}
      tbody
        tr(v-for="(item, i) in listDataRender")
          td {{ i + 1 }}
          td
            img(:src="item.picture.medium" width="50px")
          td {{ item.name.first }}{{ item.name.last }}
          td(class="gender") {{ item.gender }}
          td {{ item.email }}
    //- 如需檢測 API 返回的資料，可以使用 pre 來看
    //- pre {{ listData }}
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      listData: [],
      listDataRender: [],
      active: 0,
      filters: [
        {
          title: "All"
        },
        {
          title: "Male"
        },
        {
          title: "Female"
        }
      ],
      ths: [
        {
          title: "#"
        },
        {
          title: "Photo"
        },
        {
          title: "Name"
        },
        {
          title: "Gender"
        },
        {
          title: "Email"
        }
      ]
    };
  },
  methods: {
    getData() {
      let vm = this;
      //- 因為有在 main.js 宣告使用，所以可以用 this
      vm.axios
        .get("https://randomuser.me/api/?results=8")
        .then(response => {
          vm.listData = response.data.results;
          //- listData 為取得原始資料，為避免資料被汙染，建議進行深拷貝另一份資料，在新拷貝的資料中再進行處理
          vm.listDataRender = JSON.parse(JSON.stringify(vm.listData));
        })
        .catch(error => console.log(error));
    },
    toggle(index, type) {
      this.active = index;
      if (type === "Male") {
        this.filterMale();
      } else if (type === "Female") {
        this.filterFemale();
      } else {
        this.filterAll();
      }
    },
    filterMale() {
      this.listDataRender = this.listData.filter(
        data => data.gender === "male"
      );
    },
    filterFemale() {
      this.listDataRender = this.listData.filter(
        data => data.gender === "female"
      );
    },
    filterAll() {
      this.listDataRender = JSON.parse(JSON.stringify(this.listData));
    }
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/css/cp-List.scss";
</style>
