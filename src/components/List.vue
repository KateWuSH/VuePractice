<template lang="pug">
  .list-frame
    h1 User's List
    .gender-filter
      span 篩選條件：
      ul#filter
        li(class="male" @click="filterMale()" :class="{ active: isMaleActive }") Male
        li(@click="filterFemale(); statusFemale()" :class="{ active: isFemaleActive }") Female
        li(@click="filterAll();statusAll()" :class="{ active: isAllActive }") All
        //-li(v-for="filter in filters" @click='filtered(filter.title)') {{ filter.title }}
    table
      thead
        tr
          th(v-for="th in ths") {{ th.title }}
      tbody
        tr(v-for="(item, i) in listData")
          td {{ i + 1 }}
          td
            img(:src="item.picture.medium" width="50px")
          td {{ item.name.first }}{{ item.name.last }}
          td(class="gender") {{ item.gender }}
          td {{ item.email }}
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      listData: [],
      maleData: [],
      femaleData: [],
      isMaleActive: false,
      isFemaleActive: false,
      isAllActive: false,
      filters: [
        {
          title: "Male"
        },
        {
          title: "Female"
        },
        {
          title: "All"
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
      vm.axios
        .get("https://randomuser.me/api/?results=8")
        .then(function(response) {
          vm.listData = response.data.results;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    filterMale() {
      let male = this.listData.filter(data => data.gender === "male");
      this.maleData = male;
      console.log(this.maleData.length);

      const items = document.getElementById("filter").children;
      console.log(items);

      // for (let i = 0; i < items.length; i++) {
      //   items[i].classList.remove("active");
      //   console.log("remove");
      // }
    },
    filterFemale() {
      let female = this.listData.filter(data => data.gender === "female");
      this.femaleData = female;
      console.log(this.femaleData.length);
    },
    filterAll() {
      console.log(this.listData.length);
    },
    statusMale() {},
    statusFemale() {
      const items = document.getElementById("filter").children;
      let vm = this;
      const isFemaleActive = "";
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }
      vm.isFemaleActive = !vm.isFemaleActive;
    },
    statusAll() {
      const items = document.getElementById("filter").children;
      let vm = this;
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }
      vm.isAllActive = !vm.isAllActive;
    },
    filtered(type) {
      let male = this.listData.filter(data => data.gender === "male");
      this.maleData = male;
      console.log(this.maleData);
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
