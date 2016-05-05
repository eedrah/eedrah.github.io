import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'
var scriptjs = require('scriptjs')

const reactApp = document.createElement('div')
document.body.appendChild(reactApp)

const routes = {
  path: '/',
  component: require('./App'),
  childRoutes: [
    {
      path: 'hello',
      getComponent: (location, cb) => {
        scriptjs('/HelloRepo/main.js', () => {
          console.log(HelloRepoVar)
          debugger
          cb(HelloRepoVar)
        })
      }
    }
  ]
}

render((<Router history={browserHistory} routes={routes} />), reactApp)
