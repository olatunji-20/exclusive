<template>
  <div class="categories">
    <h1>Featured</h1>
    <h2>New Arrival</h2>
    <div class="new">
      <div class="first" data-aos="slide-up">
        <img src="/img/ps5.png" class="p-img" />
        <div class="play">
          <h4 style="line-height: 1px">PlayStation 5</h4>
          <p style="font-size: 14px; line-height: 14px">
            Black and white version of the PS5 coming out on sale
          </p>
          <p style="line-height: 3px">Shop Now</p>
        </div>
      </div>

      <div class="second">
        <div class="one" data-aos="slide-up">
          <img src="/img/attractive.png" class="p-img" />
          <div class="play">
            <h4 style="line-height: 1px">Women's Collections</h4>
            <p style="font-size: 14px; line-height: 14px">
              Featured women collection that gives you another vibe
            </p>
            <p style="line-height: 3px">Shop Now</p>
          </div>
        </div>
        <div class="two" data-aos="slide-down" data-aos-delay="300">
          <img src="/img/speakers.png" class="p-img2" />
          <div class="play1">
            <h4 style="line-height: 1px">Speakers</h4>
            <p style="font-size: 14px; line-height: 14px">
              Amazon wireless speakers
            </p>
            <p style="line-height: 3px">Shop Now</p>
          </div>
        </div>
        <div class="three" data-aos="fade-down" data-aos-delay="300">
          <img src="/img/perf.png" class="p-img2" />
          <div class="play1">
            <h4 style="line-height: 1px">Perfumes</h4>
            <p style="font-size: 14px; line-height: 14px">
              GUCCI INTENSE OUD EDP
            </p>
            <p style="line-height: 3px">Shop Now</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
  duration: 1300,
});

export default {
  name: "NewArrival",
  setup() {},
};
</script>
  
  <style scoped>
.categories {
  width: 100%;
  height: auto;
  padding: 3.125rem 5rem;
}
h1 {
  border-left: 1.25rem solid #db4444;
  width: auto;
  height: 3.75rem;
  padding: 0.9375rem;
}
h2 {
  font-size: 2.8125rem;
}
.new {
  width: 100%;
  height: 31.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.first {
  width: 48%;
  height: 100%;
  position: relative;
  padding: 0.3125rem;
  background: black;
}
.play {
  width: 15.625rem;
  height: auto;
  padding-left: 0.1875rem;
  position: absolute;
  bottom: 0.625rem;
  color: white;
  bottom: 0px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.play:hover {
  bottom: 15px;
}
.p-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.p-img2 {
  width: 100%;
  height: 100%;
  padding: 0.625rem;
  object-fit: contain;
}
.play1 {
  width: 11.25rem;
  height: auto;
  position: absolute;
  padding-left: 0.1875rem;
  bottom: 10px;
  color: white;
  bottom: 0px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
}
.play1:hover {
  bottom: 15px;
}
.second {
  width: 50%;
  height: 100%;
  display: grid;
  grid-template-areas: "one one" "two three";
  gap: 5px;
}
.one {
  position: relative;
  height: 15rem;
  grid-area: one;
}
.two {
  position: relative;
  height: 15rem;
  grid-area: two;
  background: black;
}
.three {
  position: relative;
  height: 15rem;
  grid-area: three;
  background: black;
}

@media screen and (max-width: 768px) {
  .categories {
    padding: 3.125rem 0.5rem;
  }
  h2 {
    font-size: 2.1875em;
  }
  .new {
    height: auto;
    flex-direction: column;
  }
  .first {
    width: 100%;
    height: 25rem;
  }
  .second {
    width: 100%;
    height: 31.25rem;
  }
}
</style>