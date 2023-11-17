<template>
  <div class="main">    
    <div class="cart2">
      <h2 v-if="cartStore.cartItems.length === 0">Your shopping cart is currently empty.</h2>
      <div v-else v-for="product in cartStore.cartItems" :key="product.id" class="cart">
          <div class="det">
              <div class="img">
                  <img :src="product.productImage" class="p-img" />
              </div>
              <p style="width: 150px"> {{ product.productName }} </p>
          </div>
          <p> ${{ product.price * product.quantity }} </p>
      </div>
    </div>

    <div class="last">
      <p style="display: inline-block; line-height: 0px">Subtotal:</p>
      <p style="display: inline-block; float: right; line-height: 0px">${{ totalPrice }}</p>
      <hr />
      <p style="display: inline-block; line-height: 0px">Shipping:</p>
      <p style="display: inline-block; float: right; line-height: 0px">Free</p>
      <hr />
      <p style="display: inline-block; line-height: 0px;">Total:</p>
      <h3 style="display: inline-block; float: right; line-height: 0px; color: green;">${{ totalPrice }}</h3>
      <router-link to="/">
        <div class="proceed">PLACE ORDER</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/cartStore';
import { computed } from 'vue'

export default {
    name: 'Cart2',
    setup() {
        const cartStore = useCartStore();

        const totalPrice = computed(() => {
        let total = 0;
        cartStore.cartItems.forEach((item) => {
            total += item.price * item.quantity;
        });
        return total;
      }) 
        return {
            cartStore,
            totalPrice
        }
    }

}
</script>

<style scoped>
.main {
    border: 4px solid salmon;
    width: 100%;
    height: auto;
    margin-top: 30px;
}
.cart2 {
    border: 2px solid blue;
    width: 100%;
    max-height: 250px;
    overflow: auto;
}
h2 {
  font-size: 30px;
  text-align: center;
  margin: 50px auto;
  width: 250px;
}
.cart {
  border: 2px solid green;
  width: 100%;
  /* height: 100px; */
  margin: 5px auto;
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
.last {
  border: 3px solid green;
  width: 100%;
  height: auto;
  padding: 0px 20px;
  margin-top: 30px;
}
.proceed {
  border: 1px solid brown;
  width: 250px;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
  background: pink;
}
</style>