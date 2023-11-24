<template>
  <Preloader v-if="productStore.isLoading" />
  <!-- <div v-else class="slide"> -->
    <div class="flash">
      <Card :link="'/product-page/'" :displayProducts="productStore.flashProducts" />
    </div>
  <!-- </div> -->
</template>

<script>
import { useProductStore } from '../stores/productStore';
import Card from './Card.vue'
import Preloader from './Preloader.vue'

export default {
    name: 'FlashSales',
    setup() {
      const productStore = useProductStore();
      productStore.getFlashProducts();

      return {
        productStore
      }
    },
    components: {
      Card,
      Preloader
    }
}
</script>

<style scoped>
.flash {
    /* border: 4px solid purple; */
    width: 3000px;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    /* overflow: auto; */
}
.slide {
  border: 4px solid red;
  height: auto;
  width: 100%;
  overflow: auto;
}
</style>