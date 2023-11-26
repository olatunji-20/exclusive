<template>
  <div class="all-p">
    <Card :link="'/all-product-page/'" :displayProducts="allProducts" />
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "All",
  setup() {},
  components: { Card },
  props: {
    allProducts: Array,
  },
};
</script>

<style scoped>
.all-p {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

@media screen and (max-width: 768px) {
  .all-p {
    height: 48.125rem;
    width: 100%;
  }
}
</style>