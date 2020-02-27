const path = require('path')
const fs = require('fs')

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const moduleFileExtensions = [
  'js',
  'ts',
  'tsx',
  'json',
  'jsx',
]

const resolveModule = (resolveFn, filePath) => {
  const extension = moduleFileExtensions.find(extension =>
    fs.existsSync(resolveFn(`${filePath}.${extension}`))
  )

  if (extension) {
    return resolveFn(`${filePath}.${extension}`)
  }

  return resolveFn(`${filePath}.js`)
}

module.exports = {
  appPublic: resolveApp('public'),
  appHtml: resolveApp('public/index.html'),
  appIndexJs: resolveModule(resolveApp, 'public/index'),
  appSrc: resolveApp('lib'),
  appPackageJson: resolveApp('package.json'),
  appNodeModules: resolveApp('node_modules'),
}

module.exports.moduleFileExtensions = moduleFileExtensions
