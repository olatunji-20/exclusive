<template>
  <Preloader v-if="productStore.isLoading" />
  <div v-else class="flash">
    <Card
      :link="'/best-product-page/'"
      :displayProducts="productStore.bestProducts"
    />
  </div>
</template>

<script>
import { useProductStore } from "../stores/productStore";
import Card from "./Card.vue";
import Preloader from "./Preloader.vue";

export default {
  name: "BestSelling",
  setup() {
    const productStore = useProductStore();
    productStore.getBestProducts();

    return {
      productStore,
    };
  },
  components: {
    Card,
    Preloader,
  },
};
</script>

<style scoped>
.flash {
  width: 187.5rem;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
</style>