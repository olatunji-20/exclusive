<template>
  <Preloader v-if="productStore.isLoading" />
  <div v-else class="flash">
    <Card :link="'/all-product-page/'" :displayProducts="slicedProducts" />
  </div>
</template>
  
  <script>
import { useProductStore } from "../stores/productStore";
import Card from "./Card.vue";
import { computed } from "vue";
import Preloader from "./Preloader.vue";

export default {
  name: "Explore",
  setup() {
    const productStore = useProductStore();
    productStore.getAllProducts();

    const slicedProducts = computed(() => {
      return productStore.allProducts
        .sort(() => 0.5 - Math.random())
        .slice(0, 8);
    });
    return {
      productStore,
      slicedProducts,
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
  width: 100%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .flash {
    height: 46.875rem;
    width: 100%;
    justify-content: space-between;
  }
}
</style>