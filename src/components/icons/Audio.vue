<script setup>
defineProps(["isPlaying"]);
</script>

<template>
  <svg
    v-if="isPlaying"
    style="color: rgb(35, 37, 109)"
    xmlns="http://www.w3.org/2000/svg"
    width="92"
    height="92"
    fill="none"
    class="bi bi-pause-circle-fill"
    viewBox="0 0 16 16"
  >
    <path
      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.25 5C5.56 5 5 5.56 5 6.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C7.5 5.56 6.94 5 6.25 5zm3.5 0c-.69 0-1.25.56-1.25 1.25v3.5a1.25 1.25 0 1 0 2.5 0v-3.5C11 5.56 10.44 5 9.75 5z"
      fill="rgb(35, 37, 109)"
    ></path>
  </svg>
  <svg
    v-else
    width="92"
    height="92"
    viewBox="0 0 92 92"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="46" cy="46" r="46" fill="url(#paint0_linear_3_677)" />
    <path
      d="M58.5001 42.3908C59.7455 43.1112 60.5834 44.4578 60.5834 46C60.5834 47.5423 59.7455 48.8888 58.5001 49.6093M58.5001 35.7917C63.2548 36.7568 66.8334 40.9605 66.8334 46C66.8334 51.0395 63.2548 55.2431 58.5001 56.2083M36.6943 36.8376L45.5834 30.1738C48.3302 28.1147 52.2501 30.0737 52.2501 33.5057V58.4943C52.2501 61.9263 48.3302 63.8853 45.5834 61.8261L36.6943 55.1623C35.9732 54.6217 35.0963 54.3295 34.195 54.3295H29.3334C27.0322 54.3295 25.1667 52.4649 25.1667 50.1648V41.8352C25.1667 39.5351 27.0322 37.6704 29.3334 37.6704H34.195C35.0963 37.6704 35.9732 37.3782 36.6943 36.8376Z"
      stroke="white"
      stroke-width="3.125"
      stroke-linecap="round"
    />

    <defs>
      <linearGradient
        id="paint0_linear_3_677"
        x1="17.5"
        y1="9"
        x2="81"
        y2="80"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#383A6B" />
        <stop offset="1" stop-color="#252BBC" />
      </linearGradient>
    </defs>
  </svg>
</template>
