<template>
    <div class="categories">
      <h1>This Month</h1>
      <h2>Best Selling Products</h2>
      <div class="dir">View All</div>
      <div class="sales">
        <BestSelling />
      </div>
      
    </div>
  </template>
  
  <script>
  import BestSelling from './BestSelling.vue';

  export default {
      name: "Month",
      setup() {
  
      },
      components: {
        BestSelling
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
  .dir {
    border: 1px solid firebrick;
    width: 120px;
    padding: 15px;
    text-align: center;
    float: right;
  }
  .sales {
    border: 3px solid green;
    width: 100%;
    height: auto;
    margin: 30px auto;
  }  
  </style>