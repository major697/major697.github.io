<template>
  <div class="loader-start">
    <div class="loader-start__title">
      <p class="loader-start__title__text">{{ name }}</p>
      <p class="loader-start__title__text__small">
        {{ jobs }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/loader/loaderStartPage.scss';
</style>

<script>
import { reactive } from 'vue'

export default {
  name: 'LoaderStartPage',
  setup() {
    const state = reactive({
      name: 'Michał Głowacki',
      jobs: 'Full Stack Developer',
    })

    return {
      ...state,
    }
  },
}
</script>
