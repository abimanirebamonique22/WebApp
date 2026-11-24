const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to A CODERWANDA Ltd!</h1><p>Web Application</p>');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});