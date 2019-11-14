const {
  override,
  overrideDevServer,
  fixBabelImports,
  addLessLoader,
  addDecoratorsLegacy,
  addBabelPlugins,
  disableEsLint,
  addBundleVisualizer,
  addWebpackPlugin,
  addWebpackAlias,
  disableChunk,
} = require('customize-cra');

const path = require('path');
const webpack = require('webpack');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const devServerConfig = () => config => {
  return {
    ...config,
    proxy: {
      '/api/*': {
        target: 'http://localhost:9090',
        changeOrigin: true,
        secure: false
      }
    }
  }
}

const spiltCssChunks = () => config => {
  
  if (config.mode === "production") {
    // config.optimization.splitChunks = {
    //   chunks: 'async',
    // };
  }
  console.log(config)


  return config;
}

module.exports = {
  webpack: override(
    disableEsLint(),

    // spiltCssChunks(),
  
    addDecoratorsLegacy(),
  
    // ...addBabelPlugins(
    //   ['@babel/plugin-proposal-decorators', { legacy: true }],
    //   ['@babel/plugin-proposal-class-properties', { loose: true }]
    // ),
    
    addBundleVisualizer({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: false,
      logLevel: 'info'
    }),
  
    addWebpackAlias({
      '@': path.resolve(__dirname, 'src'),
      '@ant-design/icons/lib/dist$': path.resolve(__dirname, 'src/icons/index.js')
    }),
     
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    }),
  
    fixBabelImports("lodash", {
      libraryDirectory: "",
      camel2DashComponentName: false
    }),
  
    addLessLoader({
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#3697ff',
        '@border-radius-base': '2px',
        '@btn-border-radius-base': '4px',
        '@outline-width': '0px',
        '@border-color-base': '#e9e9e9'
      },
      localIdentName: '[local]--[hash:base64:5]'
    }),

    
    // addWebpackPlugin(
    //   new webpack.optimize.ModuleConcatenationPlugin(),
    // )
  ),

  devServer: overrideDevServer(
    devServerConfig()
  )
}