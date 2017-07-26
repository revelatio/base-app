const next = require('next')
const { router, get } = require('microrouter')

const slasher = handler => (req, res) => {
  if (req.url === '') {
    req.url = '/'
  }

  return handler(req, res)
}

const createApp = dev => {
  const app = next({ dev })
  const handler = app.getRequestHandler()

  const routes = router(
    get('/index/:id', (req, res) => app.render(req, res, '/', req.params)),
    handler
  )

  return app.prepare()
    .then(() => slasher(routes))
}

const serverlessHandler = (req, res) => createApp(false).then(handler => handler(req, res))

module.exports.createApp = createApp
module.exports.handler = serverlessHandler
