<template>
    <div class="categories">
      <h1>Featured</h1>
      <h2>New Arrival</h2>
      <div class="new"></div>
    </div>
  </template>
  
  <script>
  export default {
      name: "NewArrival",
      setup() {
  
      }
  
  }
  </script>
  
  <style scoped>
  .categories {
      border: 3px solid blue;
      width: 100%;
      height: auto;
      padding: 50px;
  }
  h1 {
      border-left: 20px solid blue;
      width: auto;
      height: 60px;
      padding: 15px;
  }
  h2 {
      font-size: 45px;
  }
  .new {
    border: 4px solid red;
    width: 100%;
    height: 600px;
  }
  </style>