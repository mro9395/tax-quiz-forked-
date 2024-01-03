<template>
  <div class="results">
    <h2>Don't leave money on the table</h2>
    <h3>
      Congratulations! You might be eligible for the following breaks and
      deductions:
    </h3>

    <div class="boxes">
      <!-- Use v-if directive to conditionally render each box -->
      <div v-if="answers[0].response" class="box">
        Lifetime Learning Credit<br />
        <p class="value">~$ 2,000</p>
      </div>
      <div v-if="answers[1].response" class="box">
        Chid Tax Credit<br />
        <p class="value">~$ 2,000 per child</p>
      </div>
      <div v-if="answers[2].response" class="box">
        Student Loan Interest Deduction <br />
        <p class="value">~$ 2,500</p>
      </div>
      <div v-if="answers[3].response" class="box">
        <div>Medical Expenses Deduction</div>
        <div class="value">Varies</div>
      </div>
      <div v-if="answers[4].response" class="box">
        IRA, 401(k) or 403(b) Deductions<br />
        <p class="value">From $6,500 to $22,500</p>
      </div>
      <div v-if="answers[5].response" class="box">
        Charitable Donation Deduction<br />
        <p class="value">Varies</p>
      </div>
      <div v-if="answers[6].response" class="box">
        Electric Vehicle Tax Credit<br />
        <p class="value">~$ 7,500</p>
      </div>
    </div>
  </div>
</template>

<script>
// console.log("Results ans", answers);

export default {
  props: {
    answers: Array,
  },
};
</script>

<style>
/* Your styles here */
.results {
  width: 100%;
  padding: 0;
  margin: 0;
}

.boxes {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  /* grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); */
  gap: 20px;
  /* padding: 1%; */
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  margin: 0;
  /* background-color: #f0f0f0; */
}

.box {
  width: 100%;
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  border-radius: 10px;
  flex-direction: column;
}

/* Unique background colors for each box */
.box:nth-child(1) {
  background-color: #0075a2;
}
.box:nth-child(2) {
  background-color: #0075a2;
}
.box:nth-child(3) {
  background-color: #0075a2;
}
.box:nth-child(4) {
  background-color: #0075a2;
}
.box:nth-child(5) {
  background-color: #0075a2;
}
.box:nth-child(6) {
  background-color: #0075a2;
}
.box:nth-child(7) {
  background-color: #0075a2;
}

.value {
  font-style: italic;
  display: block;
  margin-top: 10px;
}
</style>
