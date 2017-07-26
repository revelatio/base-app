const express = require('express')
const { createApp } = require('./index')
const dev = process.env.NODE_ENV !== 'production'
const pkg = require('./package.json')

createApp(dev)
  .then(handler => {
    const server = express()
    server.get('*', handler)

    server.listen(process.env.PORT, '0.0.0.0', (err) => {
      if (err) throw err

      console.log(`${pkg.name} running on port ${process.env.PORT}`)
    })
  })

