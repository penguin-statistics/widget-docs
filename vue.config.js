const webpack = require('webpack')

let commitHash

function cmdOutput (cmd) {
  const out = require('child_process')
    .execSync(cmd)
    .toString()
    .replace(/\n/g, '')
  return JSON.stringify(out).trim() || '0'
}

try {
  commitHash = cmdOutput('git rev-parse --short HEAD') || 'unknown'
} catch (e) {
  commitHash = 'unknown'
}

const buildTime = cmdOutput('date +%s')

module.exports = {
  lintOnSave: false,
  assetsDir: '_docs',

  pluginOptions: {
    i18n: {
      locale: 'zh',
      fallbackLocale: 'zh',
      localeDir: 'locales',
      enableInSFC: false
    }
  },

  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        GIT_COMMIT: commitHash,
        BUILD_TIME: buildTime
      })
    ]
  },

  chainWebpack: config => {
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('raw-loader')
      .loader('raw-loader')
  }
}
