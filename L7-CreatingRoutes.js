const express = require('express');
const app = expresss();

//Creating routes 

//Home Route
app.get('/', (req,res) => {
    res.send('HOME ROUTE');
});

// A Route to test api 
app.get ('api/health' , (req , res) => {
    res.json({ status :'OK' , message: 'Server is Running'});
});

// Creating Routes using HTTP methods 


/* GET -> Retreive Data 
Used for:
• Getting data ,Reading information */

app.get ('/users' , (req,res) => {
    res.send('Fetching Users')
});

/* POST -> Send/Create Data
Used for : Login ,  Registration , Creating Records */

app.post('/users' , (req,res) => {
  res.send('User Created')
});

/* PUT -> Update Data 
Used for : Update complete data */

app.put('/users/1' , (req,res) => {
    res.send('User Updated')
});

/* DELETE -> Remove Data 
Used for : Removing Data */

app.delete('/users/1', (req,res) => {
    res.send('user deleted');
});





const PORT = process.env.PORT || 5000;
const startServer = async () => {


const dbconected = await testconnection();

if (dbconected) {
    app.listen (PORT, () => {
     console.log(`server running at ${PORT}`);        
    })
}
else {

    console.log(`database connection error`)
    process.exit(1);

  }

}

