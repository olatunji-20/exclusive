<template>
    <NavBar />
    <div class="large">
        <h1>BILLING DETAILS</h1>
        <div class="standard">
            <div class="form">
                <CheckoutForm />
            </div>
            <div class="cart2">
                <Cart2 />
            </div>
        </div>
    </div>
    <FootBar />
  </template>
  
  <script>
  import FootBar from '../components/FootBar.vue';
  import CheckoutForm from '../components/CheckoutForm.vue';
  import Cart2 from '../components/Cart2.vue'
  import NavBar from '../components/NavBar.vue';
  
  export default {
      name: 'Checkout',
      components: {
          NavBar,
          CheckoutForm,
          Cart2,
          FootBar
      }
  }
  </script>
  
  <style scoped>
  .large {
    border: 5px solid blue;
    width: 100%;
    height: auto;
    padding: 50px;
  }
  .standard {
    border: 4px solid green;
    width: 100%;
    height: auto;
    margin: 40px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .form {
    border: 4px solid red;
    width: 500px;
    height: auto;
    /* padding: 20px 0px; */
  }
  .cart2 {
    border: 2px solid blue;
    width: 450px;
    height: auto;
  }
  </style>