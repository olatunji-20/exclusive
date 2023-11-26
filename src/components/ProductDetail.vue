<template>
  <section class="qqq">
    <div class="details">
      <div class="image">
        <img
          :src="productInfo.productImage"
          :alt="productInfo.productName"
          class="p-img"
        />
      </div>
      <div class="det">
        <h1>{{ productInfo.productName }}</h1>
        <div class="star">
          <star-rating
            :rating="productInfo.rating"
            :starStyle="starStyle"
            :key="productInfo.id"
          ></star-rating>
        </div>
        <p style="display: inline-block; color: #00ff66">In stock</p>
        <p>${{ productInfo.price }}</p>
        <p class="description">{{ productInfo.productDescription }}.</p>
        <hr />
        <div class="ppp">
          <div class="one">
            <div @click="decrease" class="plus">
              <i class="material-symbols-outlined">remove</i>
            </div>
            <div class="plus1">
              <input v-model="quantity" type="number" />
            </div>
            <div @click="increase" class="plus">
              <i class="material-symbols-outlined">add</i>
            </div>
          </div>
          <div class="one">
            <AddToCart :product="productInfo" :quantity="quantity" />
          </div>
          <div class="two">
            <i class="material-symbols-outlined">favorite</i>
          </div>
        </div>
        <div class="free">
          <div class="aaa">
            <div class="icon">
              <i class="material-symbols-outlined font-inc">departure_board</i>
            </div>
            <div class="wup">
              <h4>Free Delivery</h4>
              <p>Enter your postal code for delivery availability.</p>
            </div>
          </div>
          <hr class="line-d" />
          <div class="aaa">
            <div class="icon">
              <i class="material-symbols-outlined font-inc">change_circle</i>
            </div>
            <div class="wup">
              <h4>Return Delivery</h4>
              <p>Free 30 days delivery return.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
import AddToCart from "./AddToCart.vue";
import StarRating from "vue-dynamic-star-rating";

export default {
  name: "ProductDetail",
  setup() {
    const quantity = ref(1);
    const increase = () => {
      quantity.value++;
    };
    const decrease = () => {
      quantity.value--;
    };

    return {
      quantity,
      increase,
      decrease,
      starStyle: {
        fullStarColor: "#ed8a19",
        emptyStarColor: "#737373",
        starWidth: 15,
        starHeight: 15,
      },
    };
  },
  props: {
    productInfo: Object,
  },
  components: {
    AddToCart,
    StarRating,
  },
  watch: {
    quantity(val) {
      if (val <= 0) {
        quantity.value = 1;
      }
    },
  },
};
</script>

<style scoped>
.qqq {
  width: 100%;
  height: auto;
  padding: 5rem 3.125rem;
}
.details {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}
.image {
  width: 28.125rem;
  height: 28.125rem;
  background: #f5f5f5;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.det {
  width: 21.875rem;
  height: auto;
  padding: 0px 0.3125rem;
  border-radius: 4px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.star {
  border-right: 2px solid #db4444;
  height: 1.25rem;
  width: 8.125rem;
  display: inline-block;
  margin-right: 0.6rem;
}
hr {
  border: 1px solid black;
  margin: 1.5625rem auto;
}
.description {
  font-size: 0.875rem;
}
.ppp {
  width: 100%;
  height: 2.75rem;
  margin: 1.25rem auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.one {
  border: 1px solid black;
  width: 40%;
  height: 2.125rem;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.plus {
  width: 2.1875rem;
  height: 2.1875rem;
  padding: 0.1875rem;
  cursor: pointer;
}
.plus1 {
  width: 3.125rem;
  height: auto;
}
input {
  width: 2.815rem;
  text-align: center;
  font-weight: bolder;
  font-size: 1.4375rem;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.two {
  border: 1px solid black;
  border-radius: 4px;
  width: 2.1875rem;
  height: 2.1875rem;
  padding: 0.4375rem 0.375rem;
}
.free {
  border: 1px solid black;
  width: 100%;
  height: auto;
}
.aaa {
  width: 100%;
  height: 4.375rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
}
.line-d {
  margin: 0px;
}
.icon {
  width: 18%;
  height: 100%;
  padding: 0.5rem 0.25rem;
}
.wup {
  width: 78%;
  height: 100%;
}
.wup h4 {
  line-height: 0px;
}
.wup p {
  font-size: 0.8125rem;
}

.font-inc {
  font-size: 3.125rem;
}

@media screen and (max-width: 768px) {
  .qqq {
    padding: 3.125rem 0.5rem;
  }

  .det {
    width: 100%;
    margin-top: 1.25rem;
  }
}
</style>