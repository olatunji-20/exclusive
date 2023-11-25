<template>
  <section class="eeee">
    <div class="enha">
        <div class="one">
            <h4 style="color: #00FF66">Categories</h4>
            <h1>Enhance Your Music Experience</h1>
            <div class="time">
                <CountDown />
            </div>
            <router-link to="/all-products" class="rlink">
                <div class="buy">BUY NOW</div>
            </router-link>
        </div>
        <div class="two">
            <img src="/img/jbl.png" class="p-img" />
        </div>
    </div>
  </section>
</template>

<script>
import CountDown from './CountDown.vue';

export default {
    name: 'Enhance',
    components: {
        CountDown
    }
}
</script>

<style scoped>
.eeee {
    /* border: 8px solid pink; */
    width: 100%;
    height: 500px;
    padding: 50px 80px;
}
.enha {
    /* border: 2px solid red; */
    background: black;
    width: 90%;
    height: 450px;
    margin: 0px auto;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    border-radius: 4px;
}
.one {
    /* border: 2px solid blue; */
    width: 45%;
    height: 100%;
    padding: 20px 10px;
    color: white;
}
h1 {
    font-size: 40px;
}
.time {
    /* border: 1px solid red; */
    width: 300px;
    height: 70px;
}
.buy {
    /* border: 1px solid red; */
    border-radius: 4px;
    padding: 15px;
    width: 180px;
    text-align: center;
    background: #00FF66;
    color: white;
    margin: 20px 0;
}
.buy:hover {
    background: lawngreen;
}
.enha .two {
    /* border: 2px solid green; */
    width: 49%;
    height: 100%;
    background-image: url(/img/ellipse.png);
    background-position: center;
    /* background-size: contain; */
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@media screen and (max-width: 768px) {
    .eeee {
        display: none;
    }
}
</style>