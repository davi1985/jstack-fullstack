const http = require('http')
const users = require('./mocks/users')

const server = http.createServer((request, response) => {
  if (request.url === '/users' && request.method === 'GET') {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(JSON.stringify(users))
  } else {
    response.writeHead(404, 'text/html')
    response.end(`Canon ${request.method} ${request.url}`)
  }
})

server.listen(3001, () => console.log(`Server start at http://localhost:3001`))
