import { defineStore } from 'pinia';

export const useWishStore = defineStore('wishStore', {
    state: () => {
        return {
            wishItems: []
        }
    },
    actions: {
        addToWish(product) {
            console.log("ASASAS", product)
            // const existingItem = this.wishItems.find(item => {
            //     return item.id === payload.product.id
            // })

            // if(existingItem) {
            //     let existingItemIndex = this.wishItems.findIndex(
            //         item => item.productName === existingItem.productName
            //     )
            //     this.wishItems[existingItemIndex] = existingItem
            //     existingItem.quantity = existingItem.quantity + payload.quantity
            // } else {
            //     this.wishItems.push({
            //         id: payload.product.id,
            //         productName: payload.product.productName,
            //         price: payload.product.price,
            //         rating: payload.product.rating,
            //         productImage: payload.product.productImage,
            //         discount: payload.product.discount,
            //         quantity: payload.quantity
            //     })
            // }
            
            // console.log("lala", payload.quantity)
            // console.log("lalawq", payload.product.productName)
        }
    }
})