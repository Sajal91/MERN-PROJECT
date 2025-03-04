const express = require("express");
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
})