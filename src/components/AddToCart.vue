<template>
  <div @click="cartStore.addToCart({ product, quantity })" class="www">ADD TO CART</div>
</template>

<script>
import { useCartStore } from '../stores/cartStore'

export default {
    name: 'AddToCart',
    setup() {
        const cartStore = useCartStore();
        
        return {
            cartStore
        }
    },
    props: {
        quantity: Number,
        product: Object
    }

}
</script>

<style scoped>
.www {
    border: 3px solid purple;
    background: yellow;
    width: 100%;
    padding: 6px;
    text-align: center;
    cursor: pointer;
}
</style>