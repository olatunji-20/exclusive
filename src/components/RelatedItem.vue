<template>
<div class="categories">
    <h1>Related Item</h1>
    <div class="related"></div>
    
</div>
</template>

<script>
export default {
    name: "RelatedItem",
    setup() {

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
    height: 400px;
    margin: 50px auto;
}

</style>