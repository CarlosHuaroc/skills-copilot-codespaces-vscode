// Create web server
// 1. Read the comments.json file
// 2. Create a server that listens on port 3000
// 3. When a user makes a request to the server, respond with the contents of the comments.json file

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('Internal server error');
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});