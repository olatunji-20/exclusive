<template>
  <div class="border">
    <div class="headers">
      <h4 class="pqp">Product</h4>
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
        <p> {{ product.productName }} </p>
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
    /* border: 1px solid red; */
    width: 100%;
    height: auto;
    padding: 20px 5px;
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.headers {
  border: 1px solid #F5F5F5;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  border-radius: 4px;
  width: 100%;
  padding: 5px 60px 5px 0px;
  /* height: 100px; */
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.headers .pqp {
  width: 240px;
}
h1 {
  font-size: 50px;
  text-align: center;
  margin: 80px auto;
  width: 400px;
}
.cart {
  /* border: 2px solid green; */
  width: 100%;
  position: relative;
  /* height: 100px; */
  margin: 20px auto;
  padding: 2px 60px 2px 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  border-radius: 4px;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.det {
  /* border: 2px solid blue; */
  width: 200px;
  height: 60px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
/* .det p {
  width: 100px;
} */
.img {
  /* border: 2px solid darkblue; */
  width: 60px;
  height: 100%;
  margin-right: 5px;
  padding: 2px;
  background: #F5F5F5;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.rem {
  /* border: 2px solid blue; */
  width: 30px;
  height: 60px;
  position: absolute;
  right: 0px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}

@media screen and (max-width: 768px) {
  .headers {
    padding-right: 10px;
  }
  .headers .pqp {
    width: 120px;
  }
  .det {
    width: 140px;
  }
}
</style>