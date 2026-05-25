const express = require('express');
const app = express();

//HOME ROUTE 
app.get('/' , (req,res) =>{
    res.send('Backend is Running');
})


// ROUTE PARAMETERS
/*  
app.get('/users/:id' , (req , res ) =>{
    res.send(`User id is ${req.params.id}`)
})   
    */

/*
If Browser Sends a Request  http//:localhost:5000/users/5
it will reach this route /users/:id
and create req.params = {id : '5'}
and send the response 
*/

//Multiple Parameters
app.get('/users/:userid/orders/:orderid' , (req , res ) =>{
    res.send(`User id is ${req.params.userid} and Order id is ${req.params.orderid}`)

})
//http://localhost:5000/users/10/orders/3


app.get('/cars/:brand/:model' , (req , res) =>{

    const brand = req.params.brand ;
    const model = req.params.model;
    res.send(`model of the car is ${model} and brand is ${brand}`)

})


app.listen(5000 , () => {
    console.log(' Server running at port 5000' );
})