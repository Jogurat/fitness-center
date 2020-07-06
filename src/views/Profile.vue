<template>
  <div class="profile">
    <h1>{{ profileText[lang] }}</h1>
    <div class="workouts-woo" v-if="myWorkouts.length > 0">
      <div v-for="(workout, index) in myWorkouts" :key="index" class="remove-workout-container">
        <WorkoutCard :workout="workout" :lang="lang"></WorkoutCard>
        <Button @click="removeWorkout(workout)" :text="btnText[lang]" class="remove-btn"></Button>
      </div>
    </div>
    <div class="no-workout" v-else>
      <p>{{ noWorkoutsText[lang] }}</p>
    </div>
  </div>
</template>

<script>
import WorkoutCard from "@/components/WorkoutCard.vue";
import Button from "@/components/Button.vue";
import workouts from "@/workouts.json";
export default {
  data() {
    return {
      workouts: [],
      myWorkouts: [],
      profileText: { EN: "Profile", SR: "Profil" },
      btnText: { EN: "Remove", SR: "Ukloni" },
      noWorkoutsText: {
        EN: "Here you will se your selected workouts :)",
        SR: "Ovde će Vam biti prikazani izabrani treninzi :)"
      }
    };
  },
  props: ["lang"],
  components: {
    WorkoutCard,
    Button
  },
  methods: {
    removeWorkout(workoutToRemove) {
      let storedWorkouts = JSON.parse(localStorage.getItem("reservedAppos"));
      storedWorkouts = storedWorkouts.filter(workout => {
        return (
          workout.workoutId !== workoutToRemove.id &&
          workout.appoId !== workoutToRemove.appoId
        );
      });
      localStorage.setItem("reservedAppos", JSON.stringify(storedWorkouts));
      this.myWorkouts = this.myWorkouts.filter(workout => {
        console.log(workout);
        return (
          workout.id !== workoutToRemove.id &&
          workout.appoId !== workoutToRemove.appoId
        );
      });
    }
  },
  created() {
    this.workouts = [...workouts];
    let storedWorkouts = JSON.parse(localStorage.getItem("reservedAppos"));
    if (storedWorkouts !== null) {
      //   this.workouts.forEach(workout => {
      //     storedWorkouts.forEach(stored => {
      //       if (stored.workoutId === workout.id) {
      //         workout.appoId = stored.appoId;
      //         this.myWorkouts.push(workout);
      //       }
      //     });
      //   });
      storedWorkouts.forEach(stored => {
        this.workouts.forEach(workout => {
          if (stored.workoutId === workout.id) {
            workout.appoId = stored.appoId;
            this.myWorkouts.push(workout);
          }
        });
      });
    }
    console.log(this.myWorkouts);
    document.title = `Play Fitness - ${this.profileText[this.lang]}`;
  }
};
</script>

<style>
.profile {
  padding-top: 85px;
  background: var(--main-bg-color);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.profile h1 {
  color: white;
  font-size: 40px;
  margin-bottom: 10px;
}

.remove-workout-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.remove-btn .cta-btn {
  padding: 10px;
  /* font-size: 1px; */
  margin-left: 40px;
}

.no-workout p {
  font-size: 50px;
  color: white;
}
</style>