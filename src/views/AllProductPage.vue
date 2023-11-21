<template>
    <NavBar />
    <!-- <h1>{{ searchedProduct }}</h1> -->
    <ProductDetail :productInfo="searchedProduct" />
    <RelatedItem topic="Related Items" />
    <FootBar />
  </template>
  
  <script>
  import NavBar from '../components/NavBar.vue';
  import ProductDetail from '../components/ProductDetail.vue';
  import RelatedItem from '../components/RelatedItem.vue';
  import FootBar from '../components/FootBar.vue';
  
  import { useRoute } from 'vue-router';
  import { ref } from 'vue';
  import { useProductStore } from '../stores/productStore';
  
  export default {
      name: 'AllProductPage',
      setup() {
        
        return {
            searchedProduct: {}
          }
  
      },
      async created() {
        const route = useRoute();

        const productStore = useProductStore();
        productStore.getBestProducts();
        productStore.getFlashProducts();
  
        const allProducts = productStore.bestProducts.concat(productStore.flashProducts)
        this.searchedProduct = allProducts.find((product) => product.id == route.params.id)
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