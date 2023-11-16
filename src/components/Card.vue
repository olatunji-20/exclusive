<template>
  <div v-for="p in displayProducts" :key="p.id" class="product-card">
    <router-link :to="'/product-page/' + p.id" :key="p.id">
        <div class="image">
            <div v-if="p.discount > 0" class="discount">-{{ p.discount }}%</div>
            <div class="fave">8</div>
            <div class="watch">8</div>
            <img :src="p.productImage" class="p-img" />
            <!-- <div class="add">
                <AddToCart :product="productInfo" :quantity="quantity" />
            </div> -->
        </div>    
        <div class="details">
            <p style="font-weight: bold"> {{ p.productName }} </p>
            <p style="display: inline; line-height: 10px">$350</p>
            <p style="display: inline; margin-left: 15px; text-decoration: line-through;">${{ p.price }}</p>
            <div class="star">
                <star-rating :rating="p.rating" :starStyle="starStyle" :key="p.id"></star-rating>
            </div>
        </div>
    </router-link>
  </div>
</template>

<script>
import StarRating from "vue-dynamic-star-rating";

// import AddToCart from './AddToCart.vue';
export default {
    name: 'Card',
    setup() {
        return {
            starStyle: {
                fullStarColor: "#ed8a19",
                emptyStarColor: "#737373",
                starWidth: 15,
                starHeight: 15
            }
        }
    },
    props: {
        displayProducts: Array
    },
    components: {
        // AddToCart
        StarRating
    }
}
</script>

<style scoped>
.product-card {
    border: 2px solid hotpink;
    width: 220px;
    height: 350px;
    cursor: pointer;
}
.image {
    border: 4px solid green;
    width: 100%;
    height: 200px;
    position: relative;
    background: powderblue;
}
.discount {
    border: 1px solid brown;
    padding: 3px 10px;
    font-size: 14px;
    width: 55px;
    background: pink;
    color: white;
    position: absolute;
}
.fave {
    border: 1px solid red;
    width: 35px;
    height: 35px;
    background: powderblue;
    position: absolute;
    right: 0;
    border-radius: 50%;
    padding: 5px;
}
.watch {
    border: 1px solid green;
    width: 35px;
    height: 35px;
    background: yellow;
    position: absolute;
    top: 50px;
    right: 0;
    border-radius: 50%;
    padding: 5px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 5px;
}
/* .add {
    border: 2px solid saddlebrown;
    height: 40px;
    width: 100%;
    padding: 10px;
    position: absolute;
    bottom: 0;
    left: 0;
    display: none;
    cursor: grabbing;
}
.product-card:hover .add {
    display: inline-block;
} */
.details {
    border: 1px solid red;
    width: 100%;
    height: 140px;
}
.star {
    border: 1px solid green;
    width: 200px;
    height: 30px;
    margin-top: 20px;
}
</style>