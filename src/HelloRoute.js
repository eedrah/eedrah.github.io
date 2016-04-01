module.exports = {
  path: 'hello',
  getComponent: (location, cb) => {
    cb(null, require('./Hello'))
  }
}
