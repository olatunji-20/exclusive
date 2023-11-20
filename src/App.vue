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
}
html {
  scroll-behavior: smooth;
}
.router-link-exact-active {
  font-weight: 600;
  text-decoration: none;
}
.rlink {
  text-decoration: none;
  color: black;
}
</style>
