<template>
  <div class="app">
    <LoaderStartPage v-if="loaderStartPage" />
    <LoaderFullPage v-if="loaderFullPage && !loaderStartPage" />
    <div
      class="app__under-pos"
      :class="{
        'app__under-pos--realtive':
          !loaderFullPage && !loaderStartPage,
      }"
    >
      <div class="app__cnt">
        <div class="app__cnt__header">
          <TopHeaderMenu />
        </div>
        <div class="app__cnt__body">
          <router-view class="app__views-pos" />
        </div>
        <div class="app__cnt__footer">
          footer footer footer footer
        </div>
      </div>
    </div>
    <div class="cursor" ref="cursorCircle"></div>
  </div>
</template>

<style lang="scss">
@import '@/assets/scss/app.scss';
</style>

<script>
import { computed, onMounted, ref } from 'vue'
import store from '@/store'
import LoaderFullPage from '@/components/loader/LoaderFullPage'
import LoaderStartPage from '@/components/loader/LoaderStartPage'
import TopHeaderMenu from '@/components/belts/TopHeaderMenu'

export default {
  components: {
    LoaderFullPage,
    LoaderStartPage,
    TopHeaderMenu,
  },
  setup() {
    const cursorCircle = ref(null)
    const loaderFullPage = computed(() => {
      return store.state.GlobalModule.loader.fullPage
    })

    const loaderStartPage = computed(() => {
      return store.state.GlobalModule.loader.startPage
    })

    onMounted(() => {
      mouseMoveCircle(cursorCircle)
    })

    storeStartPageStatus()

    return {
      loaderFullPage,
      loaderStartPage,
      cursorCircle,
    }
  },
}

const mouseMoveCircle = cursorCircle => {
  document.addEventListener('mousemove', e => {
    cursorCircle.value.setAttribute(
      'style',
      `top: ${e.pageY - 14}px; left: ${e.pageX - 16}px; opacity:1;`,
    )
  })
}

const storeStartPageStatus = () => {
  setTimeout(() => {
    store.commit('GlobalModule/SET_LOADER_START_PAGE', false)
  }, 2000)
}
</script>
