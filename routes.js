
const routes = require('next-routes')()
routes
  .add('index', '/index/:id', '/')
  .add('resource', '/resource/:id', '/resource')

module.exports = routes
