<template>
  <section class="qqq">
      <div class="details">
        <div class="image">
            <img :src="productInfo.productImage" :alt="productInfo.productName" class="p-img" />
        </div>
        <div class="det">
            <h1>{{ productInfo.productName }}</h1>
            <div class="star">{{ productInfo.rating }}</div>
            <p style="display: inline-block;"> In stock</p>
            <p>${{ productInfo.price }}</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur dolore molestiae dolorem 
                architecto recusandae dolores obcaecati fugit adipisci quod ducimus.</p>
            <hr />
            <div class="ppp">
                <div class="one">
                    <div @click="decrease" class="plus">-</div>
                    <div class="plus1">
                        <input v-model="quantity" />
                    </div>
                    <div @click="increase" class="plus">+</div>
                </div>
                <div class="one">
                    <AddToCart :product="productInfo" :quantity="quantity" />
                </div>
                <div class="two"></div>
            </div>
            <div class="free">
                <div class="aaa">
                    <div class="icon"></div>
                    <div class="wup"></div>
                </div>
                <hr />
                <div class="aaa">
                    <div class="icon"></div>
                    <div class="wup"></div>
                </div>
            </div>
        </div>

    </div>
  </section>
</template>

<script>
import { ref, watch } from 'vue'
import AddToCart from './AddToCart.vue';

export default {
    name: 'ProductDetail',
    setup() {
        const quantity = ref(3);
        const increase = () => {
            quantity.value++
        };
        const decrease = () => {
            quantity.value--
        };

        return {
            quantity,
            increase,
            decrease
        }
    },
    props: {
        productInfo: Object
    },
    components: {
        AddToCart
    }
}
</script>

<style scoped>
.qqq {
    border: 4px solid yellow;
    width: 100%;
    height: 700px;
    padding: 50px;
}
.details {
    border: 2px solid blue;
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
}
.image {
    border: 6px solid green;
    width: 450px;
    height: 450px;
    background: pink;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.det {
    border: 2px solid red;
    width: 350px;
    height: 600px;
}
.star {
    border: 1px solid pink;
    border-right: 4px solid blue;
    height: 20px;
    width: 120px;
    display: inline-block;
    margin-right: 20px;
}
hr {
    border: 2px solid saddlebrown;
}
.ppp {
    border: 2px solid blue;
    width: 100%;
    height: 44px;
    margin: 20px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.one {
    border: 2px solid green;
    width: 40%;
    height: 40px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.plus {
    border: 2px solid yellowgreen;
    width: 35px;
    height: 35px;
}
.plus1 {
    border: 2px solid yellowgreen;
    width: 50px;
    height: 35px;
}
input {
    width: 45px;
    text-align: center;
    font-weight: bolder;
    font-size: 23px;
}
.two {
    border: 2px solid red;
    width: 40px;
    height: 40px;
}
.free {
    border: 2px solid chartreuse;
    width: 100%;
    height: auto;
}
.aaa {
    border: 2px solid blue;
    width: 100%;
    height: 70px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.icon {
    border: 1px solid red;
    width: 18%;
    height: 100%;
}
.wup {
    border: 1px solid red;
    width: 78%;
    height: 100%;
}
</style>