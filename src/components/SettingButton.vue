<script setup>
const emit = defineEmits(["openModal"]);

function onClick() {
  if (props.show) return;
  emit("openModal", true);
}

const props = defineProps({
  img: String,
  subTitle: String,
  show: Boolean,
});
</script>
<template>
  <button @click="onClick" class="btn">
    <img :src="props.img" alt="setting" />
    <span>{{ subTitle }}</span>
  </button>
</template>

<style scoped>
.btn {
  display: flex;
  background-color: #878787;
  border-radius: 24px;
  padding: 30px;
  gap: 15px;
  align-items: center;
}
span {
  font-size: 24px;
  color: #fff;
  text-align: left;
}

@media screen and (min-width: 914px) and (max-width: 1920px) and (orientation: landscape) {
  .btn {
    flex: 1;
    padding: 12px;
  }

  span {
    font-size: 18px;
  }
}
</style>
