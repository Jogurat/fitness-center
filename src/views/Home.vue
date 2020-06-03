<template>
  <div class="home">
    <div class="img-container">
      <img src="@/assets/cover-pic.png" alt />
    </div>
    <div class="text-play">PLAY</div>
    <div class="text-fcentar">Fitness Center</div>
    <div class="text-adcopy">
      {{ adcopy[lang] }}
      <div>
        <button class="cta-btn">{{ ctaBtn[lang] }}</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
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
  background-color: #0c129c;
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

.cta-btn {
  margin-top: 50px;
  border: 2px solid white;
  color: white;
  background: none;
  font-size: 27px;
  padding: 15px;
  cursor: pointer;
  position: relative;
  transition: 0.09s ease-in;
  border-radius: 4px;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.cta-btn:hover {
  color: #0c129c;
}

.cta-btn::before {
  content: "";
  position: absolute;
  background: white;
  color: #0c129c;
  bottom: 0;
  left: 0;
  right: 0;
  top: 100%;
  z-index: -1;
  transition: top 0.09s ease-in;
}

.cta-btn:hover::before {
  top: 0;
}
</style>