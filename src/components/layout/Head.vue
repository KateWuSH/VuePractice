<template>
  <header>
    <div class="site-container">
      <h1 class="site-title">
        <router-link to="/" :title="siteTitle">
          <img src="static/images/logo.png">
        </router-link>
      </h1>
      <nav>
        <ul class="site-menu">
          <li v-for="menu in siteMenu">
            <router-link :to="menu.url">{{ menu.name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Head",
  data() {
    return {
      siteTitle: "eSport",
      siteMenu: [
        {
          name: "Home",
          url: "/"
        },
        {
          name: "UI",
          url: "/about"
        },
        {
          name: "API",
          url: "/test"
        },
        {
          name: "JS-Basic",
          url: "/Practice"
        },
        {
          name: "Props",
          url: "/Props"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/cp-Head.scss";
</style>
