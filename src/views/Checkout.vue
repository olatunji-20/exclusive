<template>
    <NavBar />
    <h1>CHECKOUT PAGE</h1>
    <div class="large">
        <h1>BILLING DETAILS</h1>
    </div>
    <FootBar />
  </template>
  
  <script>
  import FootBar from '../components/FootBar.vue';
  import NavBar from '../components/NavBar.vue';
  
  export default {
      name: 'Checkout',
      components: {
          NavBar,
          FootBar
      }
  }
  </script>
  
  <style scoped>
  .large {
    border: 5px solid blue;
    width: 100%;
    height: 500px;
    padding: 50px;
  }
  </style>