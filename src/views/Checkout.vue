<template>
  <NavBar />
  <div class="large">
    <h1>BILLING DETAILS</h1>
    <div class="standard">
      <div class="form">
        <CheckoutForm />
      </div>
      <div class="cart2">
        <Cart2 />
      </div>
    </div>
  </div>
  <FootBar />
</template>
  
  <script>
import FootBar from "../components/FootBar.vue";
import CheckoutForm from "../components/CheckoutForm.vue";
import Cart2 from "../components/Cart2.vue";
import NavBar from "../components/NavBar.vue";

export default {
  name: "Checkout",
  components: {
    NavBar,
    CheckoutForm,
    Cart2,
    FootBar,
  },
};
</script>
  
  <style scoped>
.large {
  width: 100%;
  height: auto;
  padding: 5rem;
}
.standard {
  width: 100%;
  height: auto;
  margin: 2.5rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.form {
  width: 28.125rem;
  height: auto;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.cart2 {
  width: 400px;
  height: auto;
}

@media screen and (max-width: 768px) {
  .large {
    padding: 3.125rem 0.5rem;
  }
}
</style>