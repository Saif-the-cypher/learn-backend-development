const  express = require ('express');
const  cors = require('cors');
const cookieParser= require('cookie-parser');
const { urlencoded } = require('body-parser');


const app =express();

app.use(cors(
    {
        origin : ['http://localhost:5500' , 'http://127.0.0.1:5500' , null ] ,
        credentials : true ,
        methods : ['GET' , 'POST', 'PUT' , 'DELETE' , 'OPTONS'] ,
        allowedHeaders : ['Content-Type' , 'Authorization']  
    }
));

app.use(cookieParser);
app.use(express.json());
app.use(express.urlencoded({extended : true}))