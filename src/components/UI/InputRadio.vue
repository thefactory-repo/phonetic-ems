<script setup>
import { ref } from "vue";

const emit = defineEmits("selectedAmount");
const props = defineProps();

const amounts = [5000, 10000, 20000, 50000, 100000];
const selectedValue = ref();

function selectedAmount(id) {
  emit("selectedAmount", id);
}
</script>

<template>
  <div class="item" v-for="item in amounts" :key="item">
    <input type="radio" :id="item" v-model="selectedValue" :value="item" />
    <label :for="item">
      {{ item }}
    </label>
  </div>
</template>

<style scoped></style>
