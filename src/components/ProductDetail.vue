<template>
  <section class="qqq">
      <div class="details">
        <div class="image">
            <img :src="productInfo.productImage" :alt="productInfo.productName" class="p-img" />
        </div>
        <div class="det">
            <h1>{{ productInfo.productName }}</h1>
            <div class="star"></div>
            <p style="display: inline-block;"> In stock</p>
        </div>

    </div>
  </section>
</template>

<script>
export default {
    name: 'ProductDetail',
    setup() {

    },
    props: {
        productInfo: Object
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
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.det {
    border: 2px solid red;
    width: 500px;
    height: 500px;
}
.star {
    border: 1px solid pink;
    border-right: 4px solid blue;
    height: 20px;
    width: 120px;
    display: inline-block;
    margin-right: 20px;
}
</style>