<!-- Logo.vue -->
<template>
  <div class="logo">
    <div class="name-and-link">
      <div class="company-name">
        <img
          src="\src\assets\LMT_logo2.png"
          alt="Icon description"
          style="width: 20px; height: 20px"
        />
        <!-- Replace "path/to/your/icon.png" with the actual path to your image -->

        <router-link to="/" class="company-name">LastMinuteTaxes</router-link>

        <!-- <a class="alink" href="/">LastMinuteTaxes</a> -->
      </div>
      <!-- <router-link to="/home" class="company-name">LastMinuteTaxes</router-link> -->
      <div class="pricing-link">
        <router-link to="/pricing" class="pricing-link">PRICING</router-link>
        <a class="alink" href="https://calendly.com/mauio/shortcall">
          CONTACT US
        </a>
      </div>
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
  font-family:
    Open Sans,
    Lato,
    Avenir,
    Helvetica,
    Arial,
    sans-serif;
  color: white;
}

.pricing-link {
  /* display: flex; */
  justify-content: space-between;
  text-decoration: none;
  color: white;
  padding: 0px;
  font-size: 16px;
}
.alink {
  color: white;
  padding: 10px;
}
</style>
