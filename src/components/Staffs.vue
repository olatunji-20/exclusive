<template>
  <div class="large">
    <swiper 
    class="low"
    :modules="modules"
    :slidesPerView="4"
    navigation
    :spaceBetween="20"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{
    delay: 1500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    }"     
    >
        <swiper-slide v-for="staff in productStore.staffs" :key="staff.id" class="staff-card">
            <div class="image">
                <img :src="staff.imageUrl" :alt="staff.name" class="p-img" />
            </div>
            <h2>{{ staff.name }}</h2>
            <p>{{ staff.position }}</p>
            <div class="social">
                <div class="media">
                   <img src="/img/facebook.svg" class="p-img2" />
                </div>
                <div class="media">
                    <img src="/img/linkedin.svg" class="p-img2" />
                </div>
                <div class="media">
                    <img src="/img/twitter.svg" class="p-img2" />
                </div>
            </div>
        </swiper-slide>
        
    </swiper>
  </div>
</template>

<script>
import {  Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ref } from 'vue';
import { useProductStore } from "../stores/productStore";

export default {
    name: 'Staffs',
    setup() {
        const productStore = useProductStore();
        productStore.getStaffs();
        
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        
        return {
            modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
            onSwiper,
            onSlideChange,
            productStore
        }
    },
    components: {
        Swiper,
        SwiperSlide
    }
}
</script>

<style scoped>
.large {
    /* border: 6px solid brown; */
    width: 100%;
    height: auto;
    padding: 80px;
}
.low {
    /* border: 6px solid green; */
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.staff-card {
    border: 1px solid #f5f5f5;
    width: 250px;
    height: 420px;
    border-radius: 4px;
}
.staff-card .image {
    /* border: 3px solid blue; */
    width: 100%;
    height: 300px;
    background: #f5f5f5;
}

.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
h2 {
    line-height: 15px;
}
p {
    line-height: 10px;
}
.social {
    /* border: 1px solid blue; */
    width: 70px;
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.media {
    /* border: 1px solid red; */
    width: 18px;
    height: 18px;
    background: #808080;
}
.p-img2 {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

@media screen and (max-width: 768px) {
    .large {
        display: none;
    }
}

</style>