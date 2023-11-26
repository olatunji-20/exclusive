<template>
  <div class="main">
    <div class="cart2">
      <h2 v-if="cartStore.cartItems.length === 0">
        Your shopping cart is currently empty.
      </h2>
      <div
        v-else
        v-for="product in cartStore.cartItems"
        :key="product.id"
        class="cart"
      >
        <div class="det">
          <div class="img">
            <img :src="product.productImage" class="p-img" />
          </div>
          <p style="width: 150px">{{ product.productName }}</p>
        </div>
        <p>${{ product.price * product.quantity }}</p>
      </div>
    </div>

    <div class="last">
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
      <router-link to="/" class="rlink">
        <div class="proceed">PLACE ORDER</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cartStore";
import { computed } from "vue";

export default {
  name: "Cart2",
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
};
</script>

<style scoped>
.main {
  width: 100%;
  height: auto;
  margin-top: 1.875rem;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.cart2 {
  width: 100%;
  max-height: 15.625rem;
  overflow: auto;
}
h2 {
  font-size: 1.875rem;
  text-align: center;
  margin: 3.125rem auto;
  width: 15.625rem;
}
.cart {
  width: 100%;
  margin: 0.625rem auto;
  padding: 0.3125rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.det {
  width: 13.75rem;
  height: 3.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.img {
  width: 3.75rem;
  height: 100%;
  margin-right: 10px;
  padding: 0.3125rem;
  background: #f5f5f5;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.last {
  border: 1px solid #f5f5f5;
  width: 100%;
  height: auto;
  padding: 1.25rem 0.625rem;
  margin-top: 1.875rem;
}
.proceed {
  width: 15.625rem;
  padding: 0.625rem;
  margin-top: 1.25rem;
  text-align: center;
  background: #db4444;
  color: white;
  border-radius: 4px;
}
.proceed:hover {
  background: #e07575;
}
</style>