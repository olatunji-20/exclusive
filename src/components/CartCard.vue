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
    position: relative;
    left: 15px;
    bottom: 65px;
    background: powderblue;
}
</style>