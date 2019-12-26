const packager = require('electron-packager')
const path = require('path')
const pkg = require('../package')

const resourcesPath = path.join(__dirname, '..', 'resources')

packager({
  buildVersion: pkg.version,
  dir: path.join(__dirname, '..'),
  asar: true,
  overwrite: true,
  electronVersion: pkg.electronVersion,
  icon: path.join(resourcesPath, 'icos', 'Icon'),
  out: path.join(__dirname, '..', 'dist', 'out'),
  platform: 'win32',
  arch: 'x64',
  appBundleId: `li.zihua.${pkg.name}`,  
})
