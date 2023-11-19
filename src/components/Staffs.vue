<template>
  <div class="large">
    <swiper 
    class="low"
    :modules="modules"
    :slidesPerView="4"
    :loop="true"
    navigation
    :spaceBetween="20"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
    :autoplay="{
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    }"     
    >
        <swiper-slide v-for="staff in staffs" :key="staff.id" class="staff-card">
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
                name: "nfuiofrwa111",
                position: "nwgonre111",
                imageUrl: "knbrgr"
            },
            {
                id: 2,
                name: "nfuiofrwa222",
                position: "nwgonre222",
                imageUrl: "knbrgr"
            },
            {
                id: 3,
                name: "nfuio333frwa",
                position: "nw3333gonre",
                imageUrl: "knbrgr"
            },
            {
                id: 4,
                name: "nfui444ofrwa",
                position: "nw444gonre",
                imageUrl: "knbrgr"
            },
            {
                id: 5,
                name: "nfuio555frwa",
                position: "nw555gonre",
                imageUrl: "knbrgr"
            },
            {
                id: 6,
                name: "nfuiof666rwa",
                position: "nw666gonre",
                imageUrl: "knbrgr"
            },
            {
                id: 7,
                name: "nfuiof777rwa",
                position: "nw7777gonre",
                imageUrl: "knbrgr"
            },
            {
                id: 8,
                name: "nfuiof888rwa",
                position: "nw888gonre",
                imageUrl: "knbrgr"
            },
            {
                id: 9,
                name: "nfuiof999rwa",
                position: "nw999gonre",
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
    height: 400px;
}
</style>