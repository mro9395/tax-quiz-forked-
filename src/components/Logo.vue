<!-- Logo.vue -->
<template>
  <div class="logo">
    <div class="name-and-link">
      <div class="company-name">
        <a href="/" style="color: white">LastMinuteTaxes</a>
      </div>
      <a
        class="pricing-link"
        href="https://calendly.com/mauio/shortcall"
        target="_blank"
        >PRICING</a
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
  /* padding: 10px; */
  background-color: #0f1035;
  /* border-bottom: 1px solid #ccc; */
}

.name-and-link {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
/* primero ver color
falta de boton atras */
.company-name {
  font-size: 20px;
  padding: 10px;
  font-weight: bold;
  font-family: Roboto, Monserrat, Lato, Avenir, Helvetica, Arial, sans-serif;
  color: white;
}

.pricing-link {
  text-decoration: none;
  color: white;
  padding: 10px;
  font-size: 16px;
}
</style>
