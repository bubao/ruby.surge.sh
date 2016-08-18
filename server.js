const koa = require('koa')
const mount = require('koa-mount')
const views = require('koa-views')
const assets = require('./config/assets')
const actions = require('./config/actions')

const server = koa()

server.use(mount('/assets', assets))
server.use(views('./views', {
  map: {
    html: 'nunjucks'
  }
}))

server.use(actions.index)

server.listen(4567, () => {
  console.log('* Listening on http://localhost:4567')
  console.log('* Use Ctrl-C to stop')
})
