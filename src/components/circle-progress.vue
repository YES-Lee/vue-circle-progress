<template>
  <div class="circle-progress-container">
    <svg version="1.1" class="circle-progress" viewbox="0 0 100 100" preserveAspectRatio="xMidYMid meet" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <circle class="progress-bg" :style="bgBarStyle" :stroke-width="barWidth + '%'" cx="50%" cy="50%" :r="circleRadius + '%'"></circle>
      <circle class="progress-bar" :style="barStyle" :stroke-width="barWidth + '%'" cx="50%" cy="50%" :r="circleRadius + '%'" :stroke-dasharray="len + '%'" :stroke-dashoffset="progress + '%'"></circle>
      <!-- <circle class="progress-dot" :cx="100 - barWidth / 2 + '%'" cy="50%" :r="barWidth / 6 + '%'" fill="#fff"></circle> -->
    </svg>
    <div class="progress-text-panel">
      <slot>
        <p class="progress-number">{{animatedProgress}}%</p>
      </slot>
    </div>
  </div>
</template>

<script>
import TweenLite from 'gsap/TweenLite'

export default {
  props: {
    value: {
      type: [Number, String],
      default: 0
    },
    duration: {
      type: Number,
      default: 500
    },
    barWidth: {
      type: [Number, String],
      default: 14
    },
    barStyle: {
      type: Object,
      default: () => ({
        stroke: '#f69626',
        fill: 'none',
        'stroke-linecap': 'round',
        'box-sizing': 'border-box'
      })
    },
    bgBarStyle: {
      type: Object,
      default: () => ({
        stroke: '#f1f1f6',
        fill: 'none',
        'box-sizing': 'border-box'
      })
    }
  },
  watch: {
    value (newVal) {
      if (!this.firstLoad) {
        this.tween(+newVal)
      }
    }
  },
  computed: {
    circleRadius () {
      return (100 - +this.barWidth) / 2
    },
    progress () {
      return (1 - this.animatedProgress / 100) * this.len
    },
    animatedProgress () {
      return this.tweenedProgress.toFixed(0)
    }
  },
  created () {
    this.len = Math.PI * 2 * this.circleRadius
  },
  mounted () {
    if (this.firstLoad) {
      this.tween(+this.value)
      this.firstLoad = false
    }
  },
  data () {
    return {
      len: 0,
      tweenedProgress: 0,
      firstLoad: true
    }
  },
  methods: {
    tween (value) {
      TweenLite.to(this.$data, +this.duration / 1000, { tweenedProgress: value })
    }
  }
}
</script>

<style lang="less" scoped>
.circle-progress-container {
  width: auto;
  height: 100%;
  position: relative;
  .progress-text-panel {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .progress-number {
      margin: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #f69626;
      font-size: 32px;
      font-weight: bold;
    }
  }
}
.circle-progress {
  box-sizing: border-box;
}
</style>
