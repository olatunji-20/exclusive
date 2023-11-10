<template>
    <div class="flash">
      <Card :displayProducts="productStore.products" />
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/productStore';
  import Card from './Card.vue';

  export default {
      name: 'Explore',
      setup() {
      const productStore = useProductStore();
      productStore.getProducts();

      return {
        productStore
      }
    },
    components: {
       Card
    }
  }
  </script>
  
  <style scoped>
  .flash {
      border: 4px solid yellowgreen;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
  
  }
  .card {
      border: 2px solid red;
      width: 250px;
      height: 360px;
  }
  </style>