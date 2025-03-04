const express = require("express");
<<<<<<< HEAD
const app = express();

app.listen(8080 , ()=>{
    console.log("server started runnng on the port 8080")
} );

app.get("/admin" , (req,res) =>{
   res.send("hello my name is admin")
=======
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = process.env.PORT;

main()
.then(console.log("Database Connected Successfully"))
.catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGOURL);
}

app.use(express.urlencoded({extended: true}))

app.get("/", (request, response) => {
    console.log(response.send("Welcome to Home Route"));
});

app.listen(port, () => {
    console.log("Server started on localhost :", port);
>>>>>>> e1da05770cca893fe047ab30cbc859ed843cfd18
})