import { defineStore } from "pinia";
import { computed, nextTick, reactive, ref } from "vue";

export const useCalculatorStore = defineStore("calculator", () => {
  const settings = {
    b2b: {
      sleepingBase: {
        dial: "45.5",
        convinientToTalk: "42",
        achieveGoal: "10.5",
        deal: "5.6",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      rejectedBase: {
        dial: "35",
        convinientToTalk: "35",
        achieveGoal: "7",
        deal: "4.9",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      softCollection: {
        dial: "28",
        convinientToTalk: "35",
        achieveGoal: "8.4",
        deal: "7",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      reminderCall: {
        dial: "49",
        convinientToTalk: "53",
        achieveGoal: "56",
        deal: "56",
        title: "Конверсия в подтверждение",
        subTitle: "Конверсия в участие",
        callTitle: "Подтвердили участие, чел",
        callSubtitle: "Участники мероприятия",
      },
      qualityControl: {
        dial: "49",
        convinientToTalk: "42",
        achieveGoal: "56",
        deal: "10.5",
        title: "Конверсия в оценку",
        subTitle: "Конверсия в ответ на вопросы",
        callTitle: "Дают оценку, чел",
        callSubtitle: "Ответили на вопросы",
      },
      coldSaleGenNum: {
        dial: "28",
        convinientToTalk: "42",
        achieveGoal: "7",
        deal: "3.5",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      coldSaleOwnData: {
        dial: "38.5",
        convinientToTalk: "45.5",
        achieveGoal: "10.5",
        deal: "6.3",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      coldSaleGenBase: {
        dial: "42",
        convinientToTalk: "55",
        achieveGoal: "12.6",
        deal: "9.8",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      incomeCall: {
        dial: "70",
        convinientToTalk: "70",
        achieveGoal: "56",
        deal: "13.3",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
    },

    b2c: {
      sleepingBase: {
        dial: "65",
        convinientToTalk: "60",
        achieveGoal: "15",
        deal: "8",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      rejectedBase: {
        dial: "50",
        convinientToTalk: "50",
        achieveGoal: "10",
        deal: "7",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      softCollection: {
        dial: "40",
        convinientToTalk: "50",
        achieveGoal: "12",
        deal: "10",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      reminderCall: {
        dial: "70",
        convinientToTalk: "75",
        achieveGoal: "80",
        deal: "80",
        title: "Конверсия в подтверждение",
        subTitle: "Конверсия в участие",
        callTitle: "Подтвердили участие, чел",
        callSubtitle: "Участники мероприятия",
      },
      qualityControl: {
        dial: "70",
        convinientToTalk: "60",
        achieveGoal: "80",
        deal: "15",
        title: "Конверсия в оценку",
        subTitle: "Конверсия в ответ на вопросы",
        callTitle: "Дают оценку, чел",
        callSubtitle: "Ответили на вопросы",
      },
      coldSaleGenNum: {
        dial: "40",
        convinientToTalk: "60",
        achieveGoal: "10",
        deal: "5",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      coldSaleOwnData: {
        dial: "55",
        convinientToTalk: "65",
        achieveGoal: "15",
        deal: "9",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      coldSaleGenBase: {
        dial: "60",
        convinientToTalk: "78",
        achieveGoal: "18",
        deal: "14",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
      incomeCall: {
        dial: "100",
        convinientToTalk: "100",
        achieveGoal: "80",
        deal: "19",
        title: "Позитивный ответ на предложение",
        subTitle: "Конверсия в итоговый успех (продажу)",
        callTitle: "Интересно, чел",
        callSubtitle: "Итоговой успех (продажа)",
      },
    },
  };

  const robotLevels = reactive([
    {
      key: "exclsv",
      value: "EXCLSV",
      developCost: 1000000,
      rate: 1,
    },
    {
      key: "pro",
      value: "PRO",
      developCost: 400000,
      rate: 0.85,
    },
    {
      key: "basic",
      value: "BASIC",
      developCost: 250000,
      rate: 0.75,
    },
  ]);

  const baseRange = reactive({
    min: 0,
    max: 1000000,
  });

  const segmentButtons = reactive([
    {
      key: "b2b",
      value: "B2B",
    },
    {
      key: "b2c",
      value: "B2C",
    },
  ]);

  const robotTasks = reactive([
    {
      key: "sleepingBase",
      value: 'Активация "спящей базы клиентов"',
    },
    { key: "rejectedBase", value: 'Активация "базы отказов"' },
    { key: "softCollection", value: "Софт колекшн" },
    { key: "reminderCall", value: "Звонок напоминание" },
    { key: "qualityControl", value: "Контроль качества, NPS" },
    {
      key: "coldSaleGenNum",
      value: "Холодная продажа (сгенерированные номера)",
    },
    { key: "coldSaleOwnData", value: "Холодные продажи (собственная база)" },
    {
      key: "coldSaleGenBase",
      value: "Холодные продажи (сегметированная база)",
    },
    { key: "incomeCall", value: "Входящий звонок" },
  ]);

  const integration = reactive([
    {
      value: "Webhook",
      key: 45000,
    },
    {
      value: "Getcourse",
      key: 35000,
    },
    {
      value: "MedEl",
      key: 150000,
    },
  ]);

  const crmSystems = reactive([
    {
      key: 105000,
      value: "AmoCRM",
    },
    {
      key: 75000,
      value: "Bitrix24",
    },
    {
      key: 125000,
      value: "Другая своя",
    },
    {
      key: 0,
      value: "Excell",
    },
  ]);

  const averageRobotTalk = reactive([
    {
      key: 30,
    },
    {
      key: 60,
    },
    {
      key: 120,
    },
    {
      key: 180,
    },
    {
      key: 240,
    },
    {
      key: 300,
    },
    {
      key: 360,
    },
  ]);

  const robotTalkTariff = {
    oneMinut: {
      belowOne: 38,
      belowFive: 36,
      belowFifteen: 35,
      belowTwentyfive: 34,
      belowFiftyTh: 33,
    },
  };

  const averageChech = reactive([
    { key: 5000 },
    { key: 10000 },
    { key: 20000 },
    { key: 50000 },
    { key: 100000 },
  ]);

  const initialSettings = {
    selectedSegment: "b2b",
    rangeValue: baseRange.min,
    selectedTask: robotTasks[0].key,
    robotLevelKey: "exclsv",
    selectedRobotRate: robotLevels[0].rate,
    selectedRobotCost: robotLevels[0].developCost,
    selectedIntegration: "Webhook",
    selectedCrmSystem: "AmoCRM",
    selectedCrmCost: 0,
    selectedIntegrationCost: 0,
    selectedAverageTalk: 30,
    selectedAverageChech: 5000,
  };

  const selectedValues = reactive({
    ...initialSettings,
  });

  const callFunnelInfo = computed(() => {
    const dialValue = Math.floor(
      (selectedValues.rangeValue *
        settings[selectedValues.selectedSegment][selectedValues.selectedTask]
          .dial) /
        100
    );

    const convinientToTalkValue = Math.floor(
      (dialValue *
        settings[selectedValues.selectedSegment][selectedValues.selectedTask]
          .convinientToTalk) /
        100
    );

    const achieveGoalRate =
      settings[selectedValues.selectedSegment][selectedValues.selectedTask]
        .achieveGoal * selectedValues.selectedRobotRate;

    console.log("achieveGoalRate:", achieveGoalRate);

    const achieveGoalValue = Math.floor(
      ((convinientToTalkValue *
        settings[selectedValues.selectedSegment][selectedValues.selectedTask]
          .achieveGoal) /
        100) *
        selectedValues.selectedRobotRate
    );

    const dealValue = Math.floor(
      (achieveGoalValue *
        settings[selectedValues.selectedSegment][selectedValues.selectedTask]
          .deal) /
        100
    );

    console.log("dealValue:", dealValue);

    return {
      dial: dialValue,
      convinientToTalk: convinientToTalkValue,
      achieveGoal: achieveGoalValue,
      deal: dealValue,
    };
  });

  const implementationCostsInfo = computed(() => {
    const robotCallCost =
      (callFunnelInfo.value.dial *
        selectedValues.selectedAverageTalk *
        robotTalkTariff.oneMinut.belowOne) /
      60;

    const robotDevelopmentCost =
      selectedValues.selectedRobotCost +
      selectedValues.selectedCrmCost +
      selectedValues.selectedIntegrationCost;

    const costPrice = robotDevelopmentCost + robotCallCost;

    const firstMonthIncome =
      callFunnelInfo.value.deal * selectedValues.selectedAverageChech;

    const totalMinut =
      (callFunnelInfo.value.dial * selectedValues.selectedAverageTalk) / 60;

    const timeEconomy = Math.round(totalMinut / (8 * 60) / 0.7);

    const secondMonthTimeMinut =
      ((callFunnelInfo.value.dial * selectedValues.selectedAverageTalk) / 60) *
      1.2;

    const secondTimeEconomy = Math.round(
      secondMonthTimeMinut / (8 * 60) / 0.55
    );

    const secondMonthRobotCalls =
      secondMonthTimeMinut * robotTalkTariff.oneMinut.belowOne;

    // Итого себестоимость второй и последующие месяцы + другие сервисы, но других сервисов пока нет
    // const secondMonthSelfCost = secondMonthRobotCalls +
    return {
      robotCallCost,
      robotDevelopmentCost,
      costPrice,
      firstMonthIncome,
      timeEconomy,
      secondTimeEconomy,
      secondMonthRobotCalls,
    };
  });

  const renderComponent = ref(true);

  async function reRenderComponent() {
    renderComponent.value = false;

    await nextTick();

    renderComponent.value = true;
  }

  function resetSettings() {
    Object.assign(selectedValues, initialSettings);
    reRenderComponent();
  }

  function setSelectedValues(key, value) {
    selectedValues[key] = value;
  }

  return {
    robotLevels,
    segmentButtons,
    selectedValues,
    callFunnelInfo,
    setSelectedValues,
    baseRange,
    robotTasks,
    settings,
    integration,
    crmSystems,
    averageRobotTalk,
    implementationCostsInfo,
    averageChech,
    resetSettings,
    renderComponent,
  };
});
