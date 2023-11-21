<template>
  <div class="flash">
    <Card :link="'/best-product-page/'" :displayProducts="productStore.bestProducts" />
  </div>
</template>

<script>
import { useProductStore } from '../stores/productStore';
import Card from './Card.vue';

export default {
    name: 'BestSelling',
    setup() {
      const productStore = useProductStore();
      productStore.getBestProducts();

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
    border: 2px solid purple;
    width: 3000px;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

}
</style>