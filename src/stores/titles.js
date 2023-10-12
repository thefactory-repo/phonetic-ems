import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useTitlesStore = defineStore("titles", () => {
  const titles = ref([
    "Примеры общения робота",
    "Пообщаться с роботом сейчас",
    "Рассчитать эффективность для вашего бизнеса",
  ]);
  
  return { titles };
});
