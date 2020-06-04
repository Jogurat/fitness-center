<template>
  <div class="home">
    <div class="img-container">
      <img src="@/assets/cover-pic.png" alt />
    </div>
    <div class="text-play">PLAY</div>
    <div class="text-fcentar">Fitness Center</div>
    <div class="text-adcopy">
      {{ adcopy[lang] }}
      <div class="test">
        <!-- <button class="cta-btn">{{ ctaBtn[lang] }}</button> -->
        <Button :text="ctaBtn[lang]" />
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
      ctaBtn: { EN: "Find out more", SR: "Saznaj vise" }
    };
  },
  props: ["lang"]
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
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

.img-container img {
  /* width: 556px;
  height: 835px; */
  width: 511.52;
  height: 768.2px;
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
</style>