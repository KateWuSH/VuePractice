<template>
    <div class="list-frame">
    <h1>User's List</h1>
    <div class="gender-filter">
      篩選條件：
      <span class="male" @click="filterMale();isMaleActive = !isMaleActive" :class="{ active: isMaleActive }">Male</span>
      <span @click="filterFemale();isFemaleActive = !isFemaleActive" :class="{ active: isFemaleActive }">Female</span>
      <span>All</span>
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
      isFemaleActive: false
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
      var gender = "";
      for (var i = 0; i < genders.length; i++) {
        switch (genders[i].textContent) {
          case "male":
            break;
          case "female":
            genders[i].parentNode.style.display = "none";
        }
      }
    },
    filterFemale() {
      var genders = document.querySelectorAll(".gender");
      var gender = "";
      for (var i = 0; i < genders.length; i++) {
        switch (genders[i].textContent) {
          case "male":
            genders[i].parentNode.style.display = "none";
            break;
          case "female":
        }
      }
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
