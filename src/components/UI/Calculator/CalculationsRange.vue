<script setup>
import { ref, computed, watch } from "vue";
import { useCalculatorStore } from "../../../stores/data";

const calculatorData = useCalculatorStore();

const props = defineProps({
  min: Number,
  max: Number,
});

const selectedRange = ref(0);
const minStr = "1000";

const currentStep = computed(() => {
  if (selectedRange.value < 10000) return 1000;
  if (selectedRange.value < 50000) return 5000;
  if (selectedRange.value < 100000) return 10000;
  if (selectedRange.value < 300000) return 50000;
  return 100000;
});

function setInputRange() {
  calculatorData.setSelectedValues("rangeValue", selectedRange);
}

watch(selectedRange, () => {
  if (selectedRange.value < 1000) selectedRange.value = 0;
});
</script>

<template>
  <div class="container">
    <span style="font-weight: bold; font-size: 20px">
      {{ selectedRange.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") }}
    </span>
    <input
      type="range"
      :min="props.min"
      :max="props.max"
      v-model="selectedRange"
      :step="currentStep"
      @input="setInputRange"
    />

    <div class="labels">
      <span> {{ minStr.replace(/\B(?=(\d{3})+(?!\d))/g, " ") }} </span>
      <span>{{
        props.max.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
      }}</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5px;
}

.labels {
  display: flex;
  justify-content: space-between;
}

.labels {
  color: #676767;
  font-size: 20px;
}
/* === range theme and appearance === */
input[type="range"] {
  font-size: 1.5rem;
  width: 100%;
}

input[type="range"] {
  color: #1c1d2e;
  --thumb-height: 1.125em;
  --track-height: 0.125em;
  --track-color: rgba(0, 0, 0, 0.2);
  --brightness-hover: 180%;
  --brightness-down: 80%;
  --clip-edges: 0.125em;
}

input[type="range"].win10-thumb {
  color: #2b2d42;

  --thumb-height: 10px;
  --thumb-width: 0.5em;
  --clip-edges: 0.0125em;
}

/* === range commons === */
input[type="range"] {
  position: relative;
  background: #fff0;
  overflow: hidden;
}

input[type="range"]:active {
  cursor: grabbing;
}

input[type="range"]:disabled {
  filter: grayscale(1);
  opacity: 0.3;
  cursor: not-allowed;
}

/* === WebKit specific styles === */
input[type="range"],
input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  transition: all ease 100ms;
  height: var(--thumb-height);
}

input[type="range"]::-webkit-slider-runnable-track,
input[type="range"]::-webkit-slider-thumb {
  position: relative;
}

input[type="range"]::-webkit-slider-thumb {
  --thumb-radius: calc((var(--thumb-height) * 0.5) - 1px);
  --clip-top: calc((var(--thumb-height) - var(--track-height)) * 0.5 - 0.5px);
  --clip-bottom: calc(var(--thumb-height) - var(--clip-top));
  --clip-further: calc(100% + 1px);
  --box-fill: calc(-100vmax - var(--thumb-width, var(--thumb-height))) 0 0
    100vmax currentColor;

  width: var(--thumb-width, var(--thumb-height));
  background: linear-gradient(currentColor 0 0) scroll no-repeat left center /
    50% calc(var(--track-height) + 1px);
  background-color: currentColor;
  box-shadow: var(--box-fill);
  border-radius: var(--thumb-width, var(--thumb-height));

  filter: brightness(100%);
  clip-path: polygon(
    100% -1px,
    var(--clip-edges) -1px,
    0 var(--clip-top),
    -100vmax var(--clip-top),
    -100vmax var(--clip-bottom),
    0 var(--clip-bottom),
    var(--clip-edges) 100%,
    var(--clip-further) var(--clip-further)
  );
}

input[type="range"]:hover::-webkit-slider-thumb {
  filter: brightness(var(--brightness-hover));
  cursor: grab;
}

input[type="range"]:active::-webkit-slider-thumb {
  filter: brightness(var(--brightness-down));
  cursor: grabbing;
}

input[type="range"]::-webkit-slider-runnable-track {
  background: linear-gradient(var(--track-color) 0 0) scroll no-repeat center /
    100% calc(var(--track-height) + 1px);
}

input[type="range"]:disabled::-webkit-slider-thumb {
  cursor: not-allowed;
}

/* === Firefox specific styles === */
input[type="range"],
input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-thumb {
  appearance: none;
  transition: all ease 100ms;
  height: var(--thumb-height);
}

input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-thumb,
input[type="range"]::-moz-range-progress {
  background: #fff0;
}

input[type="range"]::-moz-range-thumb {
  background: currentColor;
  border: 0;
  width: var(--thumb-width, var(--thumb-height));
  border-radius: var(--thumb-width, var(--thumb-height));
  cursor: grab;
}

input[type="range"]:active::-moz-range-thumb {
  cursor: grabbing;
}

input[type="range"]::-moz-range-track {
  width: 100%;
  background: var(--track-color);
}

input[type="range"]::-moz-range-progress {
  appearance: none;
  background: currentColor;
  transition-delay: 30ms;
}

input[type="range"]::-moz-range-track,
input[type="range"]::-moz-range-progress {
  height: calc(var(--track-height) + 1px);
  border-radius: var(--track-height);
}

input[type="range"]::-moz-range-thumb,
input[type="range"]::-moz-range-progress {
  filter: brightness(100%);
}

input[type="range"]:hover::-moz-range-thumb,
input[type="range"]:hover::-moz-range-progress {
  filter: brightness(var(--brightness-hover));
}

input[type="range"]:active::-moz-range-thumb,
input[type="range"]:active::-moz-range-progress {
  filter: brightness(var(--brightness-down));
}

input[type="range"]:disabled::-moz-range-thumb {
  cursor: not-allowed;
}
</style>
