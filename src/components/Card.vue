<template>
  <div v-for="p in displayProducts" :key="p.id" class="product-card">
    <div class="watch">
        <AddWish :product="p" />
    </div>
    <router-link class="rlink" :to="link + `${p.id}`" :key="p.id">
        <div class="image">
            <div v-if="p.discount > 0" class="discount">-{{ p.discount }}%</div>
            <div class="fave">
                <i class="material-symbols-outlined">favorite</i>
            </div>
            <img :src="p.productImage" :alt="p.productName" class="p-img" />
        </div>    
        <div class="details">
            <p style="font-weight: bold"> {{ p.productName }} </p>
            <p style="display: inline; line-height: 10px">${{ p.price - (p.discount / 100 * p.price) }}</p>
            <p v-if="p.discount > 0" style="display: inline; margin-left: 15px; text-decoration: line-through;">${{ p.price }}</p>
            <div class="star">
                <star-rating :rating="p.rating" :starStyle="starStyle" :key="p.id"></star-rating>
            </div>
        </div>
    </router-link>
  </div>
</template>

<script>
import StarRating from "vue-dynamic-star-rating";
import AddWish from "./AddWish.vue";

export default {
    name: 'Card',
    setup() {

        return {
            starStyle: {
                fullStarColor: "#FFAD33",
                emptyStarColor: "#737373",
                starWidth: 15,
                starHeight: 15
            }
        }
    },
    props: {
        displayProducts: Array,
        link: String
    },
    components: {
        StarRating,
        AddWish
    }
}
</script>

<style scoped>
.product-card {
    border: 1px solid #F5F5F5;
    width: 14rem;
    height: auto;
    margin: 10px auto;
    border-radius: 4px;
    position: relative;
    cursor: pointer;
}
.image {
    /* border: 2px solid green; */
    width: 100%;
    height: 200px;
    position: relative;
    border-radius: 4px;
    background: #F5F5F5;
    overflow: hidden;
    padding: 5px;
}
.discount {
    /* border: 1px solid brown; */
    padding: 3px 10px;
    font-size: 14px;
    width: 50px;
    background: #DB4444;
    color: white;
    position: absolute;
    z-index: 2;
    border-radius: 4px;
}
.fave {
    /* border: 1px solid red; */
    width: 30px;
    height: 30px;
    background: #FFF;
    position: absolute;
    right: 5px;
    border-radius: 50%;
    padding: 3px 2.5px;
    z-index: 2;
}
.watch {
    /* border: 1px solid green; */
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #FFF;
    position: absolute;
    top: 50px;
    right: 5px;
    /* border-radius: 50%; */
    /* padding: 2px; */
    z-index: 2;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: scale(0.8)
}
.p-img:hover {
    transform: scale(1.1);
    transition: 0.2s linear;
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
    /* border: 1px solid red; */
    width: 100%;
    height: 120px;
    padding: 0px 5px;
}
.star {
    /* border: 1px solid green; */
    width: auto;
    height: 20px;
    margin-top: 20px;
}
</style>