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
        <p style="font-weight: bold">{{ p.productName }}</p>
        <p style="display: inline; line-height: 10px">
          ${{ p.price - (p.discount / 100) * p.price }}
        </p>
        <p
          v-if="p.discount > 0"
          style="
            display: inline;
            margin-left: 15px;
            text-decoration: line-through;
          "
        >
          ${{ p.price }}
        </p>
        <div class="star">
          <star-rating
            :rating="p.rating"
            :starStyle="starStyle"
            :key="p.id"
          ></star-rating>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import StarRating from "vue-dynamic-star-rating";
import AddWish from "./AddWish.vue";

export default {
  name: "Card",
  setup() {
    return {
      starStyle: {
        fullStarColor: "#FFAD33",
        emptyStarColor: "#737373",
        starWidth: 15,
        starHeight: 15,
      },
    };
  },
  props: {
    displayProducts: Array,
    link: String,
  },
  components: {
    StarRating,
    AddWish,
  },
};
</script>

<style scoped>
.product-card {
  border: 1px solid #f5f5f5;
  width: 14rem;
  height: auto;
  margin: 0.625rem auto;
  border-radius: 4px;
  position: relative;
  cursor: pointer;
}
.image {
  width: 100%;
  height: 12.5rem;
  position: relative;
  border-radius: 4px;
  background: #f5f5f5;
  overflow: hidden;
  padding: 0.3125rem;
}
.discount {
  padding: 0.1875rem 0.625rem;
  font-size: 0.875rem;
  width: 3.125rem;
  background: #db4444;
  color: white;
  position: absolute;
  z-index: 2;
  border-radius: 4px;
}
.fave {
  width: 1.875rem;
  height: 1.875rem;
  background: #fff;
  position: absolute;
  right: 0.3125rem;
  border-radius: 50%;
  padding: 0.1875rem 0.1563rem;
  z-index: 2;
}
.watch {
  width: 1.875rem;
  height: 1.875rem;
  border-radius: 50%;
  background: #fff;
  position: absolute;
  top: 3.125rem;
  right: 0.3125rem;
  z-index: 2;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transform: scale(0.8);
}
.p-img:hover {
  transform: scale(1.1);
  transition: 0.2s linear;
}
.details {
  width: 100%;
  height: 7.5rem;
  padding: 0rem 0.3125rem;
}
.star {
  width: auto;
  height: 1.25rem;
  margin-top: 1.25rem;
}
</style>