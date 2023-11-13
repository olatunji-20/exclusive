<template>
  <div class="border">
    <h1>ifjijifjiCART</h1>
    <h4 v-for="(product) in cartStore.cartItems" :key="product.id">{{ product.productImage }}</h4>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';

export default {
    name: 'Cart',
    setup() {
        const cartStore = useCartStore();
        return {
            cartStore
        }
    }

}
</script>

<style>
.border {
    border: 4px solid red;
    width: 500px;
    height: 700px;
}
</style>