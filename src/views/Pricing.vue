<!-- Pricing.vue -->
<template>
  <h1>Find a plan to power your financial goals</h1>
  <div class="pricing-container">
    <div class="pricing-tier" @mouseover="startBounce" @mouseout="stopBounce">
      <h2>Free Tier</h2>
      <div class="features">
        <ul>
          <li>{{ features[0] }}</li>
          <!-- <li>{{ features[1] }}</li> -->
          <!-- <li>{{ features[2] }}</li> -->
          <!-- <li>{{ features[3] }}</li> -->
          <!-- <li>{{ features[4] }}</li> -->
        </ul>
      </div>
      <p class="price">Free</p>
    </div>

    <div class="pricing-tier" @mouseover="startBounce" @mouseout="stopBounce">
      <h2>Premium Tier</h2>
      <div class="features">
        <ul>
          <li>{{ features[0] }}</li>
          <li>{{ features[1] }}</li>
          <li>{{ features[2] }}</li>
          <!-- <li>{{ features[3] }}</li> -->
          <!-- <li>{{ features[4] }}</li> -->
        </ul>
      </div>
      <p class="price">Contact Us</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        "Interactive Quiz",
        "Monthly Newsletter",
        "Finance Spreadsheets",
        "Feature 4",
        "Feature 5",
      ],
      isBouncing: false,
    };
  },
  methods: {
    startBounce() {
      this.isBouncing = true;
    },
    stopBounce() {
      this.isBouncing = false;
    },
  },
};
</script>

<style scoped>
.pricing-container {
  display: flex;
  justify-content: space-around;
  padding: 20px;
}

.pricing-tier {
  width: 200px;
  padding: 20px;
  border: 1px solid #ddd;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  display: flex; /* Use Flexbox */

  flex-direction: column; /* Stack child elements vertically */
  align-items: center; /* Center child elements horizontally */
}

.pricing-tier:hover {
  transform: scale(1.05);
}

.features {
  margin: 15px 0;
  text-align: left;
}

.price {
  font-size: 20px;
  font-weight: bold;
  margin-top: auto; /* Push the price element to the bottom */
}

/* Bounce animation */
@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.bouncing {
  animation: bounce 1s infinite;
}
</style>
