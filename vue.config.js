module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/vue-circle-progress/' : '/',
  assetsDir: process.env.NODE_ENV === 'production' ? './' : '',
  outputDir: 'docs'
}
