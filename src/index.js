import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'
var scriptjs = require('scriptjs')

const reactApp = document.createElement('div')
document.body.appendChild(reactApp)

var getModule = function (module, callback) {
  scriptjs(`http://eedrah.com/${module}/main.js`, () => {
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
