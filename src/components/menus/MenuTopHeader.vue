<template>
  <div class="container__menu">
    <ItemMenu
      v-for="route in listRoute"
      :key="route.name"
      :list="route"
    />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/belts/topHeaderMenu.scss';
</style>

<script>
import { useRouter } from 'vue-router'
import ItemMenu from '@/components/menus/ItemMenu'

export default {
  name: 'MenuTopHeader',
  components: {
    ItemMenu,
  },
  setup() {
    const listRoute = useRouter().options.routes

    return { listRoute }
  },
}
</script>
