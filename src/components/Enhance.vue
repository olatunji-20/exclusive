<template>
  <section class="eeee">
    <div class="enha">
      <div class="one" data-aos="fade-left">
        <h4 style="color: #00ff66">Categories</h4>
        <h1>Enhance Your Music Experience</h1>
        <div class="time">
          <CountDown />
        </div>
        <router-link to="/all-products" class="rlink">
          <div class="buy">BUY NOW</div>
        </router-link>
      </div>
      <div class="two" data-aos="fade-up">
        <img src="/img/jbl.png" class="p-img" />
      </div>
    </div>
  </section>
</template>

<script>
import CountDown from "./CountDown.vue";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1500,
});

export default {
  name: "Enhance",
  components: {
    CountDown,
  },
};
</script>

<style scoped>
.eeee {
  width: 100%;
  height: 31.25rem;
  padding: 3.125rem 5rem;
  overflow: hidden;
}
.enha {
  background: black;
  width: 90%;
  height: 28.125rem;
  margin: 0px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  border-radius: 4px;
}
.one {
  width: 45%;
  height: 100%;
  padding: 1.25rem 0.625rem;
  color: white;
}
h1 {
  font-size: 2.5rem;
}
.time {
  width: 18.75rem;
  height: 4.375rem;
}
.buy {
  border-radius: 4px;
  padding: 0.9375rem;
  width: 11.25rem;
  text-align: center;
  background: #00ff66;
  color: white;
  margin: 1.25rem 0;
}
.buy:hover {
  background: lawngreen;
}
.enha .two {
  width: 49%;
  height: 100%;
  background-image: url(/img/ellipse.png);
  background-position: center;
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