<script setup>
import Item from "../components/RobotItem.vue";
import { useTitlesStore } from "../stores/titles";
import { RouterLink, useRouter } from "vue-router";
import caseBussiness from "../assets/audio/case-bussiness.mp3";
import caseCredit from "../assets/audio/case-credit.mp3";
import caseInsurance from "../assets/audio/case-insurance.mp3";
import caseMarketing from "../assets/audio/case-marketing.mp3";
import caseOperator from "../assets/audio/case-operator.mp3";
import caseServices from "../assets/audio/case-services.mp3";
import { ref, onUnmounted } from "vue";

const route = useRouter();
const audioSamples = [
  {
    id: 1,
    audio: caseBussiness,
    title: "Голосовой бот для бизнеса",
    itemSubTitleOne: "количество отзывов",
    itemSubTitleTwo: "стоимость отзыва",
    feedbackAmount: "+175,4%",
    feedbackCost: "-39,60%",
    symbol: "%",
  },
  {
    id: 2,
    audio: caseCredit,
    title: "Робот оператор для телефона",
    itemSubTitleOne: "стоимость отзыва",
    itemSubTitleTwo: "пропущенных звонков",
    feedbackAmount: ">0,01%",
    feedbackCost: "-42,5%",
    symbol: "%",
  },
  {
    id: 3,
    audio: caseInsurance,
    title: "Речевой робот для страховой",
    itemSubTitleOne: "конверсия звонок сделка",
    itemSubTitleTwo: "рост продаж",
    feedbackAmount: "4,30%",
    feedbackCost: "+17,4%",
    symbol: "%",
  },
  {
    id: 4,
    audio: caseMarketing,
    title: "Робот для маркетинга-опрос",
    itemSubTitleOne: "анкет в неделю",
    itemSubTitleTwo: "снижение затрат",
    feedbackAmount: ">16000",
    feedbackCost: "-19,6%",
    symbol: "%",
  },
  {
    id: 5,
    audio: caseOperator,
    title: "МФО робот для кредитования",
    itemSubTitleOne: "конверсия звонок сделка",
    itemSubTitleTwo: "Звонков в день",
    feedbackAmount: "7,25%",
    feedbackCost: ">35000",
    symbol: "%",
  },
  {
    id: 6,
    audio: caseServices,
    title: "Робот для сферы услуг",
    itemSubTitleOne: "повешение скорости",
    itemSubTitleTwo: "скорость соединения",
    feedbackAmount: "X8",
    feedbackCost: "2 сек",
  },
];

const isAudioPlaying = ref(false);
const playingAudioId = ref(null);

const audioBussines = new Audio(audioSamples[0].audio);
const audioCredit = new Audio(audioSamples[1].audio);
const audioInsurance = new Audio(audioSamples[2].audio);
const audioMarketing = new Audio(audioSamples[3].audio);
const audioOperator = new Audio(audioSamples[4].audio);
const audioServices = new Audio(audioSamples[5].audio);

function stopAllAudio(id) {
  audioBussines.pause();
  audioCredit.pause();
  audioInsurance.pause();
  audioMarketing.pause();
  audioOperator.pause();
  audioServices.pause();
  isAudioPlaying.value = false;
  playingAudioId.value = id;
}

function toggleAudio(id) {
  playingAudioId.value = id;
  if (id === 1) {
    if (audioBussines.paused) {
      stopAllAudio(id);
      audioBussines.play();
      isAudioPlaying.value = true;
    } else {
      audioBussines.pause();
      isAudioPlaying.value = false;
    }
  } else if (id === 2) {
    if (audioCredit.paused) {
      stopAllAudio(id);
      audioCredit.play();
      isAudioPlaying.value = true;
    } else {
      audioCredit.pause();
      isAudioPlaying.value = false;
    }
  } else if (id === 3) {
    if (audioInsurance.paused) {
      stopAllAudio(id);
      audioInsurance.play();
      isAudioPlaying.value = true;
    } else {
      audioInsurance.pause();
      isAudioPlaying.value = false;
    }
  } else if (id === 4) {
    if (audioMarketing.paused) {
      stopAllAudio(id);
      audioMarketing.play();
      isAudioPlaying.value = true;
    } else {
      audioMarketing.pause();
      isAudioPlaying.value = false;
    }
  } else if (id === 5) {
    if (audioOperator.paused) {
      stopAllAudio(id);
      audioOperator.play();
      isAudioPlaying.value = true;
    } else {
      audioOperator.pause();
      isAudioPlaying.value = false;
    }
  } else if (id === 6) {
    if (audioServices.paused) {
      stopAllAudio(id);
      audioServices.play();
      isAudioPlaying.value = true;
    } else {
      audioServices.pause();
      isAudioPlaying.value = false;
    }
  }
}

onUnmounted(() => {
  stopAllAudio();
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
    <h1 class="title">Примеры общения <span class="yellow">робота</span></h1>
  </header>
  <div class="main">
    <Item
      v-for="item in audioSamples"
      @onClick="toggleAudio"
      :key="item.title"
      :audiosArr="audioSamples.map((item) => item.audio)"
      :audioId="item.id"
      :audioTitle="item.title"
      :itemSubtitleOne="item.itemSubTitleOne"
      :itemSubtitleTwo="item.itemSubTitleTwo"
      :feedbackCost="item.feedbackCost"
      :percentAmount="item.feedbackAmount"
      :symbol="item.symbol"
      :speedSymbol="item.speedSymbol"
      :isAudioPlaying="isAudioPlaying"
      :playingAudioId="playingAudioId"
    />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  color: white;
  margin-top: 80px;
}
h1 {
  font-size: 40px;
  flex: 1;
}

.yellow {
  color: rgba(255, 235, 59, 1);
}
.title {
  margin-right: 64px;
  text-align: center;
}

button {
  border: none;
  background-color: transparent;
}

.main {
  gap: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 100px;
}

@media screen and (max-width: 913px) {
  .main {
    margin-top: 50px;
  }
}

@media screen and (max-width: 792px) {
  .main {
    grid-template-columns: 1fr;
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
  .main {
    grid-template-columns: repeat(3, 1fr);

    margin-top: 30px;
  }
  .title {
    font-size: 36px;
  }
  .header {
    margin-top: 20px;
  }
}
</style>
