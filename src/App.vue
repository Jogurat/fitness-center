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
  /* --main-bg-color: #343bd9; */
  /* --second-bg-color: #0c129c; */
  --main-bg-color: #21234b;
  --second-bg-color: #10153b;
  --main-text-color: white;
  --main-light-bg-color: #f5fafa;
  --second-light-bg-color: #acd1e9;
}

body {
  font-family: "Rubik", sans-serif;
}

.light-theme {
  background-color: var(--main-light-bg-color);
  color: var(--second-light-bg-color);
}
</style>
