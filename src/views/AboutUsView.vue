<script setup>

</script>

<template>
  <div class="about-us">
    <div class="about-us__row-1">
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
          О технологии и компании <span class="yellow">Phonetic</span>
        </h1>
      </header>
    </div>

    <div class="about-us__row-2">
      <iframe class="about-us__frame" src="https://phonetic.thefactory.kz/simple/page.html"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about-us {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 87.5px - 40px);

  &__row-1 {}

  &__row-2 {
    flex-grow: 1;
  }

  &__frame {
    width: 100%;
    height: 100%;
  }

  @media all and (max-width: 914px) {
    height: calc(100vh - 87.5px - 60px);
  }
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

.yellow {
  color: rgba(248, 241, 23, 1);
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
}
</style>