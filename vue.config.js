module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': '@/assets/styles',
        'views': '@/views'
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '/api': '/mock'
        }
      }
    }

  },
}
