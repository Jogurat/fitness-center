<template>
  <div class="flex-container">
    <div class="filters-container">
      <h1 class="filter-heading">{{ sortText[lang] }}</h1>

      <Button
        @click="handleSortDiff"
        class="sort-btn"
        :text="filterByDiff ? `${diffText[lang]} ⬇` : `${diffText[lang]} ⬆`"
      ></Button>
      <Button
        @click="handleSortRating"
        class="sort-btn"
        :text="filterByRating ? `${ratingText[lang]} ⬇` : `${ratingText[lang]} ⬆`"
      ></Button>
      <Button
        @click="handleSortName"
        class="sort-btn"
        :text="filterByName ? `${nameText[lang]} ⬇` : `${nameText[lang]} ⬆`"
      ></Button>
      <h1 class="filter-heading" id="filter-heading">{{ filtersText[lang] }}</h1>
      <div class="checkbox-container">
        <div class="input-container">
          <input @change="handleChange" type="checkbox" name="exercise" id="cardio" checked />
          <label for="cardio">Cardio</label>
        </div>
        <div class="input-container">
          <input @change="handleChange" type="checkbox" name="exercise" id="yoga" checked />
          <label for="yoga">Yoga</label>
        </div>
        <div class="input-container">
          <input @change="handleChange" type="checkbox" name="exercise" id="pilates" checked />
          <label for="pilates">Pilates</label>
        </div>
        <div class="input-container">
          <input @change="handleChange" type="checkbox" name="exercise" id="core" checked />
          <label for="core">Core</label>
        </div>
      </div>
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
import Button from "@/components/Button";
import WorkoutCard from "@/components/WorkoutCard";
import workouts from "@/workouts.json";

export default {
  data() {
    return {
      title: { EN: "Services", SR: "Usluge" },
      filtersText: { EN: "Filters", SR: "Filteri" },
      workouts: [],
      filteredWorkouts: [],
      workout: null,
      filterByDiff: false,
      filterByName: false,
      filterByRating: false,
      nameText: { EN: "Name", SR: "Ime" },
      diffText: { EN: "Difficulty", SR: "Težina" },
      ratingText: { EN: "Rating", SR: "Ocena" },
      sortText: { EN: "Sort", SR: "Sortiraj" }
    };
  },
  components: {
    WorkoutCard,
    Button
  },
  methods: {
    handleChange() {
      // console.log("hi");
      this.filteredWorkouts = this.workouts.filter(el =>
        this.filterByCategory(el)
      );
    },
    filterByCategory(el) {
      // console.log(el.category);
      return document.getElementById(el.category).checked;
    },
    handleSortDiff() {
      console.log("hi from sort");
      this.filteredWorkouts.sort((a, b) => {
        if (this.filterByDiff) return a.diff - b.diff;
        else return b.diff - a.diff;
      });
      this.filterByDiff = !this.filterByDiff;
    },
    handleSortRating() {
      this.filteredWorkouts.sort((a, b) => {
        if (this.filterByRating) return a.rating - b.rating;
        else return b.rating - a.rating;
      });
      this.filterByRating = !this.filterByRating;
    },
    handleSortName() {
      this.filteredWorkouts.sort((a, b) => {
        if (this.filterByName) {
          if (
            a.title[this.lang].toUpperCase() > b.title[this.lang].toUpperCase()
          )
            return 1;
          else return -1;
        } else {
          if (
            a.title[this.lang].toUpperCase() > b.title[this.lang].toUpperCase()
          )
            return -1;
          else return 1;
        }
      });
      this.filterByName = !this.filterByName;
    }
  },
  props: ["lang"],
  created() {
    // console.log("created services");
    this.workouts = workouts;
    this.filteredWorkouts = workouts;
    this.workout = workouts[0];
    document.title = `Play Fitness - ${this.title[this.lang]}`;
  }
};
</script>

<style>
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

.input-container {
  display: flex;
  align-items: center;
  justify-content: left;
}

.checkbox-container {
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
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
  font-size: 30px;
  padding: 10px;
}

.filter-heading {
  color: var(--main-text-color);
  margin-bottom: 20px;
  font-size: 50px;
}

#filter-heading {
  margin-top: 80px;
}

.sort-btn .cta-btn {
  margin-top: 20px;
  width: 190px;
  height: 40px;
  /* padding: 0; */
  font-size: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
}

/* Media queries */
@media (max-width: 1650px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1125px) {
  .container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>