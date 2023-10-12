<script setup>
defineProps({
  title: String,
  subtitle: String,
  accent: {
    default: false,
    type: Boolean,
  },
});
</script>

<template>
  <div class="card" :class="{ 'accent-color': accent }">
    <div>
      <h2 v-if="title" class="title">{{ title }}</h2>

      <p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
    </div>

    <div>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.card {
  background-color: #fbfbfb;
  padding: 20px 40px 32px;
  border-radius: 24px;
  /* display: flex; */
  gap: 30px;
  flex-direction: column;
  /* justify-content: space-between; */
}

.accent-color {
  background-color: #f6f505 !important;
}

.title {
  color: #1c1d31;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
}

.subtitle {
  margin-top: 10px;
  color: #676767;
  font-size: 24px;
  font-weight: 300;
}

@media screen and (min-width: 914px) and (max-width: 1920px) and (orientation: landscape) {
  .title {
    font-size: 22px;
  }

  .subtitle {
    font-size: 18px;
  }

  .card {
    padding: 16px;
    gap: 8px;
  }
}
</style>
