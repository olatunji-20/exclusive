<template>
    <div class="categories">
      <h1>This Month</h1>
      <h2>Best Selling Products</h2>
      <div class="dir">        
        <router-link to="/all-products">
          <button>View All</button>
        </router-link>
      </div>
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
      /* border: 3px solid blue; */
      width: 100%;
      height: auto;
      padding: 50px;
  }
  h1 {
      border-left: 20px solid #DB4444;
      width: auto;
      height: 60px;
      padding: 15px;
  }
  h2 {
      font-size: 40px;
      display: inline;
  }
  .dir {
    /* border: 3px solid firebrick; */
    width: 120px;
    height: 50px;
    text-align: center;
    /* background: pink; */
    float: right;
  }
  button {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: 0px;
    background: #DB4444;
    color: white;
    border-radius: 4px;
  }
  button:hover {
    background: #E07575;
  }
  .sales {
    /* border: 3px solid green; */
    width: 100%;
    height: auto;
    margin: 30px auto;
    overflow: auto;
  }


  @media screen and (max-width: 768px) {
    .categories {
      padding: 20px 5px;
      position: relative;
    }
    h2 {
      font-size: 35px;
    }
    .dir {
      position: absolute;
      bottom: 0;
      right: calc(50% - 60px);
      margin-top: 120px;
    }





  }


  </style>