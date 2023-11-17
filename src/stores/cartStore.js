import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
    state: () => {
        return {
            cartItems: []
        }
    },
    actions: {
        addToCart(payload) {
            const existingItem = this.cartItems.find(item => {
                return item.id === payload.product.id
            })

            if(existingItem) {
                let existingItemIndex = this.cartItems.findIndex(
                    item => item.productName === existingItem.productName
                )
                this.cartItems[existingItemIndex] = existingItem
                existingItem.quantity = existingItem.quantity + payload.quantity
            } else {
                this.cartItems.push({
                    id: payload.product.id,
                    productName: payload.product.productName,
                    price: payload.product.price,
                    rating: payload.product.rating,
                    productImage: payload.product.productImage,
                    discount: payload.product.discount,
                    quantity: payload.quantity
                })
            }
            
            console.log("lala", payload.quantity)
            console.log("lalawq", payload.product.productName)
        }
    }
})