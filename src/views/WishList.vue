<template>
    <NavBar />
    <div class="gogo">
        <h2> WISHLIST ({{ wishStore.wishItems.length }})</h2>
        <div class="wishlist">
            <h3 v-if="wishStore.wishItems.length === 0">You haven't added any of our products to your wishlist.</h3>
            <Card :link="'/all-product-page/'" :displayProducts="wishStore.wishItems" />
        </div>
    </div>
    <RelatedItem topic="Just For You" />
    <FootBar />

</template>

<script>
import FootBar from '../components/FootBar.vue';
import Card from '../components/Card.vue';
import RelatedItem from '../components/RelatedItem.vue';
import NavBar from '../components/NavBar.vue';

import { useWishStore } from '../stores/wishStore';

export default {
    name: 'WishList',
    setup() {
        const wishStore = useWishStore();

        return {
            wishStore
        }
    },
    components: { NavBar, FootBar, Card, RelatedItem }
}
</script>

<style scoped>
.gogo {
    width: 100%;
    height: auto;
    padding: 3.125rem;
}
.wishlist {
    width: auto;
    height: auto;
    box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
h3 {
    font-size: 1.875rem;
    width: 18.75rem;
    text-align: center;
    margin: 3.125rem auto;
}
</style>