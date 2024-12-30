const users = require('../mocks/users')

module.exports = {
  listUsers(_, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(users))
  },
}
