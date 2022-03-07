// this imports express...
const express = require("express");

//Express is listening on Port
const app = express();      

// import port
const port = 5001;      

// allowing app to use static
app.use("/static",express.static("public"));

app.listen(port, () =>{
 
// template literals (string)
console.log(`listening on port ${port}`)
});



