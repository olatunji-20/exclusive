import { defineStore } from "pinia";
import axios from 'axios'

export const useProductStore = defineStore('productStore', {
    state: () => {
        return {
            products: []
        }
    },
    actions: {
        async getProducts() {
            try {
                const res = await axios.get("http://localhost:5000/products");
                this.products = res.data;
            } catch (err) {
                console.log("ERROR IN FECTHING PRODUCTS", err);
            }
            },
    }
})