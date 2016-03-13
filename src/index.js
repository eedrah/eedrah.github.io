import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Redirect } from 'react-router'

render((
  <Router history={browserHistory}>
    <Route path='/' component={require('./App')}>
      <Route path='user/:userID' component={require('./User')}>
        <Route path='tasks/:taskID' component={require('./Task')} />
        <Redirect from='todos/:taskID' to='tasks/:taskID' />
      </Route>
    </Route>
  </Router>
), document.body)
