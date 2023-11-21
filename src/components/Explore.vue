<template>
    <div class="flash">
      <Card :link="'/all-product-page/'" :displayProducts="productStore.bestProducts.concat(productStore.flashProducts)
      .sort(() => 0.5 - Math.random()).slice(0,10)" />
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/productStore';
  import Card from './Card.vue';

  export default {
      name: 'Explore',
      setup() {
      const productStore = useProductStore();
      productStore.getBestProducts();
      productStore.getFlashProducts();

      return {
        productStore,
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
  </style>