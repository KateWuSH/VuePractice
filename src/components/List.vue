<template>
    <div class="list-frame">
    <h1>User's List</h1>
    <div class="gender-filter" >
      <span>篩選條件：</span>
      <ul id="filter">
        <li class="male" @click="filterMale(); statusMale()" :class="{ active: isMaleActive }">Male</li>
        <li @click="filterFemale(); statusFemale()" :class="{ active: isFemaleActive }">Female</li>
        <li @click="filterAll();statusAll()" :class="{ active: isAllActive }">All</li>
      </ul>
    </div>
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in listData">
          <td>{{ i + 1 }}</td>
          <td><img :src="item.picture.medium" width="50px"></td>
          <td>{{ item.name.first }}{{ item.name.last }}</td>
          <td class="gender">{{ item.gender }}</td>
          <td>{{ item.email }}</td>
        </tr>
      </tbody>
    </table>
    </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      listData: [],
      isMaleActive: false,
      isFemaleActive: false,
      isAllActive: false
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
      var genders = document.querySelectorAll(".gender");
      for (var i = 0; i < genders.length; i++) {
        genders[i].parentNode.classList.remove("display-none");
        switch (genders[i].textContent) {
          case "male":
            break;
          case "female":
            genders[i].parentNode.classList.add("display-none");
        }
      }
    },
    filterFemale() {
      var genders = document.querySelectorAll(".gender");
      for (var i = 0; i < genders.length; i++) {
        genders[i].parentNode.classList.remove("display-none");
        switch (genders[i].textContent) {
          case "male":
            genders[i].parentNode.classList.add("display-none");
            break;
          case "female":
        }
      }
    },
    filterAll() {
      var genders = document.querySelectorAll(".gender");
      for (var i = 0; i < genders.length; i++) {
        genders[i].parentNode.classList.remove("display-none");
      }
    },
    statusMale() {
      const items = document.getElementById("filter").children;
      let vm = this;
      for (let i = 0; i < items.length; i++) {
        items[i].classList.remove("active");
      }
      vm.isMaleActive = true;
    },
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
