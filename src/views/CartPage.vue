<template>
  <NavBar />
  <div class="large">
    <h2> CART ({{ cartStore.cartItems.length }})</h2>
    <Cart />
    <div class="last">
      <h4>Cart Total</h4>
      <p style="display: inline-block; line-height: 0px">Subtotal:</p>
      <p style="display: inline-block; float: right; line-height: 0px">${{ totalPrice }}</p>
      <hr />
      <p style="display: inline-block; line-height: 0px">Shipping:</p>
      <p style="display: inline-block; float: right; line-height: 0px">Free</p>
      <hr />
      <p style="display: inline-block; line-height: 0px;">Total:</p>
      <h3 style="display: inline-block; float: right; line-height: 0px; color: green;">${{ totalPrice }}</h3>
      <router-link to="/checkout" class="rlink">
        <div class="proceed">PROCEED TO CHECKOUT</div>
      </router-link>
    </div>
  </div>
  <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Cart from '../components/Cart.vue';
import FootBar from '../components/FootBar.vue';

import { useCartStore } from '../stores/cartStore';
import { ref, computed } from 'vue'

export default {
    name: 'CartPage',
    setup() {
      // const total = ref(0)
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
    },
    components: {
    NavBar,
    FootBar,
    Cart
}
}
</script>

<style scoped>
.large {
  border: 6px solid palevioletred;
  width: 100%;
  height: auto;
  padding: 50px;
}
.last {
  border: 3px solid green;
  width: 400px;
  height: auto;
  /* float: right; */
  padding: 0px 20px;
  position: relative;
  left: calc(100% - 400px);
  margin: 20px 0px 50px;
}
.proceed {
  border: 1px solid brown;
  width: 250px;
  padding: 10px;
  margin: 40px auto 0px;
  text-align: center;
  background: pink;
}

@media screen and (max-width: 768px) {
  .large {
    padding: 20px 5px;
  }
  .last {
    width: 100%;
    left: 0;
  }
}
</style>