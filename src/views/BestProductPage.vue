<template>
  <NavBar />
  <ProductDetail :productInfo="productStore.bestProduct" />
  <RelatedItem topic="Related Items" />
  <FootBar />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import ProductDetail from '../components/ProductDetail.vue';
import RelatedItem from '../components/RelatedItem.vue';
import FootBar from '../components/FootBar.vue';

import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { useProductStore } from '../stores/productStore';

export default {
    name: 'BestProductPage',
    setup() {
        const route = useRoute();
        const productStore = useProductStore();

        onMounted(async () => {
            await productStore.getBestProduct(route.params.id)
        })
  
        return {
            productStore
        }

    },
    components: {
      NavBar,
      ProductDetail,
      RelatedItem,
      FootBar
}
}
</script>

<style>

</style>