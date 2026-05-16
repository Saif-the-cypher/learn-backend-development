const http = require('http');
//import a module 
const {add , multiply } = require( './L4-workingwithmodules' )


// use the module 
const data = String(add(2,3)) ;

const server = http.createServer((req,res)=> {
    res.end(data);
});

server.listen(3000);