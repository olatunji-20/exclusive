<template>
  <div class="border">
    <div class="headers">
      <h4 style="width: 250px">Product</h4>
      <h4>Price</h4>
      <h4>Quantity</h4>
      <h4>Subtotal</h4>
    </div>

    <div v-for="product in cartStore.cartItems" :key="product.id" class="cart">
      <div class="det">
        <div class="img">
          <img :src="product.productImage" class="p-img" />
        </div>
        <p style="width: 150px">{{ product.productName }}</p>
      </div>
      <h4>${{ product.price }}</h4>
      <h4>{{ product.quantity }}</h4>
      <h4>${{ product.price * product.quantity }}</h4>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';

export default {
    name: 'Cart',
    setup() {
        const cartStore = useCartStore();
        return {
            cartStore
        }
    }

}
</script>

<style scoped>
.border {
    border: 4px solid red;
    width: 100%;
    min-height: 300px;
    padding: 5px;
}
.headers {
  border: 2px solid yellowgreen;
  width: 100%;
  /* height: 100px; */
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.cart {
  border: 2px solid green;
  width: 100%;
  /* height: 100px; */
  margin: 20px auto;
  padding: 5px;
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
</style>