const http = require('http')
const { URL } = require('url')

const routes = require('./routes')

const server = http.createServer((request, response) => {
  const { searchParams, pathname } = new URL(`http://localhost:3001${request.url.trim()}`)

  const splitEndpoint = pathname.split('/').filter(Boolean)

  let id = null
  let path = pathname

  if (splitEndpoint.length > 1) {
    path = `/${splitEndpoint[0]}/:id`
    id = splitEndpoint[1]
  }

  const route = routes.find(({ endpoint, method }) => endpoint === path && method === request.method)

  if (route) {
    request.query = Object.fromEntries(searchParams)
    request.params = { id }

    route.handler(request, response)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(`Cannot ${request.method} ${path}`)
  }
})

server.listen(3001, () => console.log(`Server start at http://localhost:3001`))
