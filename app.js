//console.log("NodeJS Application Running Successfully");




const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('NodeJS Application Deployed Successfully!');
    res.end();
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});
