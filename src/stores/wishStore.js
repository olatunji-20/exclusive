import { defineStore } from 'pinia';

export const useWishStore = defineStore('wishStore', {
    state: () => {
        return {
            wishItems: []
        }
    },
    actions: {
        addToWish(payload) {
            // console.log("ASASAS", payload.product)
            const existingItem = this.wishItems.find(item => {
                return item.id === payload.product.id
            })

            if(existingItem) {
                console.log("ALREADY THERE");
                this.wishItems = this.wishItems.filter(c => c.id !== existingItem.id);
            } else {
                this.wishItems.push({
                    id: payload.product.id,
                    productName: payload.product.productName,
                    price: payload.product.price,
                    rating: payload.product.rating,
                    productImage: payload.product.productImage,
                    discount: payload.product.discount,
                    quantity: payload.quantity
                });
                console.log("first time")
            }
            
            console.log("lala", payload.quantity)
            console.log("lalawq", payload.product.productName)
        }
    }



});