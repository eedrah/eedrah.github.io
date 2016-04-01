module.exports = {
  path: 'hello',
  getComponent: (location, cb) => {
    require.ensure([], (require) => {
      cb(null, require('./Hello'))
    })
  }
}
