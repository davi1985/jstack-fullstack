const http = require('http')

const server = http.createServer((_, response) => {
  response.writeHead(200, "text/html")
  response.end('<h1>Hello World</h1>')
})

server.listen(3001, () => console.log(`Server start at http://localhost:3001`))