<template>
  <div class="container__logo" @click="homePage">
    <span class="container__logo__tag app__rubber__vertical"
      >&lt;&nbsp;</span
    >
    <span class="container__logo">
      <span
        v-for="(name, i) in logoName"
        :key="i"
        class="app__rubber__horizontal container__logo__letter"
        >{{ name }}</span
      >
    </span>
    <span class="container__logo__tag app__rubber__vertical"
      >&nbsp;/&gt;</span
    >
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/belts/topHeaderMenu.scss';
</style>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'LogoTopHeader',

  setup() {
    const router = useRouter()
    const logoName = 'michal'

    const homePage = () => router.push({ name: 'Home' })

    return { logoName, homePage }
  },
}
</script>
