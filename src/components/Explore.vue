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
      border: 4px solid yellowgreen;
      width: 100%;
      height: 100%;
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