const http = require('node:http');
const server = http.createServer((req, res) => {
  res.writeHead(200);
  if (req.url === "/getSecretData") {
    res.end("There is no secret data");
  }
  res.end('Hello, World!\n');
})

server.listen(7777, () => {
  console.log('Server running at http://localhost:3000/');
});