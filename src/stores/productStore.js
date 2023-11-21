import { defineStore } from "pinia";
import axios from 'axios'

export const useProductStore = defineStore('productStore', {
    state: () => {
        return {
            staffs: [],
            flashProducts: [],
            flashProduct: {},
            bestProducts: [],
            bestProduct: {},
            allProducts: [],
            allProduct: {}
        }
    },
    actions: {
        async getFlashProducts() {
            try {
                const res = await axios.get("http://localhost:5000/flash-products");
                this.flashProducts = await res.data;
            } catch (err) {
                console.log("ERROR IN FECTHING PRODUCTS", err);
            }
        },

        async getFlashProduct(id) {
            try {
                const res = await axios.get("http://localhost:5000/flash-products/" + id);
                const reqProduct = await res.data;
                this.flashProduct = reqProduct
            } catch(err) {
                console.log("ihcsduvvfu")
            }
        },

        async getBestProducts() {
            try {
                const res = await axios.get("http://localhost:5000/best-products");
                this.bestProducts = await res.data;
            } catch (err) {
                console.log("ERROR IN FECTHING PRODUCTS", err);
            }
        },
        
        async getBestProduct(id) {
            try {
                const res = await axios.get("http://localhost:5000/best-products/" + id);
                const reqProduct = await res.data;
                this.bestProduct = reqProduct
            } catch(err) {
                console.log("ihcsduvvfu")
            }
        },
        
        async getAllProducts() {
            await this.getFlashProducts();
            await this.getBestProducts();

            try {
                const res = this.flashProducts.concat(this.bestProducts);
                this.allProducts = res;
            } catch (err) {
                console.log("ERROR IN FECTHING PRODUCTS", err);
            }
        },
        
        async getAllProduct(id) {
            await this.getFlashProducts();
            await this.getBestProducts();

            try {
                const allProducts = this.flashProducts.concat(this.bestProducts);
                this.allProduct = allProducts.find((product) => product.id == id);

                console.log("ded", this.allProduct);
            } catch(err) {
                console.log("ihcsduvvfu")
            }
        },
        
        async getStaffs() {
            try {
                const res = await axios.get("http://localhost:5000/staffs");
                this.staffs = await res.data;
            } catch (err) {
                console.log("ERROR IN FECTHING PRODUCTS", err);
            }
            },
    }
})