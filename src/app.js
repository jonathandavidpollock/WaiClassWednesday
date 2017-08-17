const Server = require('./server.js')
const app = Server.app()
const port = (process.env.PORT || 8080 )

if(process.env.NODE_ENV !== 'production') {
  const webpack = require('webpack')
  const webpackDevMiddleWare = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const config = require('../webpack.dev.config')
  const compiler = webpack(config)

  app.use(webpackHotMiddleware(compiler))
  app.use(webpackDevMiddleWare(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

}

app.listen(port)
console.log(`Listening at port ${port}`);
