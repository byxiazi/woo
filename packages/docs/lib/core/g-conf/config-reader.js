const fs = require('fs')
// const path = require('path')
// const _readdir = require('fs-readdir-recursive');
const setting = require('../../../conf/setting')


module.exports = class ConfigReader {
  constructor (confDirPath) {
    this.confDirPath = confDirPath
    this.init()
  }

  init() {
    this.filenames = fs.readdirSync(this.confDirPath)
  }

  getConfig() {
    let conf
    if (this.filenames.includes(setting.gConfName)) {
      conf = require(this.confDirPath, setting.gConfName)
    }
    return conf
  }

  getReact() {

  }

  getVue() {

  }

}
