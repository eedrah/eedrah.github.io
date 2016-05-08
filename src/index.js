import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'
var scriptjs = require('scriptjs')

const reactApp = document.createElement('div')
document.body.appendChild(reactApp)

const isProd = process.env.NODE_ENV === 'production'

var getModule = function (module, callback) {
  const address = isProd
    ? `http://eedrah.com/${module}/main.js`
    : 'http://localhost:8080/main.js'
  scriptjs(address, () => {
    console.log(window[module + 'Var'])
    callback(null, window[module + 'Var'])
  })
}

const routes = {
  path: '/',
  component: require('./App'),
  childRoutes: [
    {
      path: 'hello',
      getComponent: (location, callback) => {
        getModule('HelloRepo', callback)
      }
    }
  ]
}

render((<Router history={browserHistory} routes={routes} />), reactApp)
