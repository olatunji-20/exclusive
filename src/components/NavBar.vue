<template>
  <header>
    <div class="logo">
      <img src="/img/exclusive.svg" class="p-img" />
    </div>
    <nav class="nav">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li>Sign Up</li>
      </ul>
    </nav>
    <div class="menu">
      <div class="search"></div>
      <div class="fave"></div>
      <router-link to="/cart-page">
          <div class="cart">

          </div>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
header {
    border: 2px solid green;
    width: 100%;
    height: 100px;
    padding: 25px 0px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}
.logo {
  border: 1px solid pink;
  width: 200px;
  height: 50px;
}
.p-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}
.nav {
  border: 1px solid red;
  width: auto;
  height: 50px;
}
ul li {
  display: inline-block;
  padding: 0px 20px;
}
.menu {
  border: 2px solid blue;
  width: 320px;
  height: 44px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.search {
  border: 1px solid green;
  height: 40px;
  width: 200px;
}
.fave {
  border: 1px solid green;
  height: 40px;
  width: 40px;
}
.cart {
  border: 1px solid green;
  height: 40px;
  width: 40px;
}
</style>