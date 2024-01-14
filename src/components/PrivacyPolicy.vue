<template>
  <div>
    <h2>Pricing Page</h2>

    <!-- Free Tier Box -->
    <div
      class="pricing-box free-tier"
      @mouseover="moveBox($event)"
      @mouseout="resetBox($event)"
    >
      <h3>Free Tier</h3>
      <p>Explore basic features for free.</p>
    </div>

    <!-- Paid Tier Box -->
    <div
      class="pricing-box paid-tier"
      @mouseover="moveBox($event)"
      @mouseout="resetBox($event)"
    >
      <h3>Paid Tier ($20)</h3>
      <p>Unlock premium features for $20/month.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    moveBox(event) {
      // Move the box by adding a CSS class
      event.target.classList.add("hovered");
    },
    resetBox(event) {
      // Reset the box position by removing the CSS class
      event.target.classList.remove("hovered");
    },
  },
};
</script>

<style scoped>
/* Your styling for the pricing page */
.pricing-box {
  width: 200px;
  height: 150px;
  border: 1px solid #ccc;
  margin: 10px;
  padding: 20px;
  transition: transform 0.3s ease;
}

.pricing-box h3 {
  margin-bottom: 10px;
}

.free-tier {
  background-color: #b3e0ff;
}

.paid-tier {
  background-color: #ffcccb;
}

/* Apply a transformation when the box is hovered */
.pricing-box.hovered {
  transform: translateY(-10px);
}
</style>
