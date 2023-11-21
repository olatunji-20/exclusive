<template>
    <div class="flash">
      <Card :link="'/all-product-page/'" :displayProducts="slicedProducts" />
    </div>
  </template>
  
  <script>
  import { useProductStore } from '../stores/productStore';
  import Card from './Card.vue';
  import { computed } from 'vue';

  export default {
      name: 'Explore',
      setup() {
        const productStore = useProductStore();
        productStore.getAllProducts();

        const slicedProducts = computed(() => {
          return productStore.allProducts.sort(() => 0.5 - Math.random()).slice(0, 10);
        })
      return {
        productStore,
        slicedProducts
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