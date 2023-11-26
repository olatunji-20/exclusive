<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0px !important;
  font-family: "Montserrat", sans-serif;
}
#app {
  color: #404040;
}
html {
  scroll-behavior: smooth;
}
.router-link-exact-active {
  font-weight: 500;
  text-decoration: none;
}
.rlink {
  text-decoration: none;
  color: #4d4d4d;
}
</style>
