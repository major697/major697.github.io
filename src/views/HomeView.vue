<template>
  <div class="cnt">
    <div class="cnt__left">
      <div class="cnt__title">
        <p>Hi, I am Michal.</p>
        <p>I am front end developer</p>
        <div class="cnt__title__bubble" id="bubble"></div>
      </div>
    </div>
    <div class="cnt__right">
      <BallStack :stack="stack" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/home.scss';
</style>

<script>
import { onMounted, ref } from 'vue'
import BallStack from '@/components/stack/BallStack'

export default {
  components: {
    BallStack,
  },
  name: 'Home',
  setup() {
    const stack = ref([
      'JavaScript',
      'PHP',
      'Vue.js',
      'React.js',
      'HTML',
      'CSS',
      'SCSS',
      'BEM',
      'Keycloak',
    ])
    // const count = (x, pos, factor) => {
    //   return x / factor - pos
    // }

    // const moveBubble = () => {
    //   const bubble = document.querySelector('#bubble')
    //   const topLeftF = 49
    //   const topLeftS = 41

    //   const topRightF = 51
    //   const topRightS = 67

    //   const bottomRightF = 58
    //   const bottomRightS = 33

    //   const bottomLeftF = 42
    //   const bottomLeftS = 59

    //   window.addEventListener('mousemove', e => {
    //     const mouseX = e.clientX
    //     const mouseY = e.clientY

    //     const countTopLeftF = count(mouseX, topLeftF, 5)
    //     const countTopLeftS = count(mouseY, topLeftS, 5)

    //     const countTopRightF = count(mouseX, topRightF, 5)
    //     const countTopRightS = count(mouseY, topRightS, 5)

    //     const countBottomLeftF = count(mouseX, bottomRightF, 5)
    //     const countBottomLeftS = count(mouseY, bottomRightS, 5)

    //     const countBottomRightF = count(mouseX, bottomLeftF, 5)
    //     const countBottomRightS = count(mouseY, bottomLeftS, 5)

    //     // console.log(x, y)
    //     bubble.style.borderRadius = `${countTopLeftF}% ${countTopRightF}% ${countBottomLeftF}% ${countBottomRightF}% / ${countTopLeftS}% ${countTopRightS}% ${countBottomLeftS}% ${countBottomRightS}%`
    //   })
    // }

    onMounted(() => {
      // moveBubble()
    })
    return { stack }
  },
}
</script>
