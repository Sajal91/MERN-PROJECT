const express = require("express");
const app = express();

app.listen(8080 , ()=>{
    console.log("server started runnng on the port 8080")
} );

app.get("/admin" , (req,res) =>{
   res.send("hello my name is admin")
})