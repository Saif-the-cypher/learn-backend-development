const http = require('http');

const server = http.createServer((req,res)=>{
    res.end('Server Running');
});

server.listen(5000);