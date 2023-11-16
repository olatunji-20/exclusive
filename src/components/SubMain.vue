<template>
    <swiper 
        class="swippp"
        :modules="modules"
        :slides-per-page="1"
        :space-between="20"
        :loop="true"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :autoplay="{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        }"
    >
        <swiper-slide v-for="hero in tops" :key="hero.id" class="sub-main">
          <div class="sub1">
              <div class="logo"></div>
              <p style="position: relative; bottom: 15px">{{ hero.productName }}</p>
              <h1>Up to 10%</h1>
              <h1>off Voucher</h1>
              <p>Shop Now</p>
          </div>
          <div class="sub2">
              <div class="image">
                  <img src="/img/endframe.png" class="p-img" />
              </div>
          </div>
        </swiper-slide>
    </swiper>
</template>

<script>
import {  Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ref } from 'vue'
export default {
    name: 'SubMain',
    setup() {
        const tops = ref([
            {
                id: 1,
                productName: "iPhone",
                image: "/rfrf/",
                logo: "/frifi/"
            },
            {
                id: 2,
                productName: "samsung",
                image: "/rfrf/",
                logo: "/frifi/"
            },
            {
                id: 3,
                productName: "nokia",
                image: "/rfrf/",
                logo: "/frifi/"
            },
            {
                id: 4,
                productName: "tecno",
                image: "/rfrf/",
                logo: "/frifi/"
            }
        ]);
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        return {
            modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
            tops,
            onSwiper,
            onSlideChange,
        }
    },
    components: {
        Swiper,
        SwiperSlide
    }
}
</script>

<style scoped>
.swippp {
    border: 6px solid tomato;
    width: 100%;
    height: 100%;
}
.sub-main {
    border: 2px solid greenyellow;
    width: 100%;
    height: 93%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
}
.sub1 {
    border: 2px solid red;
    width: 350px;
    height: 300px;
    padding: 20px 50px 0px 0px;
    background: black;
    color: white;
}
.logo {
    border: 2px solid red;
    width: 45px;
    height: 45px;
    margin-right: 10px;
    display: inline-block;
}
.sub1 h1 {
    font-size: 50px;
    line-height: 8px;
}
.sub1 p {
    line-height: 0px;
    display: inline-block;
}
.sub2 {
    border: 2px solid red;
    width: 400px;
    height: 300px;
}
.sub2 .image {
    border: 2px solid blueviolet;
    width: 300px;
    height: 250px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>