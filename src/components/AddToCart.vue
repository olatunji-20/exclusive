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
    /* border: 0px solid purple; */
    background: #DB4444;
    border-radius: 4px;
    color: white;
    width: 100%;
    padding: 8px 6px;
    text-align: center;
    cursor: pointer;
}
.www:hover {
    background: #E07575;
}
</style>