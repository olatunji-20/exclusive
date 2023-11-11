<template>
  <div class="flash">
    <Card :displayProducts="productStore.products" />
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore';
import Card from './Card.vue'

export default {
    name: 'FlashSales',
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
    border: 4px solid purple;
    width: 3000px;
    height: 370px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

}
.card {
    border: 2px solid red;
    width: 250px;
    height: 360px;
}
</style>