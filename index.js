import circleProgress from './src/components/circleProgress'
circleProgress.install = (vue, options) => {
  vue.component('circle-progress', circleProgress)
}
export default circleProgress
