<template>
  <div id="app">
    <NavBar @langChange="handleLangChange" />
    <router-view :lang="lang" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      lang: "SR"
    };
  },
  methods: {
    handleLangChange(lang) {
      this.lang = lang;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");

:root {
  --main-bg-color: #343bd9;
}
</style>
