<template>
  <div class="about">
    <!-- <h1>This is an about page</h1> -->
    <h1>{{ teamText[lang] }}</h1>
    <p>Pero Mikić</p>
    <p>Slavoljub Petrović</p>

    <h1>{{ phoneText[lang] }}</h1>
    <p>123456</p>
    <h1>{{mapText[lang]}}</h1>
    <div class="about-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5663.970175773006!2d20.419356209065587!3d44.78110935006701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a6fd08533f98f%3A0x9ac7bf958f30eea8!2sPlay%20Fitness!5e0!3m2!1sen!2srs!4v1593775103375!5m2!1sen!2srs"
        width="800"
        height="550"
        frameborder="0"
        style="border:0;"
        allowfullscreen
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      teamText: { EN: "Our team", SR: "Naš tim" },
      mapText: { EN: "Where are we?", SR: "Kako do nas?" },
      phoneText: { EN: "Our phone", SR: "Kontakt telefon" }
    };
  },
  props: ["lang"]
};
</script>

<style scoped>
.about {
  /* margin-top: 50px; */
  padding-top: 85px;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: var(--main-bg-color);
  color: white;
}

.about h1 {
  font-size: 40px;
  margin-top: 10px;
}

.about p {
  font-size: 20px;
}
</style>