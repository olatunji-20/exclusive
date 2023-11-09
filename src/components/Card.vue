<template>
  <div class="card">
    <div class="image">
        <div class="discount">-35%</div>
        <div class="fave">8</div>
        <div class="watch">8</div>
        <img src="/img/pad.png" class="p-img" />
    </div>
    
    <div class="details">
        <p>PRODUCT NAME</p>
        <p style="display: inline; line-height: 10px">$350</p>
        <p style="display: inline; margin-left: 15px; text-decoration: line-through;">$500</p>
        <div class="star"></div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card {
    border: 2px solid blue;
    width: 250px;
    height: 360px;
}
.image {
    border: 4px solid green;
    width: 100%;
    height: 200px;
    position: relative;
    background: gray;
}
.discount {
    border: 1px solid blue;
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
    border: 1px solid red;
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
.details {
    border: 1px solid red;
    width: 100%;
    height: 150px;
}
.star {
    border: 1px solid green;
    width: 200px;
    height: 30px;
    margin-top: 20px;
}
</style>