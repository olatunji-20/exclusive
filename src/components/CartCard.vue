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
    /* border: 1px solid brown; */
    width: 30px;
    height: 30px;
    text-align: center;
    padding-top: 6px;
    border-radius: 50%;
    position: relative;
    left: 10px;
    bottom: 65px;
    background: #00ff66;
}
</style>