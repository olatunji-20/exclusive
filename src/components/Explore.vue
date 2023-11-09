<template>
    <div class="flash">
      <Card />
      <h1>explore</h1>
    </div>
  </template>
  
  <script>
  import Card from './Card.vue'
  export default {
      name: 'Explore',
      components: {
        Card
      }
  }
  </script>
  
  <style scoped>
  .flash {
      border: 2px solid purple;
      width: 950px;
      height: 360px;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
  
  }
  .card {
      border: 2px solid red;
      width: 250px;
      height: 360px;
  }
  </style>