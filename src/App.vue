<template>
  <div id="app">
    <div class="control-bar">
      <input type="range" v-model="progress">
    </div>
    <div class="instances">
      <div class="progress">
        <circle-progress :value="progress" :duration="duration" />
      </div>
      <div class="progress">
        <circle-progress :value="progress" :duration="duration" :bar-width="28" />
      </div>
      <div class="progress">
        <circle-progress :value="progress" :duration="duration" bar-color="#00bcd4" bar-round />
      </div>
    </div>
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
  .control-bar {
    padding: 15px;
  }
  .instances {
    display: flex;
    flex-wrap: wrap;
    .progress {
      height: 200px;
      width: 200px;
      margin: 0 auto;
    }
  }
}
</style>
