const express = require('express');
const app = express();


// Route
app.get('/', (req, res) => {
    res.send('Welcome to Express Server');
});


app.listen(5000 , () =>{
    console.log('SERVER RUNNING ON PORT 5000')
})