<template>
    <div class="categories">
        <h1>{{ topic }}</h1>
        <div class="related">
            <div class="related-card">
                <Card :link="'/all-product-page/'" :displayProducts="relatedItems" />
            </div>
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
        productStore.getAllProducts();

        const relatedItems = computed(() => {
            const randomProducts = productStore.allProducts.sort(() => 0.5 - Math.random());
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
    border-left: 20px solid #DB4444;
    width: auto;
    height: 60px;
    padding: 15px;
}
.related {
    border: 4px solid brown;
    width: 100%;
    height: auto;
    margin: 50px auto;
}
.related-card {
    border: 4px solid green;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
}

@media screen and (max-width: 768px) {
    .categories {
        padding: 20px 5px;
    }
    .related {
        overflow: auto;
    }
    .related-card {
        width: 1200px;
    }
}
</style>