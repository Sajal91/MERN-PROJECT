const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
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

    // const p1 = {
    //     Product_Name: "Men Round Neck Pure Cotton T-shirt",
    //     Product_Price: 10,
    //     Product_Image: [
    //         "https://res.cloudinary.com/dhkxnncgz/image/upload/v1741171027/ECOM/elsnrphqckggpycrarzh.png",
    //         "https://res.cloudinary.com/dhkxnncgz/image/upload/v1741171027/ECOM/elsnrphqckggpycrarzh.png"
    //     ],
    //     Product_Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium officia molestiae cupiditate alias magnam libero fugit consequuntur mollitia veniam excepturi, dolorem quasi pariatur corrupti vitae quas numquam debitis! Iusto veniam laboriosam placeat expedita perferendis tempora ratione. Unde, cumque dolor error perferendis expedita maxime. Quo, culpa! Consequatur, nulla! Quaerat, facere veniam."
    // }

    // ProductModel.insertOne(p1)
    // .then((res) => {
    //     console.log(res);
    // })
});

app.get('/latest-products', (request, response) => {
    // let arr = [];
    // Sort by createdAt field in descending order (most recent first)
    // Limit the result to 5 documents
    ProductModel.find().sort({ createdAt: -1 }).limit(5)
    .then((result)=>{
        // for(let i = 0; i < result.length; i++) {
        //     arr.push(result[i].createdAt.toLocaleTimeString())
        // }
        response.json(result);
    })
    

    // .then((res) => {
    //     for (let i = 0; i < res.length; i++) {
    //         let localDate = res[i].Created_At.toDateString()
    //         let localTime = res[i].Created_At.toLocaleTimeString()
    //         arr.push(localDate + " " + localTime);
    //     }
    //     response.json(arr)
    // })
})

app.get('/product/:productId', (request, response)=>{
    let { productId } = request.params;
    ProductModel.find({_id: productId})
    .then((result)=>{
        response.json(result)
    }).catch((error)=>{
        console.log(error)
        // response.send(error)
    })
})

// app.get('/delete', async (request, response) => {
//     ProductModel.deleteMany({})
//     .then((res) => {
//         console.log(res);
//     })
// })

app.listen(port, () => {
    console.log("Server started on localhost :", port);
})