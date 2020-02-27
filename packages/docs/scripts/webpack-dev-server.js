const webpack = require('webpack')
const middleware = require('webpack-dev-middleware')
const express = require('express')

const app = express()

module.exports = function (config) {
  const compiler = webpack(config)

  app.use(
    middleware(compiler, {
      publicPath: config.output.publicPath
    })
  )

  app.listen(3000, () => console.log('Example app listening on port 3000!'))
}
