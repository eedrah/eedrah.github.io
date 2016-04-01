import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router } from 'react-router'

const reactApp = document.createElement('div')
document.body.appendChild(reactApp)

const routes = {
  path: '/',
  component: require('./App'),
  childRoutes: [
    require('./HelloRoute')
  ]
}

render((<Router history={browserHistory} routes={routes} />), reactApp)
