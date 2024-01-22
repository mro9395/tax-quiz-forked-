<template>
  <div class="results">
    <h2>Don't leave money on the table!</h2>
    <h3>
      Congratulations! You might be eligible for the following breaks and
      deductions:
    </h3>
    <div class="ammounts">
      <div><b>Estimated Credits:</b> ${{ totalSumC }}*</div>
      <div><b>Estimated Deductions:</b> ${{ totalSumD }}*</div>
      <!-- <div>If your AGI is 60,000, your final</div> -->
    </div>
    <div class="boxes">
      <!-- Use v-if directive to conditionally render each box -->
      <a
        href="https://www.nerdwallet.com/article/loans/student-loans/education-tax-credits"
      >
        <div v-if="answers[0].response" class="box">
          Lifetime Learning Credit
          <br />
          <p class="value">~$ 2,000</p>
        </div></a
      >
      <a
        href="https://www.nerdwallet.com/article/taxes/qualify-child-child-care-tax-credit"
      >
        <div v-if="answers[1].response" class="box">
          Child Tax Credit<br />
          <p class="value">~$ 2,000 per child</p>
        </div></a
      >
      <a
        href="https://www.nerdwallet.com/article/loans/student-loans/8-student-faqs-taxes/"
      >
        <div v-if="answers[2].response" class="box">
          Student Loan Interest Deduction <br />
          <p class="value">~$ 2,500</p>
        </div></a
      >
      <a
        href="https://www.nerdwallet.com/blog/taxes/how-does-medical-expenses-tax-deduction-work/"
        ><div v-if="answers[3].response" class="box">
          <div>Medical Expenses Deduction</div>
          <div class="value">Varies</div>
        </div></a
      >
      <a href="https://www.nerdwallet.com/article/ira-contribution-limits"
        ><div v-if="answers[4].response" class="box">
          IRA, 401(k) or 403(b) Deductions<br />
          <p class="value">From $6,500 to $22,500</p>
        </div></a
      >
      <a
        href="https://www.nerdwallet.com/blog/taxes/get-charitable-contribution-tax-deduction-3-steps/"
        ><div v-if="answers[5].response" class="box">
          Charitable Donation Deduction<br />
          <p class="value">Varies</p>
        </div></a
      >
      <a
        href="https://www.nerdwallet.com/article/taxes/ev-tax-credit-electric-vehicle-tax-credit/"
        ><div v-if="answers[6].response" class="box">
          Electric Vehicle Tax Credit<br />
          <p class="value">~$ 7,500</p>
        </div></a
      >
    </div>
    <p style="text-align: left; font-size: 10px; padding: 5px">
      *The amount varies depending on specific situations like number of
      children, retirement fund contribution, etc.
    </p>
  </div>
</template>

<script>
// console.log("Results ans", answers);

// export default {
//   props: {
//     answers: Array,
//   },
// };

export default {
  data() {
    return {
      answers: [
        { response: true },
        { response: true },
        { response: true },
        { response: true },
        { response: true },
        { response: true },
        { response: true },
      ],
      valuesC: [2000, 2000, 0, 0, 0, 0, 7500], // Array to store the values of each box
      valuesD: [0, 0, 2500, 0, 6500, 0, 0],
    };
  },
  computed: {
    totalSumC() {
      // Calculate the sum using reduce on the values array
      return this.valuesC
        .reduce((sum, value) => sum + value, 0)
        .toLocaleString("en-US");
    },
    totalSumD() {
      return this.valuesD
        .reduce((sum, value) => sum + value, 0)
        .toLocaleString("en-US");
    },
  },
  // methods: {
  //   updateSum(index) {
  //     // Extract the numeric value from the box's content and update the values array
  //     const value = parseFloat(event.target.innerText.match(/\d+/)) || 0;
  //     this.$set(this.values, index, value);
  //   },
  // },
};
</script>

<style>
/* Your styles here */
.ammounts {
  text-align: left;
  padding: 10px;
}

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
