const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv.").config({ path: '.env' });
const app = express();
const port = process.env.PORT;
const ProductModel = require("./Models/ProductSchema");

main()
    .then(console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGOURL);
}

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get("/", (request, response) => {
    response.send("Welcome to Home Route");
});

app.get("/products", async (request, response) => {
    let result = await ProductModel.find({});
    response.json(result);
});

// Sort by createdAt field in descending order (most recent first)
// Limit the result to 5 documents

app.get('/latest-products', (request, response) => {
    ProductModel.find().sort({ createdAt: -1 }).limit(4)
    .then((result)=>{
        response.json(result);
    })
})

app.get('/product/:productId', (request, response)=>{
    let { productId } = request.params;
    ProductModel.find({_id: productId})
    .then((result)=>{
        response.json(result)
    }).catch((error)=>{
        console.log(error)
    })
})

app.listen(port, () => {
    console.log("Server started on localhost :", port);
})