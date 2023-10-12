<script setup>
defineProps({
  data: {
    default: [],
    type: Array,
  },
});
</script>

<template>
  <div class="table-container">
    <div v-for="item in data" class="table-item">
      <!-- <p v-if="item.subtitle" class="table-title">{{ item.subtitle }}</p> -->
      <p class="table-title">
        {{ item.title }}
      </p>
      <p class="table-value">
        {{
          item.secondaryText.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        }}
        {{ item.symbol }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.table-item:not(:last-child) {
  margin-bottom: 16px;
}

.table-item {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 3px;
}

.table-value {
  margin-top: 8px;
}
.table-title {
  color: #676767;
  font-weight: 300;
  font-size: 24px;
  margin-top: 8px;
}

.table-value {
  color: rgba(28, 29, 49, 1);
  font-size: 20px;
  text-align: end;
  font-weight: 600;
  width: 100%;
  min-width: max-content;
}

@media screen and (max-width: 570px) {
  .table-title {
    font-size: 18px;
  }
  .table-item {
    grid-template-columns: 1fr;
    gap: 4px;
  }
  .table-value {
    text-align: start;
  }
}
@media screen and (min-width: 914px) and (max-width: 1920px) and (orientation: landscape) {
  .table-title {
    font-size: 18px;
  }

  .table-item:not(:last-child) {
    margin-bottom: 8px;
  }
}
</style>
