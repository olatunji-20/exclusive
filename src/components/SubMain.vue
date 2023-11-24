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
        <swiper-slide v-for="top in tops" :key="top.id" class="sub-main">
          <div class="sub1">
            <div class="logo-box">
                <div class="logo">
                  <i class="material-symbols-outlined font-inc">{{ top.logo }}</i>
                </div>
                <p>{{ top.productName }}</p>
            </div>
              <h1>Up to 10%</h1>
              <h1>off Voucher</h1>
              <p>Shop Now</p>
          </div>
          <div class="sub2">
              <div class="image">
                  <img :src="top.image" :alt="top.productName" class="p-img" />
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
                image: "/img/endframe.png",
                logo: "phone_iphone"
            },
            {
                id: 2,
                productName: "Laptops",
                image: "/img/laptop.png",
                logo: "keyboard"
            },
            {
                id: 3,
                productName: "Speakers",
                image: "/img/speakers.png",
                logo: "volume_up"
            },
            {
                id: 4,
                productName: "Perfumes",
                image: "/img/perf.png",
                logo: "cleaning"
            },
            {
                id: 5,
                productName: "Play Station",
                image: "/img/ps5.png",
                logo: "stadia_controller"
            }
        ]);
        const onSwiper = (swiper) => {
            // console.log(swiper);
        };
        const onSlideChange = () => {
            // console.log("slide change");
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
    /* border: 3px solid tomato; */
    width: 100%;
    height: 100%;
}
.sub-main {
    /* border: 4px solid greenyellow; */
    background: black;
    width: 100%;
    height: 93%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
}
.sub1 {
    /* border: 4px solid brown; */
    width: 350px;
    height: 300px;
    padding: 20px 50px 0px 0px;
    color: white;
}
.logo-box {
    /* border: 2px solid blue; */
    /* width: 150px; */
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
}
.font-inc {
    font-size: 40px;
}
.logo {
    /* border: 2px solid red; */
    width: 45px;
    height: 45px;
    margin-right: 10px;
    /* display: inline-block; */
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
    /* border: 4px solid brown; */
    width: 400px;
    height: 300px;
}
.sub2 .image {
    /* border: 2px solid blueviolet; */
    width: 350px;
    height: 300px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

@media screen and (max-width: 768px) {
    .sub-main{
        flex-direction: column;
        height: 100%;
    }
    .sub1 {
        height: 50%;
        width: 100%;
        text-align: center;
    }
    .sub1 h1 {
        font-size: 30px;
    }
    .sub2 {
        height: 50%;
        width: 100%;
    }
    .sub2 .image {
        margin: 0px auto;
    }
}


</style>