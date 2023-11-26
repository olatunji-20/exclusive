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
    width: 1.875rem;
    height: 1.875rem;
    text-align: center;
    padding-top: 0.375rem;
    border-radius: 50%;
    position: relative;
    left: 0.625rem;
    bottom: 4.0625rem;
    background: #00ff66;
}
</style>