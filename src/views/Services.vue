<template>
  <div class="flex-container">
    <div class="filters-container">
      <input @change="handleChange" type="checkbox" name="exercise" id="cardio" checked />
      <label for="cardio">Cardio</label>
      <input @change="handleChange" type="checkbox" name="exercise" id="yoga" checked />
      <label for="yoga">Yoga</label>
      <input @change="handleChange" type="checkbox" name="exercise" id="pilates" checked />
      <label for="pilates">Pilates</label>
      <input @change="handleChange" type="checkbox" name="exercise" id="core" checked />
      <label for="core">Core</label>
    </div>
    <div class="container">
      <WorkoutCard
        v-for="workout in filteredWorkouts"
        :key="workout.id"
        :workout="workout"
        :lang="lang"
      />
      <!-- <button @click="handleClick">hello</button> -->
    </div>
  </div>
</template>

<script>
import WorkoutCard from "@/components/WorkoutCard";
import workouts from "@/workouts.json";

export default {
  data() {
    return {
      title: { EN: "Services", SR: "Usluge" },
      workouts: [],
      filteredWorkouts: [],
      workout: null
    };
  },
  components: {
    WorkoutCard
  },
  methods: {
    handleChange() {
      console.log("hi");
      this.filteredWorkouts = this.workouts.filter(el =>
        this.filterByCategory(el)
      );
    },
    filterByCategory(el) {
      console.log(el.category);
      return document.getElementById(el.category).checked;
    }
  },
  props: ["lang"],
  created() {
    console.log("created services");
    this.workouts = workouts;
    this.filteredWorkouts = workouts;
    this.workout = workouts[0];
    document.title = `Play Fitness - ${this.title[this.lang]}`;
  }
};
</script>

<style scoped>
.container {
  /* display: flex;
  flex-direction: column; */
  /* margin-top: 85px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 20px;
  justify-items: center;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: space-evenly;
  background-color: var(--main-bg-color);
}

.flex-container {
  background-color: var(--main-bg-color);
  display: flex;
  padding-top: 90px;
}

.filters-container {
  width: 30vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.filters-container input[type="checkbox"] {
  /* height: 100px; */
}

.filters-container label {
  color: var(--main-text-color);
  font-size: 40px;
}
</style>