<template>
    <NavBar />
    <h1>WISHLIST</h1>
    <RelatedItem topic="Just For You" />
    <FootBar />

</template>

<script>
import FootBar from '../components/FootBar.vue';
import RelatedItem from '../components/RelatedItem.vue';
import NavBar from '../components/NavBar.vue';

export default {
    name: 'WishList',
    setup() { },
    components: { NavBar, FootBar, RelatedItem }
}
</script>

<style>

</style>