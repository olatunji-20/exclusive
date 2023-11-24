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
      <router-link to="/" class="rlink">
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
    /* border: 4px solid salmon; */
    width: 100%;
    height: auto;
    margin-top: 30px;
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.cart2 {
    /* border: 2px solid blue; */
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
  /* border: 2px solid green; */
  width: 100%;
  /* height: 100px; */
  margin: 10px auto;
  padding: 5px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.det {
  /* border: 2px solid blue; */
  width: 220px;
  height: 60px;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
.img {
  /* border: 2px solid darkblue; */
  width: 60px;
  height: 100%;
  margin-right: 10px;
  padding: 5px;
  background: #F5F5F5;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.last {
  border: 1px solid #F5F5F5;
  width: 100%;
  height: auto;
  padding: 20px 10px;
  margin-top: 30px;
}
.proceed {
  /* border: 1px solid brown; */
  width: 250px;
  padding: 10px;
  margin-top: 20px;
  text-align: center;
  background: #DB4444;
  color: white;
  border-radius: 4px;
}
.proceed:hover {
  background: #E07575;
}
</style>