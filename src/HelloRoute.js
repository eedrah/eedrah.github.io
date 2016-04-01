import React from 'react'
import { Route } from 'react-router'

module.exports = (
  <Route path='hello' getComponent={(location, cb) => {
    cb(null, require('./Hello'))
  }} />
)
