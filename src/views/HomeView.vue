<script setup>
import { RouterLink } from "vue-router";
import Samples from "../components/Samples.vue";
import Options from "../components/Options.vue";
</script>

<template>
  <main class="homepage">
    <div class="top-section">
      <header class="header">
        <h1 class="title">Voice AI <span>Technology</span></h1>
        <p>Искусственный интеллект на благо вашей компании</p>
      </header>
      <RouterLink :to="'/samples'"> <Samples /></RouterLink>
    </div>
    <Options />
  </main>
</template>

<style scoped>
.homepage {
  display: flex;
  flex-direction: column;
  gap: 100px;
  margin-top: 100px;
}

.top-section {
  display: flex;
  flex-direction: column;
  gap: 80px;
}
.title {
  color: #ffffff;
  font-size: 72px;
  font-family: url("../assets/fonts/MakroXM-Bold.woff2");
  margin-bottom: 20px;
}
span {
  color: #ffeb3b;

  font-family: url("../assets/fonts/MakroXM-Bold.woff2");
}
p {
  color: #ffffff;
  font-size: 27px;
  font-family: Helvetica, sans-serif;
}

@media screen and (max-width: 913px) {
  .homepage {
    margin-top: 40px;
    gap: 24px;
  }

  .title {
    font-size: 46px;
  }

  .top-section {
    gap: 40px;
  }
}

@media screen and (min-width: 914px) and (max-width: 1920px) and (orientation: landscape) {
  .homepage {
    gap: 20px;
    flex-direction: row;
    margin-top: 40px;
  }

  .title {
    font-size: 64px;
  }

  .top-section {
    flex-direction: column-reverse;
    justify-content: start;
    gap: 40px;
    max-width: 520px;
  }
}
</style>
