import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route } from 'react-router'

var reactApp = document.createElement('div')
document.body.appendChild(reactApp)

render((
  <Router history={browserHistory}>
    <Route path='/' component={require('./App')}>
      <Route path='test' component={require('./Testing')} />
    </Route>
  </Router>
), reactApp)
