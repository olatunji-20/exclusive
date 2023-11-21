<template>
    <NavBar />
    <!-- <h1>{{ searchedProduct }}</h1> -->
    <ProductDetail :productInfo="productStore.allProduct" />
    <RelatedItem topic="Related Items" />
    <FootBar />
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue';
  import ProductDetail from '../components/ProductDetail.vue';
  import RelatedItem from '../components/RelatedItem.vue';
  import FootBar from '../components/FootBar.vue';
  
  import { useRoute } from 'vue-router';
  // import { ref } from 'vue';
  import { useProductStore } from '../stores/productStore';
  
  export default {
      name: 'AllProductPage',
      setup() {
        const productStore = useProductStore();
        
        return {
            productStore
          }
  
      },
      async created() {
        const route = useRoute();

        const productStore = useProductStore();
        productStore.getAllProduct(route.params.id)
      },
      components: {
          NavBar,
          ProductDetail,
          RelatedItem,
          FootBar
      }
  }
  </script>
  
  <style>
  
  </style>