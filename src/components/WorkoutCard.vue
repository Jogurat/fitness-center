<template>
  <div class="card-container" id="card-container">
    <div class="card-img-container" id="card-img-container">
      <img src="@/assets/yoga1.png" alt />
      <!-- <div class="img-bg" style="backgroundImage: `url(${require('@/assets/yoga1.png')})`"></div> -->
      <div class="img-filter">
        <span class="exercise-type">{{ exerciseType }}</span>
      </div>
    </div>
    <div class="card-basic-info">
      <!-- <button class="more-info-btn">Vise</button> -->
      <span class="card-title">Title</span>

      <div class="basic-info-container">
        <p>ASDff</p>
        <p>Adxzv</p>
        <p>ASd</p>
      </div>
      <Button @click="handleClick" class="more-info-btn" text="Vise" filled></Button>
    </div>
    <div :class="['card-more-info', moreInfo ? 'show' : '']">
      <p>Info 1</p>
      <p>Info 2</p>
      <p>Info 3</p>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  data() {
    return {
      moreInfo: false
    };
  },
  components: {
    Button
  },
  props: ["exerciseType"],
  methods: {
    handleClick() {
      console.log("Hi");
      this.moreInfo = !this.moreInfo;
    }
  }
};
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  position: relative;
  transition: transform 0.09s ease-in;
  cursor: pointer;
  align-items: center;
  /* width: 400px; */
}

.card-container:hover {
  transform: scale(1.005);
}

.card-container:hover > .card-img-container {
  box-shadow: 10px 10px 16px -5px rgba(255, 255, 255, 0.3);
}

.card-container:hover > .card-basic-info {
  box-shadow: 0px 6px 16px -5px rgba(255, 255, 255, 0.3);
}

.card-basic-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 400px;
  height: 90px;
  /* background-color: var(--second-bg-color); */
  /* background-color: #f1edff; */
  /* background-color: #777586; */
  background-color: #514f7c;
  /* bottom: 0; */
  left: 7px;
  border-radius: 4px;
  top: 23%;
  /* border: 1px solid white; */
  transition: all 0.09s ease-in;
}

.basic-info-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.basic-info-container p {
  padding: 10px;
  color: white;
}

.basic-info-container p:nth-child(2) {
  border-left: 1px solid white;
  border-right: 1px solid white;
}

.card-img-container {
  /* border: 1px solid white; */
  transition: all 0.09s ease-in;
  position: relative;
}

.img-filter {
}

.card-more-info {
  background-color: white;
  /* position: absolute;
  top: 32%; */
  margin-top: 80px;
  display: none;
  flex-direction: column;
  align-items: center;
  transition: all 1s ease-in;
  /* z-index: 1; */
  /* height: 0; */
  opacity: 0;
  width: 96%;
}

.card-more-info.show {
  display: flex;
  opacity: 1;
}
.img-bg {
  /* background-image: url("/src/assets/yoga1.png"); */
}

.exercise-type {
  text-transform: uppercase;
}

.img-filter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 40px;
  border: 4px solid white;
  padding: 10px 30px;
  backdrop-filter: blur(15px);
}

.card-title {
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  padding: 5px;
}
</style>

<style>
.more-info-btn .cta-btn {
  margin-top: 1px;
  width: 120px;
  height: 20px;
  /* padding: 0; */
  font-size: 16px;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>