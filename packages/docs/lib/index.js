const fs = require('fs')
const path = require('path')

const compilerToHTML = require('./core/pages/index')
const { initGConf } = require('./core/g-conf')

module.exports = function (dir, env) {
  const projPath = path.resolve(process.cwd(), dir)
  const project = fs.readdirSync(projPath)
  const gConf = initGConf(project, projPath)
  compilerToHTML(project, projPath, gConf, env)
}
