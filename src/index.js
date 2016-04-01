import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route } from 'react-router'

const reactApp = document.createElement('div')
document.body.appendChild(reactApp)

render((
  <Router history={browserHistory}>
    <Route path='/' component={require('./App')}>
      {require('./HelloRoute')}
    </Route>
  </Router>
), reactApp)
