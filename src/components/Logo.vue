<!-- Logo.vue -->
<template>
  <div class="logo">
    <div class="name-and-link">
      <div class="company-name">Last Minute Tax</div>
      <a
        class="pricing-link"
        href="https://calendly.com/mauio/shortcall"
        target="_blank"
        >Pricing</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Logo",
};
</script>

<style scoped>
.logo {
  width: 100%;
  display: block;
  padding: 10px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
}

.name-and-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.company-name {
  font-size: 20px;
  font-weight: bold;
  color: #333;
}

.pricing-link {
  text-decoration: none;
  color: #3498db;
  font-size: 16px;
}
</style>
