<script setup>
import { ref, onMounted } from "vue";
import InputRadio from "./UI/InputRadio.vue";
import closeBtn from "../assets/images/closeBtn.svg";
import { useCalculatorStore } from "../stores/data";

const props = defineProps({
  show: Boolean,
});
const calculatorData = useCalculatorStore();
const emit = defineEmits(["hideModal"]);

const crmSystems = calculatorData.crmSystems;
const integration = calculatorData.integration;
const averageTalkTime = calculatorData.averageRobotTalk;
const averageChech = calculatorData.averageChech;

const answers = ["Да", "Нет"];

const selectedTalk = ref(30);
const selectedValue = ref(5000);
const selectedAnswer = ref("");
const selectedSystem = ref("");
const selectedIntegration = ref("");

function setAverageChech(val) {
  calculatorData.setSelectedValues("selectedAverageChech", val.key);
}

function setRobotTalk(val) {
  calculatorData.setSelectedValues("selectedAverageTalk", val);
}

function setSystems(val) {
  calculatorData.setSelectedValues("selectedCrmSystem", val.value);
  calculatorData.setSelectedValues("selectedCrmCost", val.key);
}

function setIntegration(val) {
  calculatorData.setSelectedValues("selectedIntegration", val);
  calculatorData.setSelectedValues("selectedIntegrationCost", val.key);
}

function hideModal() {
  emit("hideModal", false);
}

function plusSeconds() {
  calculatorData.setSelectedValues(
    "selectedAverageTalk",
    (selectedTalk.value += 15)
  );
}

function minusSeconds() {
  if (calculatorData.selectedValues.selectedAverageTalk <= 15) return;
  calculatorData.setSelectedValues(
    "selectedAverageTalk",
    (selectedTalk.value -= 15)
  );
}

function plusChech() {
  calculatorData.setSelectedValues(
    "selectedAverageChech",
    (selectedValue.value += 5000)
  );
}
function minusChech() {
  if (calculatorData.selectedValues.selectedAverageChech <= 5000) return;
  calculatorData.setSelectedValues(
    "selectedAverageChech",
    (selectedValue.value -= 5000)
  );
}
</script>

<template>
  <div class="modal-container" @click="hideModal">
    <div class="modal">
      <div class="modal__content" @click.stop="click">
        <div class="content-container">
          <div class="content">
            <h2>Средний чек</h2>
            <div class="amount-btns">
              <button @click="minusChech" class="minus">- 5000</button>
              <div class="selectedVal">
                {{
                  selectedValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                }}
              </div>
              <button @click="plusChech" class="plus">+ 5000</button>
            </div>
            <div class="inputs">
              <div class="item" v-for="item in averageChech" :key="item.key">
                <input
                  type="radio"
                  :id="item.key"
                  v-model="selectedValue"
                  :value="item.key"
                  @change="setAverageChech(item)"
                />
                <label :for="item.key">
                  {{
                    item.key.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                  }}
                </label>
              </div>
            </div>
            <div class="message">
              <h2>Отправка по SMS</h2>
              <div class="item" v-for="answer in answers" :key="answer">
                <input
                  type="radio"
                  :id="answer"
                  v-model="selectedAnswer"
                  :value="answer"
                />
                <label :for="answer">
                  {{ answer }}
                </label>
              </div>
            </div>
            <h2 class="crm">Интеграция с CRM</h2>
            <div class="systems">
              <div class="item" v-for="system in crmSystems" :key="system.key">
                <input
                  type="radio"
                  :id="system.value"
                  v-model="selectedSystem"
                  :value="system.value"
                  @change="setSystems(system)"
                />
                <label :for="system.value">
                  {{ system.value }}
                </label>
              </div>
            </div>
          </div>
          <div class="content">
            <h2>Средняя длительность разговора (сек)</h2>
            <div class="amount-btns">
              <button @click="minusSeconds" class="minus">- 15 секунд</button>
              <div class="selectedVal">
                {{ selectedTalk }}
              </div>
              <button @click="plusSeconds" class="plus">+ 15 секунд</button>
            </div>
            <div class="inputs">
              <div class="item" v-for="item in averageTalkTime" :key="item.key">
                <input
                  type="radio"
                  :id="item.key"
                  v-model="selectedTalk"
                  :value="item.key"
                  @click="setRobotTalk(item.key)"
                />
                <label :for="item.key"> {{ item.key }} сек. </label>
              </div>
            </div>
            <h2 class="crm">Интеграция</h2>
            <div class="systems">
              <div class="item" v-for="system in integration" :key="system.key">
                <input
                  type="radio"
                  :id="system.value"
                  v-model="selectedIntegration"
                  :value="system.value"
                  @change="setIntegration(system)"
                />
                <label :for="system.value">
                  {{ system.value }}
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="close">
          <button @click="hideModal"><img :src="closeBtn" alt="" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="radio"] {
  /* Add if not using autoprefixer */
  -webkit-appearance: none;
  appearance: none;
  /* For iOS < 15 to remove gradient background */
  background-color: #fff;
  /* Not removed via appearance */
  margin: 0;
  font: inherit;
  color: currentColor;
  width: 24px;
  height: 24px;
  border: 1px solid rgba(143, 143, 143, 1);
  border-radius: 50%;
  display: grid;
  place-content: center;
}

input[type="radio"]::before {
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 50%;
  transform: scale(0);
  transition: 120ms transform ease-in-out;
  box-shadow: inset 1em 1em rgba(143, 143, 143, 1);
}

input[type="radio"]:checked::before {
  transform: scale(1);
}

h2 {
  color: #1c1d31;
}

.item {
  color: #1c1d31;
  display: flex;
  align-items: center;
  font-size: 24px;
  gap: 12px;
}
.crm {
  margin-top: 32px;
}
.systems {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.message {
  margin-top: 28px;
}
.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 24px;
}
.amount-btns {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-top: 20px;
}
.modal-container {
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
}

.modal {
  display: grid;
  place-items: center;
  height: 100%;
  padding: 0 60px;
  overscroll-behavior: contain;
  overflow: auto;
}

.modal__content {
  background-color: #ffffff;
  width: 100%;
  border-radius: 24px;
  padding: 32px 40px;
  display: grid;
  grid-template-columns: 1fr 40px;
  max-width: 1080px;
}

.content-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.minus {
  padding: 10px 16px;
  border: 1px solid #676767;
  border-radius: 20px;
  font-size: 24px;
  color: #676767;
}

.plus {
  padding: 10px 16px;
  border: 1px solid #29d11d;
  border-radius: 20px;
  font-size: 24px;
  color: #29d11d;
}

.selectedVal {
  font-size: 24px;
  color: #676767;
  font-weight: bold;
}

.item {
  font-size: 24px;
  padding-top: 12px;
}

input {
  margin-right: 15px;
}

@media screen and (max-width: 913px) {
  .content-container {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  .modal {
    padding: 40px 20px;
  }
}

@media screen and (max-width: 472px) {
  .modal {
    overflow: auto;
  }
  .amount-btns {
    flex-direction: column;
    align-items: start;
  }
  .selectedVal {
    order: 3;
  }
  .inputs {
    grid-template-columns: 1fr;
  }
  .systems {
    grid-template-columns: 1fr;
  }
}
</style>
