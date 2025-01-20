const http = require('http')
const { URL } = require('url')

const routes = require('./routes')

const server = http.createServer((request, response) => {
  // const parsedUrl = url.parse(request.url, true)

  const { searchParams, pathname } = new URL(`http://localhost:3001/${request.url}`)

  const route = routes.find(route => route.endpoint === pathname && route.method === request.method)

  if (route) {
    request.query = Object.fromEntries(searchParams)
    route.handler(request, response)
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`)
  }
})

server.listen(3001, () => console.log(`Server start at http://localhost:3001`))
