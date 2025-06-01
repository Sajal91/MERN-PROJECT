const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config();
const app = express();
const port = 3000;
const ProductModel = require("./Models/ProductSchema");
const sampleProducts = require("./Data/sampledata");
const products = require("./Data/sampledata");

main()
    .then(console.log("Database Connected Successfully"))
    .catch(err => console.log("err"));

async function main() {
    await mongoose.connect(process.env.MONGOURL);
}

app.use(cors())
app.use(express.urlencoded({ extended: true }))


// const Img_Arr = [
//     "https://res.cloudinary.com/dhkxnncgz/image/upload/v1741171027/ECOM/elsnrphqckggpycrarzh.png",
//     "https://res.cloudinary.com/dhkxnncgz/image/upload/v1741171027/ECOM/elsnrphqckggpycrarzh.png",
//     "https://res.cloudinary.com/dhkxnncgz/image/upload/v1741171027/ECOM/elsnrphqckggpycrarzh.png"
// ]

// app.get('/delete', async (request, response) => {
//     ProductModel.deleteMany({})
//     .then((res) => {
//         console.log(res);
//     })
// })

// let count = 0
// const fetchData = async () => {
//     try {
//         const response = await fetch(`https://fakestoreapi.com/products/${count}`);
//         const data = await response.json();
//         let product = new ProductModel({
//             Product_Description: data.description,
//             Product_Image: [
//                 data.image,
//                 data.image
//             ],
//             Product_Name: data.title,
//             Product_Price: data.price
//         })
//         product.save()
//         .then((result)=>{
//             console.log(result)
//         }).catch((err)=>{
//             console.log(err)
//         })
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

// app.get('/add', async(request, response) => {
//     const intervalId = setInterval(() => fetchData(count++), 1000);
//     setTimeout(() => clearInterval(intervalId), 21000);
// })

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

// app.get('/update', (request, response) => {
//     ProductModel.updateMany({}, {$set: {Product_Image: Img_Arr}})
//     .then((result)=>{
//         console.log(result)
//     }).catch((err)=>{
//         console.log("err",err)
//     })
// })

// const addData = (i) => {
//     let product = new ProductModel(products[i]);
//     product.save()
//         .then((result) => {
//             console.log(result)
//         })
// }

// app.get('/update', (request, response) => {
//     let i = 0;
//     const intervalId = setInterval(() => addData(i++), 1000);
//     setTimeout(() => clearInterval(intervalId), 53000);
// })

app.listen(port, () => {
    console.log("Server started on localhost :", port);
})