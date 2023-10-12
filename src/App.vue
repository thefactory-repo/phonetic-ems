<script setup>
import { RouterLink, RouterView } from "vue-router";
import MainHeader from "./components/MainHeader.vue";
import Logo from "./components/icons/Logo.vue";

import { useRoute } from "vue-router";
</script>

<template>
  <div class="container">
    <Logo class="logo" />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  max-width: 1080px;
  padding: 0 60px 20px;
  margin-inline: auto;
}

.logo {
  text-align: center;
}

@media screen and (max-width: 913px) {
  .container {
    padding-inline: 20px;
  }
}

@media screen and (min-width: 914px) and (max-width: 1920px) and (orientation: landscape) {
  .container {
    max-width: 1280px;
    padding-inline: 40px;
  }
}
</style>
