<template>
  <div>
    <button class="cta-btn">{{text}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ctaBtn: ""
    };
  },
  props: ["text"]
};
</script>

<style scoped>
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
  color: var(--main-bg-color);
}

.cta-btn::before {
  content: "";
  position: absolute;
  background: white;
  color: var(--main-bg-color);
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