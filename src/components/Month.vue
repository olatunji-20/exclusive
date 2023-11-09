<template>
    <div class="categories">
      <h1>This Month</h1>
      <h2>Best Selling Products</h2>
      <div class="sales">
        <FlashSales />
      </div>
      
    </div>
  </template>
  
  <script>
  import FlashSales from './FlashSales.vue'

  export default {
      name: "Month",
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
  .sales {
    border: 3px solid green;
    width: 100%;
    height: auto;
    margin: 30px auto;
  }  
  </style>