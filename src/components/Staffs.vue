<template>
  <div class="large">
    <swiper
     class="low"
    :modules="modules"
    :slides-per-page="3"
    :space-between="20"
    :loop="true"
    navigation
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{
    delay: 500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    }"     
     >
        <swiper-slide v-for="staff in staffs" :key="staff.id" class="card">
            <h2>{{ staff.name }}</h2>
            <h1>{{ staff.position }}</h1>
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

export default {
    name: 'Staffs',
    setup() {
        const staffs = ref([
            {
                id: 1,
                name: "nfuiofrwa",
                position: "nwgonre",
                imageUrl: "knbrgr"
            },
            {
                id: 2,
                name: "nfuiofrwa",
                position: "nwgonre",
                imageUrl: "knbrgr"
            },
            {
                id: 3,
                name: "nfuiofrwa",
                position: "nwgonre",
                imageUrl: "knbrgr"
            },
            {
                id: 4,
                name: "nfuiofrwa",
                position: "nwgonre",
                imageUrl: "knbrgr"
            },
            {
                id: 5,
                name: "nfuiofrwa",
                position: "nwgonre",
                imageUrl: "knbrgr"
            },
            {
                id: 6,
                name: "nfuiofrwa",
                position: "nwgonre",
                imageUrl: "knbrgr"
            }
        ]);
        
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log("slide change");
        };
        
        return {
            staffs,
            modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
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
.large {
    border: 6px solid brown;
    width: 100%;
    height: auto;
    padding: 50px;
}
.low {
    border: 3px solid green;
    width: 100%;
    height: 410px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
}
.card {
    border: 6px solid red;
    width: 300px;
    height: 400px;
}
</style>