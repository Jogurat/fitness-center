<template>
  <div class="plan">
    <h1>Hello from plan</h1>
    <p>asdkj</p>
    <!-- <p>{{ $route.params.id }}</p> -->
    <p>{{ workout.diff }}</p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </div>
</template>

<script>
import workouts from "@/workouts.json";
export default {
  data() {
    return {
      workout: null
    };
  },
  created() {
    this.workout = workouts[this.$route.params.id - 1];
  }
};
</script>

<style scoped>
.plan {
  padding-top: 85px;
}
</style>