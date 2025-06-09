const getCollections = async() => {
    let response = await fetch("https://mern-project-1-j6ok.onrender.com/products")
    return response.json();
}

const getLatestCollections = async() => {
    let response = await fetch('https://mern-project-1-j6ok.onrender.com/latest-products')
    return response.json();
}

const getBestSellerProducts = async() => {
    let response = await fetch('https://mern-project-1-j6ok.onrender.com/best-seller')
    return response.json();
}

const getProduct = async(id: string) => {
    let response = await fetch(`https://mern-project-1-j6ok.onrender.com/product/${id}`)
    return response.json();
}

const fetchData = {
    getCollections: getCollections,
    getLatestCollections: getLatestCollections,
    getProduct: getProduct,
    getBestSellerProducts: getBestSellerProducts,
}

export default fetchData