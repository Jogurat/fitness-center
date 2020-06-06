<template>
  <div class="container">
    <WorkoutCard :key="workout.id" :workout="workout" :lang="lang" />
  </div>
</template>

<script>
import WorkoutCard from "@/components/WorkoutCard";
import workouts from "@/workouts.json";

export default {
  data() {
    return {
      workouts: [],
      workout: null
    };
  },
  components: {
    WorkoutCard
  },
  methods: {},
  props: ["lang"],
  created() {
    this.workouts = workouts;
    this.workout = workouts[0];
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: space-evenly;
}
</style>