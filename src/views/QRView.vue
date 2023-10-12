<script setup>
import { useTitlesStore } from "../stores/titles";
import { useRouter } from "vue-router";
import qrImg from "../assets/images/qr.png";

const route = useRouter();

const headerTitle = useTitlesStore();
</script>

<template>
  <div class="main">
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
        Пообщаться с роботом <span class="yellow">сейчас</span>
      </h1>
    </header>
    <div class="container">
      <div class="main-qr-container">
        <div class="main-qr">
          <div class="qr">
            <img :src="qrImg" alt="" />
          </div>
        </div>
        <div class="qr-text">Отсканируйте QR-код</div>
      </div>
      <div>
        <div>
          <div class="qr-phone">+7 (708) 596 84 42</div>
          <div class="qr-phone-text">
            <div>Позвоните по этому номеру</div>
            <div>и поговорите с роботом</div>
          </div>
        </div>

        <footer>
          <div class="footer-main-text">Бот из Марса</div>
          <div class="footer-text">
            Lörem ipsum pror tetran för att kang. Hemism vonade kontranaskade
            fast preplavis. Mirtad ett egovefaskap. Eurossade monor krohälig
            pevare astronick förutom bysall gåpp sofara rebyde hemiv por.
            Eurossade monor krohälig pevare astronick förutom bysall gåpp
            sofara.
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 80px;
}

.header {
  display: flex;
  color: white;
  margin-top: 80px;
}

.yellow {
  color: rgba(246, 250, 8, 1);
}
.title {
  font-size: 40px;
  flex: 1;
  margin-right: 64px;
  text-align: center;
}

button {
  border: none;
  background-color: transparent;
}
.main-qr-container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.main-qr {
  padding: 60px;
  background-color: #ffffff;
  width: 100%;
  aspect-ratio: 1/1;
  max-width: 552px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 32px;
}

.qr-text {
  font-weight: bold;
  width: 360px;
  background-color: yellow;
  display: flex;
  justify-content: center;
  margin-top: -40px;
  font-size: 24px;
  padding: 23px 42px;
  border-radius: 20px;
}

.qr-phone {
  text-align: center;
  color: #ffffff;
  font-size: 56px;
}

.qr-phone-text {
  color: #c3cad4;
  font-size: 24px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
  margin-bottom: 80px;
  margin-inline: auto;
}

.footer-main-text {
  color: #ffffff;
  font-size: 48px;
  margin-bottom: 30px;
}

.footer-text {
  max-width: 632px;
  color: #c3cad4;
  font-size: 24px;
  line-height: 33.12px;
}

.qr img {
  width: 100%;
}

@media screen and (max-width: 913px) {
  .title {
    font-size: 32px;
  }
  .qr-phone {
    font-size: 32px;
  }
  .main-qr-container {
    margin-top: 50px;
  }
}

@media screen and (max-width: 570px) {
  .container {
    margin-top: 60px;
  }

  .title {
    font-size: 24px;
    margin-right: 0;
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

  .container {
    flex-direction: row;
    gap: 60px;
    margin-top: 60px;
  }

  .main-qr {
    max-width: 462px;
  }
  .qr-phone {
    text-align: start;
  }
  .qr-phone-text {
    align-items: start;
  }
  .header {
    margin-top: 20px;
  }
}
</style>
