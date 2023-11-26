<template>
  <div class="categories">
    <h1>{{ topic }}</h1>
    <div class="related">
      <div class="related-card">
        <Card :link="'/all-product-page/'" :displayProducts="relatedItems" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useProductStore } from "../stores/productStore";
import Card from "./Card.vue";

export default {
  name: "RelatedItem",
  setup() {
    const productStore = useProductStore();
    productStore.getAllProducts();

    const relatedItems = computed(() => {
      const randomProducts = productStore.allProducts.sort(
        () => 0.5 - Math.random()
      );
      return randomProducts.slice(0, 4);
    });
    return {
      relatedItems,
    };
  },
  components: { Card },
  props: {
    topic: String,
  },
};
</script>

<style scoped>
.categories {
  width: 100%;
  height: auto;
  padding: 3.125rem;
}
h1 {
  border-left: 1.25rem solid #db4444;
  width: auto;
  height: 3.75rem;
  padding: 0.9375rem;
}
.related {
  width: 100%;
  height: auto;
  margin: 3.125rem auto;
}
.related-card {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .categories {
    padding: 3.125rem 0.5rem;
  }
  .related {
    overflow: auto;
  }
  .related-card {
    width: 75rem;
  }
}
</style>