<template>
  <NavBar />
  <div class="large">
    <h2>CART ({{ cartStore.cartItems.length }})</h2>
    <Cart />
    <div class="last">
      <h4>Cart Total</h4>
      <p style="display: inline-block; line-height: 0px">Subtotal:</p>
      <p style="display: inline-block; float: right; line-height: 0px">
        ${{ totalPrice }}
      </p>
      <hr />
      <p style="display: inline-block; line-height: 0px">Shipping:</p>
      <p style="display: inline-block; float: right; line-height: 0px">Free</p>
      <hr />
      <p style="display: inline-block; line-height: 0px">Total:</p>
      <h3
        style="
          display: inline-block;
          float: right;
          line-height: 0px;
          color: green;
        "
      >
        ${{ totalPrice }}
      </h3>
      <router-link to="/checkout" class="rlink">
        <div class="proceed">PROCEED TO CHECKOUT</div>
      </router-link>
    </div>
  </div>
  <FootBar />
</template>

<script>
import NavBar from "../components/NavBar.vue";
import Cart from "../components/Cart.vue";
import FootBar from "../components/FootBar.vue";

import { useCartStore } from "../stores/cartStore";
import { ref, computed } from "vue";

export default {
  name: "CartPage",
  setup() {
    const cartStore = useCartStore();

    const totalPrice = computed(() => {
      let total = 0;
      cartStore.cartItems.forEach((item) => {
        total += item.price * item.quantity;
      });

      return total;
    });
    return {
      cartStore,
      totalPrice,
    };
  },
  components: {
    NavBar,
    FootBar,
    Cart,
  },
};
</script>

<style scoped>
.large {
  width: 100%;
  height: auto;
  padding: 5rem;
}
.last {
  width: 25rem;
  height: auto;
  padding: 1.25rem 1.25rem 0.625rem;
  position: relative;
  left: calc(100% - 25rem);
  margin: 2.5rem 0rem 3.125rem;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.proceed {
  width: 15.625rem;
  padding: 0.625rem;
  border-radius: 4px;
  margin: 2.5rem auto 0px;
  text-align: center;
  background: #db4444;
  color: white;
}
.proceed:hover {
  background: #e07575;
}

@media screen and (max-width: 768px) {
  .large {
    padding: 3.125rem 0.5rem;
  }
  .last {
    width: 100%;
    left: 0;
  }
}
</style>