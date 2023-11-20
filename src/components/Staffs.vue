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
                <div class="media"></div>
                <div class="media"></div>
                <div class="media"></div>
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
    border: 6px solid brown;
    width: 100%;
    height: auto;
    padding: 50px;
}
.low {
    border: 6px solid green;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.staff-card {
    border: 4px solid purple;
    width: 250px;
    height: 420px;
}
.staff-card .image {
    border: 3px solid blue;
    width: 100%;
    height: 300px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
h2 {
    line-height: 5px;
}
p {
    line-height: 10px;
}
.social {
    border: 1px solid blue;
    width: 100px;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.media {
    border: 1px solid red;
    width: 25px;
    height: 25px;
}

</style>