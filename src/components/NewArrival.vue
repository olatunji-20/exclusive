<template>
    <div class="categories">
      <h1>Featured</h1>
      <h2>New Arrival</h2>
      <div class="new">
        <div class="first">
            <img src="/img/ps5.png" class="p-img"/>
            <div class="play">
                <h4 style="line-height: 1px">PlayStation 5</h4>
                <p style="font-size: 14px; line-height: 14px">Black and white version of the PS5 coming out on sale</p>
                <p style="line-height: 3px;">Shop Now</p>
            </div>
        </div>

        <div class="second">
            <div class="one">
                <img src="/img/attractive.png" class="p-img"/>
                <div class="play">
                    <h4 style="line-height: 1px">Women's Collections</h4>
                    <p style="font-size: 14px; line-height: 14px">Featured women collection that gives you another vibe</p>
                    <p style="line-height: 3px;">Shop Now</p>
                </div>
            </div>
            <div class="two">
                <img src="/img/speakers.png" class="p-img2"/>
                <div class="play1">
                    <h4 style="line-height: 1px">Speakers</h4>
                    <p style="font-size: 14px; line-height: 14px">Amazon wireless speakers</p>
                    <p style="line-height: 3px;">Shop Now</p>
                </div>
            </div>
            <div class="three">
                <img src="/img/perf.png" class="p-img2"/>
                <div class="play1">
                    <h4 style="line-height: 1px">Perfumes</h4>
                    <p style="font-size: 14px; line-height: 14px">GUCCI INTENSE OUD EDP</p>
                    <p style="line-height: 3px;">Shop Now</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
      name: "NewArrival",
      setup() {
  
      }
  
  }
  </script>
  
  <style scoped>
  .categories {
      border: 3px solid blue;
      width: 100%;
      height: auto;
      padding: 50px 80px;
  }
  h1 {
      border-left: 20px solid blue;
      width: auto;
      height: 60px;
      padding: 15px;
  }
  h2 {
      font-size: 45px;
  }
  .new {
    border: 4px solid red;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
  }
  .first {
    border: 4px solid salmon;
    width: 48%;
    height: 100%;
    position: relative;
    padding: 5px;
    background: black;
  }
  .play {
    border: 1px solid green;
    width: 250px;
    height: auto;
    position: absolute;
    bottom: 10px;
    color: white;
  }
  .p-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
  .p-img2 {
    width: 100%;
    height: 100%;
    padding: 10px;
    object-fit: contain;
}
  .play1 {
    border: 1px solid red;
    width: 180px;
    height: auto;
    position: absolute;
    bottom: 10px;
    color: white
  }
  .second {
    border: 4px solid blue;
    width: 50%;
    height: 100%;
    display: grid;
    grid-template-areas: 'one one' 'two three';
    gap: 5px;
  }
  .one {
    border: 4px solid red;
    position: relative;
    height: 240px;
    grid-area: one;
  }
  .two {
    border: 4px solid green;
    position: relative;
    height: 240px;
    grid-area: two;
    background: black;
  }
  .three {
    border: 4px solid purple;
    position: relative;
    height: 240px;
    grid-area: three;
    background: black;
  }
  </style>