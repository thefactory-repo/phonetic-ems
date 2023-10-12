<script setup>
import { ref, computed, reactive, watch, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useTitlesStore } from "../stores/titles";
import { useCalculatorStore } from "../stores/data";
import CalculationsCard from "../components/UI/Calculator/CalculationsCard.vue";
import CalculationsTable from "../components/UI/Calculator/CalculationsTable.vue";
import CalculationsRange from "../components/UI/Calculator/CalculationsRange.vue";
import CalculationsAccentInfo from "../components/UI/Calculator/CalculationsAccentInfo.vue";
import CalculationsButtonsLayout from "../components/UI/Calculator/CalculationsButtonsLayout.vue";
import SettingButton from "../components/SettingButton.vue";
import Dropdown from "../components/UI/Dropdown.vue";
import SettingSvg from "../assets/images/setting.svg";
import ResetBtn from "../assets/images/reset.svg";
import Modal from "../components/Modal.vue";

const route = useRouter();

const calculatorData = useCalculatorStore();

const segmentButtons = calculatorData.segmentButtons;
const robotLevel = calculatorData.robotLevels;
const baseRange = calculatorData.baseRange;
const robotTasks = calculatorData.robotTasks;

const selectedOption = ref();
onMounted(() => {
  selectedOption.value = robotTasks[0];
});

watch(selectedOption, (newValue) => {
  calculatorData.setSelectedValues("selectedTask", newValue.key);
});
// Позже надо переписать, почему-то не реактивный
// const selectedSettings = reactive(
//   calculatorData.settings[calculatorData.selectedValues.selectedSegment][
//     calculatorData.selectedValues.selectedTask
//   ]
// );

const conversion = computed(() => [
  {
    title: "Дозваниваемость",
    symbol: "%",
    secondaryText:
      calculatorData.settings[calculatorData.selectedValues.selectedSegment][
        calculatorData.selectedValues.selectedTask
      ].dial,
  },
  {
    title: "Удобно говорить",
    symbol: "%",
    secondaryText:
      calculatorData.settings[calculatorData.selectedValues.selectedSegment][
        calculatorData.selectedValues.selectedTask
      ].convinientToTalk,
  },
  {
    title:
      calculatorData.settings[calculatorData.selectedValues.selectedSegment][
        calculatorData.selectedValues.selectedTask
      ].title,
    symbol: "%",
    secondaryText: Math.floor(
      calculatorData.settings[calculatorData.selectedValues.selectedSegment][
        calculatorData.selectedValues.selectedTask
      ].achieveGoal * calculatorData.selectedValues.selectedRobotRate
    ),
  },
  {
    title:
      calculatorData.settings[calculatorData.selectedValues.selectedSegment][
        calculatorData.selectedValues.selectedTask
      ].subTitle,

    symbol: "%",
    secondaryText:
      calculatorData.settings[calculatorData.selectedValues.selectedSegment][
        calculatorData.selectedValues.selectedTask
      ].deal,
  },
]);

const callFunnel = computed(() => [
  {
    title: "Дозваниваемость, чел.",
    secondaryText: calculatorData.callFunnelInfo.dial,
  },
  {
    title: "Согласны говорить, чел.",
    secondaryText: calculatorData.callFunnelInfo.convinientToTalk,
  },
  {
    title:
      calculatorData.settings[calculatorData.selectedValues.selectedSegment][
        calculatorData.selectedValues.selectedTask
      ].callTitle,
    secondaryText: calculatorData.callFunnelInfo.achieveGoal,
  },
  {
    title:
      calculatorData.settings[calculatorData.selectedValues.selectedSegment][
        calculatorData.selectedValues.selectedTask
      ].callSubtitle,
    secondaryText: calculatorData.callFunnelInfo.deal,
  },
]);

const expences = computed(() => [
  {
    title: "Разработка робота",
    secondaryText: calculatorData.implementationCostsInfo.robotDevelopmentCost,
    symbol: "₸",
  },
  {
    title: "Звонки роботом",
    secondaryText: calculatorData.implementationCostsInfo.robotCallCost,
    symbol: "₸",
  },
  { title: "Другие сервисы", secondaryText: "-", symbol: "₸" },
]);

const totalFirstMonth = computed(() => [
  {
    text: "Себестоимость первого месяца",
    secondaryText: "Доход первого месяца",
    totalCost: calculatorData.implementationCostsInfo.costPrice,
    monthIncome: calculatorData.implementationCostsInfo.firstMonthIncome,
    economyText: "Экономия времени <br/> 1 сотрудника",
    economyTime: calculatorData.implementationCostsInfo.timeEconomy,
  },
]);

const totalSecondMonth = computed(() => [
  {
    text: "Себестоимость 2 след. месяцев",
    secondaryText: "Доход 2 след. месяцев",
    totalCost: calculatorData.implementationCostsInfo.secondMonthRobotCalls,
    monthIncome:
      calculatorData.implementationCostsInfo.firstMonthIncome +
      calculatorData.implementationCostsInfo.firstMonthIncome * 0.2,
    economyText: "Экономия времени <br/> 1 сотрудника",
    economyTime: calculatorData.implementationCostsInfo.secondTimeEconomy,
  },
]);

const show = ref(false);

function toggleModal(state) {
  show.value = state;
  // if (state) document.body.classList.add("modal-open");
  // else document.body.classList.remove("modal-open");
}

