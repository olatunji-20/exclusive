<template>
    <div @click="cartStore.removeCart(product.id)" class="www">
        <i class="material-symbols-outlined">delete</i>
    </div>
  </template>
  
  <script>
  import { useCartStore } from '../stores/cartStore'
  
  export default {
      name: 'RemoveCart',
      setup() {
          const cartStore = useCartStore();
          
          return {
              cartStore
          }
      },
      props: {
        //   quantity: Number,
          product: Object
      }
  
  }
  </script>
  
  <style scoped>
  .www {
      /* border: 1px solid yellow; */
      /* background: red; */
      color: red;
      border-radius: 4px;
      width: 100%;
      height: 100%;
      padding: 15px 0px;
      text-align: center;
      cursor: pointer;
  }
  .www:hover {
    background: #CCCCCC;
  }
  </style>