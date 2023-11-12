<template>
    <NavBar />
    <h1>ABOUT PAGE</h1>
    <FootBar />
  </template>
  
  <script>
  import FootBar from '../components/FootBar.vue';
  import NavBar from '../components/NavBar.vue';
  
  export default {
      name: 'About',
      components: {
          NavBar,
          FootBar
      }
  }
  </script>
  
  <style scoped>
  h1 {
      margin: 200px;
  }
  </style>