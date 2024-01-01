<template>
  <div>
    <h2>Results</h2>
    <h3>
      Congratulations! You might be eligible for the following breaks and
      deductions:
    </h3>
    <ul>
      <li v-for="(answer, index) in answers" :key="index">
        {{ answer.question }}: {{ answer.response ? "Yes" : "No" }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    answers: Array,
  },
};
</script>

<style>
/* Your styles here */
</style>
