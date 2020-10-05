<template>
  <div class="ball" id="ballThree"></div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/stack/ballStack.scss';
</style>

<script>
import { onMounted } from 'vue'
import skillsThreeJs from '@/scripts/skills.three'

export default {
  name: 'BallStack',
  props: {
    stack: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    onMounted(() => {
      const ballThree = document.querySelector('#ballThree')
      // skillsThreeJs(ballThree)
      ballThree.appendChild(
        skillsThreeJs(ballThree, props.stack).domElement,
      )
    })
  },
}
</script>

<style lang="scss" scoped>
.ball {
  margin: 0;
  padding: 0;
  background-color: hsl(230, 29%, 31%);
  width: 100%;
  height: 100%;
}
canvas {
  display: block;
  margin: 0;
}
</style>
