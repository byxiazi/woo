
const { themeFactory, FrameworkEnum } = require('./theme')
const configFactory = require('../../../scripts/webpack-config')
const devServer = require('../../../scripts/webpack-dev-server')

module.exports = function (project, projPath, gConf, env) {
  const { themeConfig, framework = FrameworkEnum.React } = gConf.config
  themeFactory(framework, themeConfig)
  const devConf = configFactory(gConf, env)
  devServer(devConf)
}
