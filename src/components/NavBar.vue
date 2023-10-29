<template>
  <header>
    <div class="logo"></div>
    <nav class="nav">
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Sign Up</li>
      </ul>
    </nav>
    <div class="menu">
      <div class="search"></div>
      <div class="fave"></div>
      <div class="cart"></div>
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