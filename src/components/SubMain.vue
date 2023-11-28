<template>
  <swiper
    ref="swiperRef"
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
import { register } from "swiper/element";
import {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { ref, onMounted } from "vue";
export default {
  name: "SubMain",
  setup() {
    const tops = ref([
      {
        id: 1,
        productName: "iPhone",
        image: "/img/endframe.png",
        logo: "phone_iphone",
      },
      {
        id: 2,
        productName: "Laptops",
        image: "/img/laptop.png",
        logo: "keyboard",
      },
      {
        id: 3,
        productName: "Speakers",
        image: "/img/speakers.png",
        logo: "volume_up",
      },
      {
        id: 4,
        productName: "Perfumes",
        image: "/img/perf.png",
        logo: "cleaning",
      },
      {
        id: 5,
        productName: "Play Station",
        image: "/img/ps5.png",
        logo: "stadia_controller",
      },
    ]);
    const onSwiper = (swiper) => {
      // console.log(swiper);
    };
    const onSlideChange = () => {
      // console.log("slide change");
    };

    onMounted(() => {
      console.log("MOUNTEDDDDDDDD");
    });
    return {
      modules: [Autoplay, Navigation, Pagination, Scrollbar, A11y],
      tops,
      onSwiper,
      onSlideChange,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style scoped>
.swippp {
  width: 100%;
  height: 100%;
}
.sub-main {
  padding-top: 1.875rem;
  background: #000000;
  width: 100%;
  height: 93%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
}
.sub1 {
  width: 21.875rem;
  height: 21.875rem;
  padding: 1.25rem 3.125rem 0rem 0rem;
  color: white;
}
.logo-box {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.font-inc {
  font-size: 2.5rem;
}
.logo {
  width: 2.8125rem;
  height: 2.8125rem;
  margin-right: 0.625rem;
}
.sub1 h1 {
  font-size: 3.125rem;
  line-height: 0.5rem;
}
.sub1 p {
  line-height: 0px;
  display: inline-block;
}
.sub2 {
  width: 25rem;
  height: 21.875rem;
}
.sub2 .image {
  width: 21.875rem;
  height: 18.75rem;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media screen and (max-width: 768px) {
  .sub-main {
    flex-direction: column;
    height: 100%;
  }
  .sub1 {
    height: 50%;
    width: 100%;
    text-align: center;
    padding: 0px;
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