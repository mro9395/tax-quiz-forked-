<template>
  <div>
    <div v-if="!questionsSubmitted">
      <div class="intro">
        <h2>Learn if you are eligible for tax credits or deductions</h2>
        <p>
          In America, income is earned through various sources such as
          employment and investments. Taxes are imposed at federal, state, and
          local levels, including income, payroll, and sales taxes. Deductions,
          like loan interest and charitable contributions, can reduce taxable
          income. Understanding these components is crucial for individuals and
          businesses to navigate the complex U.S. tax system efficiently.
        </p>
      </div>
      <h2>{{ question }}</h2>
      <div>
        <button @click="answerQuestion(true)">Yes</button>
        <button @click="answerQuestion(false)">No</button>
      </div>
    </div>

    <!-- Display results when all questions are answered -->
    <Results v-if="allQuestionsAnswered" :answers="answers" />
  </div>
</template>

<script>
import Results from "./Results.vue"; // Import the Results component

export default {
  data() {
    return {
      questions: [
        "Were you enrolled in an educational institution in 2023?",
        "Do you have kids under 17?",
        "Do you have a student loan?",
        "Did you have a significant medical expense in 2023?",
        "Did you contribute to IRA, 401(k) or 403(b) in 2023?",
        "Did you donate any amount to charity?",
        "Are you using clean energy (solar panels or EVs)?",
      ],
      currentQuestionIndex: 0,
      answers: [],
      questionsSubmitted: false, // Flag to track whether questions have been submitted
    };
  },
  computed: {
    question() {
      return this.questions[this.currentQuestionIndex];
    },
    allQuestionsAnswered() {
      return this.currentQuestionIndex === this.questions.length;
    },
  },
  methods: {
    answerQuestion(response) {
      this.answers.push({ question: this.question, response });
      this.nextQuestion();
    },
    nextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        this.questionsSubmitted = true;
        this.$emit("answersSubmitted", this.answers);
        // alert("Thanks for answering all the questions!");
        // alert(this.answers);
        console.log("Answers:", this.answers);
        // You can now process the answers as needed.
      }
    },
  },
};
</script>

<style>
h2 {
  margin-bottom: 20px;
}

button {
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 10px;
}

div {
  display: block;
  /* background-color: #f1f4f8; */
}

.intro {
  text-align: left;
  padding: 10px;
}
</style>
