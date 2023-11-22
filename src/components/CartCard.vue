<template>
    <p v-if="cartStore.cartItems.length">{{ cartStore.cartItems.length }}</p>
</template>

<script>
import { useCartStore } from '../stores/cartStore';

export default {
    name: 'CartCard',
    setup() {
        const cartStore = useCartStore();
        
        return {
            cartStore
        }
    }
}
</script>

<style scoped>
p {
    border: 2px solid brown;
    width: 30px;
    height: 30px;
    text-align: center;
    padding-top: 5px;
    border-radius: 50%;
    /* padding: 4px; */
    /* font-size: 14px; */
    position: relative;
    left: 25px;
    bottom: 30px;
    background: powderblue;
}
</style>