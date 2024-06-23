// Create web server that listens for requests on port 3000
// When a request comes in, read the file comments.json
// Respond with the contents of the file

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 404;
      res.end('404 Not Found');
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});