const getCollections = async() => {
    let response = await fetch("http://localhost:8080/products")
    return response.json();
}

const getLatestCollections = async() => {
    let response = await fetch('http://localhost:8080/latest-products')
    return response.json();
}

const getBestSellerProducts = async() => {
    let response = await fetch('http://localhost:8080/best-seller')
    return response.json();
}

const getProduct = async(id: string) => {
    let response = await fetch(`http://localhost:8080/product/${id}`)
    return response.json();
}

const fetchData = {
    getCollections: getCollections,
    getLatestCollections: getLatestCollections,
    getProduct: getProduct,
    getBestSellerProducts: getBestSellerProducts,
}

export default fetchData