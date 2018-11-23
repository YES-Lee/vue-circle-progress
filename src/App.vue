<template>
  <div id="app">
    <div class="progress">
      <circle-progress :value="progress" :duration="duration" />
    </div>
    <input type="range" v-model="progress">
  </div>
</template>

<script>
import circleProgress from './components/circle-progress.vue'

export default {
  name: 'app',
  components: {
    circleProgress
  },
  mounted () {
  },
  data () {
    return {
      progress: 50,
      duration: 500
    }
  }
}
</script>

<style lang="less">
#app {
  text-align: center;
  .progress {
    height: 200px;
    width: 200px;
    margin: 0 auto;
  }
}
</style>
