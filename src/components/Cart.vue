<template>
  <div class="border">
    <div class="headers">
      <h4 class="pqp">PRODUCT</h4>
      <h4>PRICE</h4>
      <h4>QUANTITY</h4>
      <h4>SUBTOTAL</h4>
    </div>
    <h1 v-if="cartStore.cartItems.length === 0">
      Your shopping cart is currently empty.
    </h1>
    <div v-for="product in cartStore.cartItems" :key="product.id" class="cart">
      <div class="det">
        <div class="img">
          <img :src="product.productImage" class="p-img" />
        </div>
        <p>{{ product.productName }}</p>
      </div>
      <p>${{ product.price }}</p>
      <p>{{ product.quantity }}</p>
      <p>${{ product.price * product.quantity }}</p>
      <div class="rem">
        <RemoveCart :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import { useCartStore } from "../stores/cartStore";
import RemoveCart from "./RemoveCart.vue";

export default {
  name: "Cart",
  setup() {
    const cartStore = useCartStore();
    return {
      cartStore,
    };
  },
  components: { RemoveCart },
};
</script>

<style scoped>
.border {
  width: 100%;
  height: auto;
  padding: 1.25rem 0.3125rem;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.headers {
  border: 1px solid #f5f5f5;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  border-radius: 4px;
  width: 100%;
  padding: 0.3125rem 3.75rem 0.3125rem 0rem;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.headers .pqp {
  width: 15rem;
}
h1 {
  font-size: 3.125rem;
  text-align: center;
  margin: 5rem auto;
  width: 25rem;
}
.cart {
  width: 100%;
  position: relative;
  margin: 1.25rem auto;
  padding: 0.125rem 3.75rem 0.125rem 0rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.det {
  width: 12.5rem;
  height: 3.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}
.img {
  width: 3.75rem;
  height: 100%;
  margin-right: 0.3125rem;
  padding: 0.125rem;
  background: #f5f5f5;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.rem {
  width: 1.875rem;
  height: 3.75rem;
  position: absolute;
  right: 0px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}

@media screen and (max-width: 768px) {
  .headers {
    padding-right: 0.625rem;
  }
  .headers .pqp {
    width: 7.5rem;
  }
  .det {
    width: 8.75rem;
  }
}
</style>