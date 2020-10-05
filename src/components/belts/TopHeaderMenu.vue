<template>
  <div class="container">
    <LogoTopHeader />
    <MenuTopHeader />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/belts/topHeaderMenu.scss';
</style>

<script>
import { useRouter } from 'vue-router'
import LogoTopHeader from '@/components/logo/LogoTopHeader'
import MenuTopHeader from '@/components/menus/MenuTopHeader'

export default {
  name: 'TopHeaderMenu',
  components: {
    LogoTopHeader,
    MenuTopHeader,
  },
  setup() {
    const router = useRouter()
    const logoName = 'michal'

    const homePage = () => router.push({ name: 'Home' })

    return { logoName, homePage }
  },
}
</script>
