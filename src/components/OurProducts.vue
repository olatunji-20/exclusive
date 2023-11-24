<template>
    <div class="categories">
      <h1>Our Products</h1>
      <h2>Explore Our Products</h2>
      <div class="sales">
        <Explore />
      </div>
      <div class="view">
        <router-link to="/all-products">
          <button>View All Products</button>
        </router-link>
      </div>
      
    </div>
  </template>
  
  <script>
  import Explore from './Explore.vue';

  export default {
      name: "OurProducts",
      setup() {
  
      },
      components: {
        Explore
      }
  
  }
  </script>
  
  <style scoped>
  .categories {
      /* border: 3px solid blue; */
      width: 100%;
      height: auto;
      padding: 80px 100px;
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
  .sales {
    /* border: 6px solid green; */
    width: 100%;
    height: auto;
    margin: 30px auto;
  }
  .view {
    /* border: 1px solid blue; */
    width: 250px;
    height: 50px;
    text-align: center;
    margin: 10px auto;
  }
  button {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background: #DB4444;
    color: white;
    border: 0px;
    border-radius: 4px;
  }
  button:hover {
    background: #E07575;
  }

  @media screen and (max-width: 768px) {
    .categories {
      padding: 50px 8px;
    }
    h2 {
      font-size: 35px;
    }
    .sales {
      overflow: auto;
    }








  }



  </style>