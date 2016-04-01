import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'

const reactApp = document.createElement('div')
document.body.appendChild(reactApp)

const routes = {
  path: '/',
  component: require('./App'),
  childRoutes: [
    {
      path: 'hello',
      getComponent: (location, cb) => {
        require.ensure([], (require) => {
          cb(null, require('./chunkHelloRepo'))
        }, 'HelloRepo')
      }
    }
  ]
}

render((<Router history={browserHistory} routes={routes} />), reactApp)
