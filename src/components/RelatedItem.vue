<template>
<div class="categories">
    <h1>{{ topic }}</h1>
    <div class="related">
        <Card :displayProducts="relatedItems" />
    </div>
    
</div>
</template>

<script>
import { computed } from 'vue'
import { useProductStore } from '../stores/productStore';
import Card from './Card.vue';

export default {
    name: "RelatedItem",
    setup() {
        const productStore = useProductStore();
        productStore.getFlashProducts();

        const relatedItems = computed(() => {
            const randomProducts = productStore.flashProducts.sort(() => 0.5 - Math.random());
            return randomProducts.slice(0, 4);
        });
        return {
            relatedItems
        };
    },
    components: { Card },
    props: {
        topic: String
    }
}
</script>

<style scoped>
.categories {
    border: 3px solid blue;
    width: 100%;
    height: auto;
    padding: 50px;
}
h1 {
    border-left: 20px solid blue;
    width: auto;
    height: 60px;
    padding: 15px;
}
.related {
    border: 2px solid brown;
    width: 100%;
    height: auto;
    margin: 50px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

</style>