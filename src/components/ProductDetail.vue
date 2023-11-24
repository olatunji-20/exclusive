<template>
  <section class="qqq">
      <div class="details">
        <div class="image">
            <img :src="productInfo.productImage" :alt="productInfo.productName" class="p-img" />
        </div>
        <div class="det">
            <h1>{{ productInfo.productName }}</h1>
            <div class="star">
                <star-rating :rating="productInfo.rating" :starStyle="starStyle" :key="productInfo.id"></star-rating>
            </div>
            <p style="display: inline-block; color: #00ff66;"> In stock</p>
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
import { ref, watch } from 'vue'
import AddToCart from './AddToCart.vue';
import StarRating from 'vue-dynamic-star-rating';

export default {
    name: 'ProductDetail',
    setup() {
        const quantity = ref(1);
        const increase = () => {
            quantity.value++
        };
        const decrease = () => {
            quantity.value--
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
            }
        }
    },
    props: {
        productInfo: Object
    },
    components: {
        AddToCart,
        StarRating
    },
    watch: {
        quantity(val) {
        if (val <= 0) {
            quantity.value = 1;
        }
        },
    },
}
</script>

<style scoped>
.qqq {
    /* border: 4px solid yellow; */
    width: 100%;
    height: auto;
    padding: 80px 50px;
}
.details {
    /* border: 6px solid blue; */
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.image {
    /* border: 6px solid green; */
    width: 450px;
    height: 450px;
    background: #F5F5F5;
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.det {
    /* border: 5px solid red; */
    width: 350px;
    height: auto;
    padding: 0px 5px;
    border-radius: 4px;
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
}
.star {
    /* border: 1px solid pink; */
    border-right: 2px solid #db4444;
    height: 20px;
    width: 130px;
    display: inline-block;
    margin-right: 10px;
}
hr {
    border: 1px solid black;
    margin: 25px auto;
}
.description {
    font-size: 14px;
}
.ppp {
    /* border: 2px solid blue; */
    width: 100%;
    height: 44px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.one {
    border: 1px solid black;
    width: 40%;
    height: 34px;
    border-radius: 4px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.plus {
    /* border: 2px solid yellowgreen; */
    width: 35px;
    height: 35px;
    padding: 3px;
    cursor: pointer;
}
.plus1 {
    /* border: 2px solid yellowgreen; */
    width: 50px;
    height: auto;
}
input {
    width: 45px;
    text-align: center;
    font-weight: bolder;
    font-size: 23px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
.two {
    border: 1px solid black;
    border-radius: 4px;
    width: 35px;
    height: 35px;
    padding: 7px 6px;
}
.free {
    border: 1px solid black;
    width: 100%;
    height: auto;
}
.aaa {
    /* border: 2px solid blue; */
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.line-d {
    margin: 0px;
}
.icon {
    /* border: 1px solid red; */
    width: 18%;
    height: 100%;
    padding: 8px 4px;
}
.wup {
    /* border: 1px solid red; */
    width: 78%;
    height: 100%;
}
.wup h4 {
    line-height: 0px;
}
.wup p {
    font-size: 13px;
}

.font-inc {
    font-size: 50px;
}

@media screen and (max-width: 768px) {
    .qqq {
        padding: 50px 8px;
    }

    .det {
        width: 100%;
        margin-top: 20px;
    }
}
</style>