<!-- App.vue -->
<template>
  <div id="app">
    <Logo />
    <Questions @answersSubmitted="receiveAnswers" />
    <Results />
    <!-- <Results v-if="questionsSubmitted" :answers="recordedAnswers" /> -->
    <footer>
      <p>
        This advice is for informational purposes only and does not replace
        professional tax or legal advisory.
        <!-- Consult with a qualified tax professional for personalized advice. -->
      </p>
    </footer>
  </div>
</template>

<script>
import Logo from "./components/Logo.vue";
import Questions from "./components/Questions.vue";
import Results from "./components/Results.vue";

export default {
  components: {
    Logo,
    Questions,
    Results,
  },
  data() {
    return {
      recordedAnswers: [], // Array to store answers
      questionsSubmitted: false, // Flag to check if questions are submitted
    };
  },
  methods: {
    receiveAnswers(answers) {
      // Receive all answers from the Questions component
      this.recordedAnswers = answers;
      this.questionsSubmitted = true;
      console.log("Answers", this.recordedAnswers);
    },
  },
};
</script>

<style>
#app {
  width: 99%;
  min-height: 100vh; /* Ensure the container takes at least the full height of the viewport */
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  align-items: flex-start; /* Align items to the start (top) of the container */
  justify-content: flex-start; /* Align content to the start (top) of the container */
}

footer {
  margin-top: auto; /* Push the footer to the bottom */
  width: 100%;
  padding: 10px;
  /* background-color: #f0f0f0; */
  border-top: 1px solid #ccc;
  margin-top: 20vh; /* 10% of the viewport height */
}

footer p {
  font-size: 14px;
  color: #666;
  margin: 0;
}
</style>
