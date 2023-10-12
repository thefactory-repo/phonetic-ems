<script setup>
import { ref } from "vue";
import AudioIcon from "./icons/Audio.vue";

const props = defineProps([
  "isAudioPlaying",
  "playingAudioId",
  "audiosArr",
  "audioId",
  "audioTitle",
  "itemSubtitleOne",
  "itemSubtitleTwo",
  "percentAmount",
  "feedbackCost",
  "symbol",
  "speedSymbol",
]);

const emit = defineEmits(["onClick"]);

function onClick() {
  emit("onClick", props.audioId);
}
</script>

<template>
  <div class="item-box">
    <div class="item-box-upper">
      <div class="item-box-text">{{ props.audioTitle }}</div>
      <div class="item-box-icon">
        <button @click="onClick">
          <AudioIcon
            :isPlaying="playingAudioId === audioId ? isAudioPlaying : false"
          />
        </button>
      </div>
    </div>

    <div class="item-box-lower">
      <div class="item-box-amount">
        <span class="item-box-title">{{
          props.percentAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        }}</span>

        <div class="review">
          <p>{{ props.itemSubtitleOne }}</p>
        </div>

        <div class="icons" v-if="props.symbol">{{ props.symbol }}</div>

        <svg
          v-else
          class="icons-svg"
          width="27"
          height="22"
          viewBox="0 0 27 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.6523 6.76L23.0123 9.22667C23.8032 10.8041 24.1904 12.5531 24.1392 14.317C24.088 16.0808 23.6 17.8044 22.719 19.3333H4.23898C3.09387 17.3468 2.61937 15.0442 2.88583 12.7668C3.15229 10.4894 4.14553 8.35843 5.71828 6.6899C7.29104 5.02137 9.3596 3.90406 11.6173 3.50359C13.875 3.10313 16.2016 3.44084 18.2523 4.46667L20.719 2.82667C18.2076 1.21629 15.2287 0.494672 12.2588 0.777247C9.28892 1.05982 6.49957 2.33026 4.33697 4.38535C2.17437 6.44044 0.763462 9.16143 0.329936 12.1131C-0.10359 15.0647 0.465313 18.0765 1.94565 20.6667C2.17833 21.0697 2.51243 21.4048 2.91475 21.6387C3.31708 21.8726 3.77361 21.9972 4.23898 22H22.7056C23.1755 22.0019 23.6376 21.8795 24.045 21.6454C24.4524 21.4112 24.7907 21.0736 25.0256 20.6667C26.2541 18.5386 26.8707 16.1124 26.8071 13.6559C26.7436 11.1995 26.0025 8.80842 24.6656 6.74667L24.6523 6.76ZM11.599 15.88C11.8466 16.1279 12.1407 16.3246 12.4645 16.4588C12.7882 16.593 13.1352 16.6621 13.4856 16.6621C13.8361 16.6621 14.1831 16.593 14.5068 16.4588C14.8305 16.3246 15.1247 16.1279 15.3723 15.88L22.919 4.56L11.599 12.1067C11.351 12.3543 11.1544 12.6484 11.0202 12.9722C10.886 13.2959 10.8169 13.6429 10.8169 13.9933C10.8169 14.3438 10.886 14.6908 11.0202 15.0145C11.1544 15.3382 11.351 15.6323 11.599 15.88Z"
            fill="white"
          />
        </svg>
      </div>

      <div class="item-box-amount">
        <span class="item-box-title">{{
          props.feedbackCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        }}</span>
        <div class="review">
          <p>{{ props.itemSubtitleTwo }}</p>
        </div>
        <div class="icons">₸</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-box-icon {
  display: flex;
  justify-self: flex-end;
}

.item-box {
  background-color: #fbfbfb;
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 36px;
  padding: 40px 32px;
}
.item-box-upper {
  display: grid;
  grid-template-columns: 1fr min-content;
  justify-content: space-between;
}
.item-box-lower {
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1;
  grid-auto-rows: minmax(160px, auto);
  gap: 24px;
}

.item-box-text {
  font-size: 32px;
  font-weight: bold;
}

.item-box-title {
  font-weight: bold;
  color: #f4f400;
}

.item-box-amount {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #1c1d31;
  border-radius: 16px;
  text-align: center;
  font-size: 32px;
}

.review {
  font-size: 16px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 400;
}

.icons {
  color: #fbfbfb;
  font-size: 32px;
}

button {
  background-color: transparent;
  border: none;
}

@media screen and (max-width: 913px) {
  .item-box-lower {
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 570px) {
  .title {
    font-size: 24px;
    margin-right: 0;
    width: 100%;
  }
  .item-box-icon button svg {
    width: 80px;
    height: 80px;
  }
}

@media screen and (min-width: 914px) and (max-width: 1920px) and (orientation: landscape) {
  .item-box {
    padding: 20px 24px;
  }

  .review {
    font-size: 14px;
  }

  .item-box {
    gap: 20px;
  }

  .item-box-lower {
    gap: 20px;
    grid-auto-rows: minmax(128px, auto);
  }

  .item-box-amount {
    padding: 18px 12px;
    font-size: 24px;
  }

  .item-box-icon button svg {
    width: 80px;
    height: 80px;
  }

  .item-box-text {
    font-size: 24px;
  }
  .icons {
    font-size: 24px;
  }
}
@media screen and (min-width: 914px) and (max-width: 1024px) and (orientation: landscape) {
  .item-box-text {
    font-size: 16px;
  }
  .item-box-icon button svg {
    width: 60px;
    height: 60px;
  }
  .item-box-amount {
    padding: 14px 10px;
    font-size: 16px;
  }
  .icons {
    color: #fbfbfb;
    font-size: 16px;
  }
  .icons-svg {
    width: 16px;
  }
}
</style>
