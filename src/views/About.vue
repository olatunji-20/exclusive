<template>
    <NavBar />
    <div class="about">
        <div class="story1">
            <h1>Our Story</h1>
            <p>Launched in 2015, Exclusive is South Asia's premier online shopping marketplace with an active presence in Bangladesh.
                Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sellers and 300 brands
                and serves 3 million customers across the region.
            </p>
            <p>Exclusive has more than 1 million products to offer, growing at a very fast pace. Exclusive offers a diverse assortment in 
                categories ranging from consumers.
            </p>
        </div>
        <div class="story">
            <img src="/img/side.png" alt="about-image" class="p-img">
        </div>

    </div>
    <h1>ABOUT PAGE</h1>
    <Value />
    <FootBar />
  </template>
  
  <script>
  import FootBar from '../components/FootBar.vue';
  import Value from '../components/Value.vue';
  import NavBar from '../components/NavBar.vue';
  
  export default {
      name: 'About',
      components: {
          NavBar,
          Value,
          FootBar
      }
  }
  </script>
  
  <style scoped>
  .about {
    border: 4px solid fuchsia;
    width: 100%;
    height: auto;
    padding: 50px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .story1 {
    border: 3px solid blue;
    width: 450px;
    height: 500px;
    text-align: left;
    padding: 40px 0px;
  }
  .story {
    border: 3px solid blue;
    width: 500px;
    height: 500px;
    text-align: left;
  }
  .story1 h1 {
    font-size: 60px;
  }
  .p-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  </style>