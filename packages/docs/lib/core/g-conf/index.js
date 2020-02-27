const path = require('path')
const ConfigReader = require('./config-reader')
const gDefaultConf = require('./default-global-config')
const setting = require('../../../conf/setting')

class GConf {
  constructor (projDir, projPath) {
    this.projDir = projDir
    this.projPath = projPath
    this.config = gDefaultConf
    this.init()
  }

  init() {
    if (this.projDir.includes(setting.gConfDir)) {
      this.initCReader()
    }
  }

  initCReader() {
    const pathname = path.resolve(this.projPath, setting.gConfDir)
    this.cReader = new ConfigReader(pathname)
    const conf = this.cReader.getConfig()
    if (conf) this.config = conf
  }
}

exports.initGConf = function (projDir, projPath) {
  return new GConf(projDir, projPath)
}
