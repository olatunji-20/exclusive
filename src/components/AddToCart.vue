<template>
  <div @click="cartStore.addToCart({ product, quantity })" class="www">
    ADD TO CART
  </div>
</template>

<script>
import { useCartStore } from "../stores/cartStore";

export default {
  name: "AddToCart",
  setup() {
    const cartStore = useCartStore();

    return {
      cartStore,
    };
  },
  props: {
    quantity: Number,
    product: Object,
  },
};
</script>

<style scoped>
.www {
  background: #db4444;
  border-radius: 0.25rem;
  color: white;
  width: 100%;
  padding: 0.5rem 0.375rem;
  text-align: center;
  cursor: pointer;
}
.www:hover {
  background: #e07575;
}
</style>