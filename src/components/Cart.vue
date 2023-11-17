<template>
  <div class="border">
    <div class="headers">
      <h4 style="width: 250px">Product</h4>
      <h4>Price</h4>
      <h4>Quantity</h4>
      <h4>Subtotal</h4>
    </div>
    <h1 v-if="cartStore.cartItems.length === 0">Your shopping cart is currently empty.</h1>
    <div v-for="product in cartStore.cartItems" :key="product.id" class="cart">
      <div class="det">
        <div class="img">
          <img :src="product.productImage" class="p-img" />
        </div>
        <p style="width: 150px"> {{ product.productName }} </p>
      </div>
      <p> ${{ product.price }} </p>
      <p> {{ product.quantity }} </p>
      <p> ${{ product.price * product.quantity }} </p>
      <div class="rem">
        <RemoveCart :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';
import RemoveCart from './RemoveCart.vue';

export default {
    name: 'Cart',
    setup() {
        const cartStore = useCartStore();
        return {
            cartStore
        };
    },
    components: { RemoveCart }
}
</script>

<style scoped>
.border {
    border: 4px solid red;
    width: 100%;
    height: auto;
    padding: 5px;
}
.headers {
  border: 2px solid yellowgreen;
  width: 100%;
  padding: 5px 60px 5px 0px;
  /* height: 100px; */
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
h1 {
  font-size: 50px;
  text-align: center;
  margin: 80px auto;
  width: 400px;
}
.cart {
  border: 2px solid green;
  width: 100%;
  position: relative;
  /* height: 100px; */
  margin: 20px auto;
  padding: 5px 60px 5px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.det {
  border: 2px solid blue;
  width: 220px;
  height: 60px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.img {
  border: 2px solid darkblue;
  width: 60px;
  height: 100%;
  margin-right: 10px;
  padding: 5px;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.rem {
  border: 2px solid blue;
  width: 30px;
  height: 60px;
  position: absolute;
  right: 0px
}
</style>