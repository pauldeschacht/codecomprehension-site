const { resolve } = require('path')

module.exports = {
  build: {
    rollupOptions: {
      input: [resolve(__dirname, 'index.html'),resolve(__dirname, 'survey.html')]
      // main: resolve(__dirname, 'index.html'),
      // survey: resolve(__dirname, 'nested/index.html')
    }
  }
}