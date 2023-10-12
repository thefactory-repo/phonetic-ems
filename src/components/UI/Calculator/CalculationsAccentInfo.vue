<script setup>
import { useCalculatorStore } from "../../../stores/data";

defineProps({
  data: {
    default: [],
    type: Array,
  },
});
</script>

<template>
  <div>
    <div v-for="item in data" :key="item.totalCost">
      <div>
        <p class="title">{{ item.text }}</p>
        <p class="value">
          {{ item.totalCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
        </p>
      </div>

      <div>
        <p class="title">{{ item.secondaryText }}</p>
        <p class="value">
          {{
            item.monthIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
        </p>
      </div>
      <div class="flex">
        <p class="title" v-html="item.economyText"></p>
        <p class="value">
          {{
            item.economyTime.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
          }}
          Дн.
        </p>
      </div>
    </div>
  </div>
</template>

<!--  <div style="display: flex; gap: 20px">
    <p class="title">Экономия времени 1 сотрудника</p>
    <p class="value">24 дня</p>
  </div> -->
<style scoped>
.text-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.title {
  font-size: 24px;
  font-weight: 400;
  color: #676767;
  margin-bottom: 10px;
}

.value {
  font-size: 32px;
  font-weight: bold;
  color: #1c1d31;
  flex-shrink: 0;
  margin-bottom: 16px;
}

.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media screen and (min-width: 914px) and (max-width: 1920px) and (orientation: landscape) {
  .title {
    font-size: 18px;
    margin-bottom: 0;
  }

  .value {
    font-size: 24px;
    margin-bottom: 12px;
  }
}
</style>
