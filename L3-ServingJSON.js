const http = require('http');


const data = {Students : [
    {name : 'saif' , id: 20 } ,
    {name : 'asad' , id: 21}
] };
const server = http.createServer((req,res) => {
res.end(JSON.stringify(data));

});

server.listen(3000);