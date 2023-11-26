<template>
  <div class="categories">
    <h1>Categories</h1>
    <h2>Browse By Category</h2>
    <div class="content">
      <div class="sub-content">
        <div class="cat">
          <div class="icon">
            <i class="material-symbols-outlined font-inc">smartphone</i>
          </div>
          <p>Phones</p>
        </div>
        <div class="cat">
          <div class="icon">
            <i class="material-symbols-outlined font-inc">computer</i>
          </div>
          <p>Computers</p>
        </div>
        <div class="cat">
          <div class="icon">
            <i class="material-symbols-outlined font-inc">watch</i>
          </div>
          <p>SmartWatch</p>
        </div>
        <div class="cat">
          <div class="icon">
            <i class="material-symbols-outlined font-inc">photo_camera</i>
          </div>
          <p>Camera</p>
        </div>
        <div class="cat">
          <div class="icon">
            <i class="material-symbols-outlined font-inc">headphones</i>
          </div>
          <p>HeadPhones</p>
        </div>
        <div class="cat">
          <div class="icon">
            <i class="material-symbols-outlined font-inc">stadia_controller</i>
          </div>
          <p>Gaming</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Categories",
  setup() {},
};
</script>

<style scoped>
.categories {
  width: 100%;
  height: auto;
  padding: 5rem;
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
.content {
  width: 100%;
  height: auto;
  margin: 1.875rem auto;
}
.sub-content {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
}
.cat {
  border: 1px solid black;
  width: 10rem;
  height: 8.125rem;
  border-radius: 5px;
  padding: 1.875rem;
  text-align: center;
}
.cat:hover {
  background: #db4444;
  cursor: pointer;
  transition: 0.3s;
  color: white;
  border: 0;
}
.icon {
  width: 3.125rem;
  height: 3.125rem;
  margin: 0px auto;
}
.cat p {
  margin-top: 0.625rem;
}
.font-inc {
  font-size: 2.8125rem;
}

@media screen and (max-width: 768px) {
  .categories {
    padding: 3.125rem 0.5rem;
  }
  h2 {
    font-size: 2.1875rem;
  }
  .content {
    overflow: auto;
  }
  .sub-content {
    width: 81rem;
  }
}
</style>