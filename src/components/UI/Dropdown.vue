<script setup>
import { useCalculatorStore } from "../../stores/data";
import { ref, computed, watch } from "vue";
import Dropdown from "primevue/dropdown";

const emit = defineEmits(["update:modelValue"]);
const props = defineProps({
  modelValue: {
    required: true,
    type: Object,
  },
  robotTasks: {
    required: true,
    type: Array,
  },
});

const model = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});
</script>

<template>
  <div class="select">
    <Dropdown
      v-model="model"
      :options="robotTasks"
      optionLabel="value"
      class="container-dropdown"
      id="task-select"
    >
      <template #value="slotProps">
        <div class="select-container">
          <div class="selected-value" v-if="slotProps.value">
            {{ slotProps.value.value }}
          </div>
        </div>
      </template>

      <template #dropdownicon>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#212121"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </template>
    </Dropdown>
  </div>
</template>

<style scoped>
.container-dropdown {
  width: 100%;
  background-color: #e8e8e8;
  border-radius: 2000px;
  border: 0;
  padding: 6px 20px;
}
.selected-value {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #1c1d2e;
  font-size: 20px;
}
</style>
