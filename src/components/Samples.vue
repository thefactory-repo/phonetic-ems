<script>
import RobotItem from "./RobotItem.vue";
</script>

<template>
  <div class="robot-samples">
    <div class="sample-text-btn">
      <button class="sample-btn">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.0711 22.3571L27.0711 12.929M27.0711 12.929L17.643 12.929M27.0711 12.929L12.929 27.0711"
            stroke="white"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div class="sample-text">
        <p>Послушать примеры общения робота</p>
      </div>
    </div>
    <div class="sample-icon">
      <img src="../assets/images/playIcon.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.sample-text-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
}

.sample-btn {
  background-color: transparent;
  border: none;
  margin-bottom: 60px;
}
.robot-samples {
  background: url("../assets/images/div.card.png");
  padding: 40px 50px 40px 40px;
  display: flex;
  border-radius: 24px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: space-between;
}
.sample-text {
  font-size: 40px;
  width: 100%;
  max-width: 389px;

  color: #ffffff;
  font-weight: 400;
}

@media screen and (max-width: 913px) {
  .sample-icon {
    display: none;
  }

  .robot-samples {
    flex-wrap: wrap;
  }
}

@media screen and (min-width: 914px) and (max-width: 1920px) and (orientation: landscape) {
  .robot-samples {
    height: 274px;
    padding: 26px 20px;
  }

  .sample-text {
    font-size: 30px;
  }
}

@media screen and (max-width: 570px) {
  .sample-text {
    font-size: 24px;
  }
}
</style>
