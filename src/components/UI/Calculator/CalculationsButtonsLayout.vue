<script setup>
import { ref, onMounted, watch } from "vue";
import { useCalculatorStore } from "../../../stores/data";

const calculatorData = useCalculatorStore();

const props = defineProps({
  buttons: Array,
  robot: {
    default: false,
    type: Boolean,
  },
});

const selectedButton = ref(props.buttons[0].key);

function selectButton(btn) {
  selectedButton.value = props.buttons.find((item) => item.key === btn.key).key;
  calculatorData.setSelectedValues(
    props.robot ? "robotLevelKey" : "selectedSegment",
    btn.key
  );

  if (btn.developCost) {
    calculatorData.setSelectedValues("selectedRobotCost", btn.developCost);
  }
  if (props.robot) {
    calculatorData.setSelectedValues("selectedRobotRate", btn.rate);
  }
}
</script>

<template>
  <div class="button-container">
    <button
      class="card-button"
      :class="selectedButton === button.key && 'active'"
      v-for="button in buttons"
      :key="button.key"
      @click="selectButton(button)"
    >
      {{ button.value }}
    </button>
  </div>
</template>

<style scoped>
.button-container {
  display: flex;
  gap: 20px;
  background-color: #e8e8e8;
  border-radius: 8888px;
}

.card-button {
  font-size: 24px;
  flex: 1;
  text-align: center;
  background-color: transparent;
  border: 0;
  padding-block: 15px;
  border-radius: 8888px;
  color: #1c1d2e;
}

.active {
  background-color: #1c1d2e;
  color: #fff;
}
@media screen and (min-width: 914px) and (max-width: 1920px) and (orientation: landscape) {
  .card-button {
    font-size: 18px;
    padding-block: 10px;
  }
}
</style>
