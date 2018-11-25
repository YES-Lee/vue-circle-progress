import circleProgress from './src/components/circle-progress'
circleProgress.install = (vue, options) => {
  vue.component('circle-progress', circleProgress)
}
export default circleProgress
