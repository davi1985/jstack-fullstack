const http = require('http')
const routes = require('./routes')

const server = http.createServer((request, response) => {
  const route = routes.find(
    (route) => route.endpoint === request.url && route.method === request.method
  )

  if (route) {
    route.handler(request, response)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(`Cannot ${request.method} ${request.url}`)
  }
})

server.listen(3001, () => console.log(`Server start at http://localhost:3001`))
