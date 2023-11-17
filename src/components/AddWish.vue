<template>
    <div @click="wishStore.addToWish(product)" class="www">W</div>
  </template>
  
  <script>
  import { useWishStore } from '../stores/wishStore'
  
  export default {
      name: 'AddWish',
      setup() {
          const wishStore = useWishStore();
          
          return {
              wishStore
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
      border: 3px solid purple;
      background: darkcyan;
      width: 100%;
      height: 100%;
      text-align: center;
      cursor: pointer;
  }
  </style>