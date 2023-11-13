import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
    state: () => {
        return {
            cartItems: []
        }
    },
    actions: {
        addToCart(payload) {
            console.log("lala", payload.quantity)
            console.log("lalawq", payload.product.productName)
        }
    }
})