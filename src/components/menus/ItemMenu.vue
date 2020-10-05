<template>
  <router-link
    v-if="list.meta.showMenu"
    :to="{ name: list.name }"
    class="element"
    >{{ list.meta.nameMenu }}</router-link
  >
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/menus/itemMenu.scss';
</style>

<script>
export default {
  name: 'ItemMenu',
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
