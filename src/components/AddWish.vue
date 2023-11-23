<template>
  <div @click="wishStore.addToWish({product, quantity})" class="www">
    <i class="material-symbols-outlined">visibility</i>
  </div>
</template>
  
  <script>
  import { useWishStore } from '../stores/wishStore';
  import { ref } from 'vue'
  
  export default {
      name: 'AddWish',
      setup() {
          const wishStore = useWishStore();
          const quantity = ref(1);

          return {
              wishStore,
              quantity
          }
      },
      props: {
          product: Object,
      }
  
  }
  </script>
  
  <style scoped>
  .www {
      /* border: 1px solid purple; */
      background: #FFF;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      padding-top: 2px;
      text-align: center;
      cursor: pointer;
  }
  /* .xxx {
      border: 3px solid purple;
      background: blueviolet;
      width: 100%;
      height: 100%;
      text-align: center;
      cursor: pointer;
  } */
  </style>