function resetSettings() {
  selectedOption.value = robotTasks[0];
  calculatorData.resetSettings();
}

onUnmounted(() => {
  resetSettings();
});
</script>

<template>
  <header class="header">
    <RouterLink to="/">
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="64" height="64" rx="32" fill="white" />
        <path
          d="M35.3333 23.6667L28.6666 32L35.3333 40.3334"
          stroke="#252527"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </RouterLink>

    <h1 class="title">
      <span> Рассчитать <span class="yellow">эффективность</span> </span> для
      вашего бизнеса
    </h1>
  </header>

  <div class="container-calc" v-if="calculatorData.renderComponent">
    <div class="card-col-layout">
      <div class="card-col-inside-layout">
        <CalculationsCard title="Вводные данные" subtitle="Сегмент рынка">
          <CalculationsButtonsLayout :buttons="segmentButtons" />
        </CalculationsCard>

        <CalculationsCard title="Задача робота">
          <Dropdown :robotTasks="robotTasks" v-model="selectedOption" />
        </CalculationsCard>
      </div>

      <div class="card-col-inside-layout">
        <CalculationsCard title="Выберите размер базы">
          <CalculationsRange :min="baseRange.min" :max="baseRange.max" />
        </CalculationsCard>
        <CalculationsCard title="Уровень обучения робота">
          <CalculationsButtonsLayout :buttons="robotLevel" robot />
        </CalculationsCard>
      </div>

      <div class="tablet-settings-btn">
        <SettingButton
          v-on:openModal="toggleModal"
          :show="show"
          :img="SettingSvg"
          subTitle="Дополнительные параметры"
        />
      </div>
    </div>

    <div class="card-col-layout">
      <CalculationsCard title="Конверсии">
        <CalculationsTable :data="conversion" />
      </CalculationsCard>

      <CalculationsCard title="Воронка звонков">
        <CalculationsTable :data="callFunnel" />
      </CalculationsCard>
      <div class="tablet-settings-btn">
        <SettingButton
          :img="ResetBtn"
          @click="resetSettings"
          subTitle="Сброс настроек"
        />
      </div>
    </div>

    <div class="card-bottom-container">
      <div class="card-col-layout card-bottom-calculations">
        <CalculationsCard accent>
          <CalculationsAccentInfo :data="totalFirstMonth" />
        </CalculationsCard>

        <CalculationsCard accent>
          <CalculationsAccentInfo :data="totalSecondMonth" />
        </CalculationsCard>
      </div>

      <div class="card-col-layout card-bottom-expences">
        <CalculationsCard title="Затраты на внедрение">
          <CalculationsTable :data="expences" />
        </CalculationsCard>
        <div class="settings">
          <SettingButton
            v-on:openModal="toggleModal"
            :show="show"
            :img="SettingSvg"
            subTitle="Дополнительные параметры"
          />
          <SettingButton
            :img="ResetBtn"
            @click="resetSettings"
            subTitle="Сброс настроек"
          />
        </div>
      </div>
    </div>
    <p class="warning">
      * Приведенные в таблице конверсии, являются усредненными. Построены на
      базе анализа эффективности работы робота Phonetic у наших клиентов и могут
      отличаться в зависимости от отрасли применения, базы для обзвона и скрипта
      разговора
    </p>
  </div>

  <Modal v-if="show" @hideModal="toggleModal"></Modal>
</template>

<style scoped>
.warning {
  color: #fff;
  font-size: 16px;
}

.yellow {
  color: rgba(248, 241, 23, 1);
}

.container-calc {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.card-bottom-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;
}

.card-col-inside-layout {
  grid-template-columns: minmax(100px, 1fr);
  display: grid;
  gap: 24px;
}

.card-col-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  gap: 24px;
}

.card-col-layout:not(:last-child) {
  padding-bottom: 30px;
  border-bottom: 2px solid #fff;
}

.settings {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.header {
  display: flex;
  color: white;
  margin-top: 80px;
  margin-bottom: 40px;
}

.title {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
  flex: 1;
  margin-right: 64px;
  text-align: center;
}

button {
  border: none;
  background-color: transparent;
}

.tablet-settings-btn {
  display: none;
}

@media screen and (max-width: 913px) {
  .card-col-layout {
    grid-template-columns: 1fr;
  }
  .title {
    font-size: 32px;
  }
}
@media screen and (max-width: 570px) {
  .title {
    font-size: 24px;
    margin-right: 0;
    width: 100%;
  }

  .header {
    flex-direction: column-reverse;
    gap: 24px;
    align-items: start;
  }
}
@media screen and (min-width: 914px) and (max-width: 1920px) and (orientation: landscape) {
  .title {
    font-size: 36px;
  }

  .container-calc {
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  .card-bottom-expences {
    order: 1;
  }

  .card-bottom-calculations {
    order: 2;
  }

  .card-col-layout,
  .card-col-inside-layout {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card-col-layout:not(:last-child) {
    padding-bottom: 0;
    border-bottom: 0;
  }

  .settings {
    display: none;
  }

  .card-bottom-container {
    gap: 8px;
  }

  .header {
    margin-top: 20px;
  }

  .tablet-settings-btn {
    display: flex;
    flex: 1;
    align-items: end;
  }
}
</style>
