<template>
  <div class="nav">
    <router-link class="nav-link" to="/">{{ link1[lang]}}</router-link>
    <div class="dropdown nav-link">{{ link2[lang]}}</div>
    <router-link class="nav-link" to="/">{{ link3[lang]}}</router-link>
    <router-link class="nav-link" to="/">{{ link4[lang]}}</router-link>
    <div class="lang-toggle-container">
      <button class="lang-toggle nav-link" @click="changeLang">{{ lang }}</button>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-globe lang-toggle-icon"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path
          d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: "SR",
      link1: { EN: "SERVICES", SR: "USLUGE" },
      link2: { EN: "BOOK A SESSION", SR: "ZAKAZIVANJE" },
      link3: { EN: "MY PROFILE", SR: "MOJ NALOG" },
      link4: { EN: "ABOUT US", SR: "O NAMA" }
    };
  },
  methods: {
    changeLang() {
      console.log(this.lang);
      if (this.lang === "SR") {
        this.lang = "EN";
      } else {
        this.lang = "SR";
      }
      this.$emit("langChange", this.lang);
    }
  }
};
</script>

<style>
.nav {
  position: absolute;
  display: flex;
  background-color: #0c129c;
  height: 85px;
  width: 100vw;
  justify-content: flex-end;
  padding: 30px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-family: "Rubik", sans-serif;
  letter-spacing: 0.14em;
  margin-right: 20px;
  margin-left: 20px;
  font-size: 20px;
  position: relative;
}

.nav-link::before {
  content: "";
  position: absolute;
  background: white;
  top: 100%;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  width: 0;
  z-index: -1;
  transition: 0.2s ease-in;
}

.nav-link:hover::before {
  right: 100%;
  width: 100%;
  z-index: 1;
}

.dropdown {
  cursor: pointer;
}

.lang-toggle-container {
  display: flex;
}

.lang-toggle {
  background: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  border: none;
}

.lang-toggle:focus {
  outline: none;
}

.lang-toggle-icon {
  color: white;
}
</style>