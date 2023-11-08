<template>
    <div class="categories">
      <h1>Today's</h1>
      <h2>Flash Sales</h2>
      <div class="time"></div>
      <div class="sales">
        <FlashSales />
      </div>
      <div class="view"><p>View All Products</p></div>
      
    </div>
  </template>
  
  <script>
  import FlashSales from './FlashSales.vue'

  export default {
      name: "Todays",
      setup() {
  
      },
      components: {
        FlashSales
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
      font-size: 40px;
      display: inline;
  }
  .time {
    border: 1px solid red;
    width: 350px;
    height: 60px;
    display: inline-block;
    margin-left: 100px;
  }
  .sales {
    border: 3px solid green;
    width: 100%;
    height: 360px;
    margin: 30px auto;
  }
  .view {
    border: 1px solid blue;
    width: 250px;
    height: auto;
    text-align: center;
    margin: 10px auto;

  }
  
  </style>