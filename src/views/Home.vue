<template>
  <div class="home">
    <div class="img-container">
      <img class="main-img" src="@/assets/cover-pic.png" alt />
      <img class="second-img" src="@/assets/pic2.png" alt />
    </div>
    <div class="text-play">PLAY</div>
    <div class="text-fcentar">Fitness Center</div>
    <div class="text-adcopy">
      {{ adcopy[lang] }}
      <div class="btn-container">
        <!-- <button class="cta-btn">{{ ctaBtn[lang] }}</button> -->
        <Button @click="test" class="main-btn" :text="secondaryBtn[lang]" />
        <Button :text="primaryBtn[lang]" filled />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button";
export default {
  name: "Home",
  components: {
    Button
  },
  data() {
    return {
      adcopy: {
        EN: "Find out why we are the best",
        SR: "Saznajte zasto smo najposecenija teretana na Banovom brdu i sire"
      },
      secondaryBtn: { EN: "Find out more", SR: "Saznaj vise" },
      primaryBtn: { EN: "Book an apointment", SR: "Zakazi trening" }
    };
  },
  methods: {
    test() {
      console.log("hi");
    }
  },
  props: ["lang"]
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  z-index: 2;
  user-select: none;
  -webkit-user-drag: none;
}
.home {
  width: 100vw;
  height: 100vh;
  background-color: var(--main-bg-color);
  font-family: "Rubik", sans-serif;
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.img-container .main-img {
  /* width: 556px;
  height: 835px; */
  width: 511.52;
  height: 768.2px;
  z-index: 2;
}

.second-img {
  position: absolute;
  z-index: 1;
  left: 50%;
  bottom: 30%;
}

.text-play {
  position: absolute;
  left: 960px;
  top: 475px;
  font-size: 300px;
  letter-spacing: 0.06em;
  color: white;
  /* font-family: "Ubuntu", sans-serif; */
}

.text-fcentar {
  position: absolute;
  left: 93px;
  top: 216px;
  color: white;
  font-size: 100px;
}

.text-fcentar::after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 45%;
  width: 442px;
  height: 8px;
  background-color: white;
  z-index: 3;
  border-bottom: solid 1px white;
}

.text-adcopy {
  position: absolute;
  left: 249px;
  top: 403px;
  font-size: 25px;
  line-height: 41px;
  text-align: right;
  color: white;
  width: 393px;
  height: 91px;
}

.btn-container {
  display: flex;
  width: 200%;
  justify-content: flex-start;
}

.main-btn {
  margin-right: 30px;
}
</style>