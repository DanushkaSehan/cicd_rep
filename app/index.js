const http = require('http');

const server = http.createServer((req, res) => {
  res.end('CI/CD Pipeline working!');
});

server.listen(80, () => {
  console.log('Server running on port 80');
});
