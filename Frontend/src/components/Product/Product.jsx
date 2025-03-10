import { useEffect, useState } from "react"
import fetchData from "../../Utilities/fetchData"
import { useParams } from "react-router"

const Product = () => {
    const { productId } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [productdata, setProductdata] = useState({})

    useEffect(() => {
        fetchData.getProduct(productId)
            .then((data) => {
                setIsLoading(false)
                setProductdata(data[0])
            }).catch((error) => {
                console.log(error)
                setIsLoading(true)
            })
    }, [])

    return (
        <>
            <div className="absolute top-24 left w-full h-screen overflow-scroll scroll-smooth">
                <div>
                    {
                        productdata.Product_Image &&
                        productdata.Product_Image.map((image, index) => {
                            return <div key={index}>
                                <img src={image} alt={productdata.Product_Name} />
                            </div>
                        })
                    }
                </div>
                <div>
                    <h3>  {productdata.Product_Name} </h3>
                    <h6> ${productdata.Product_Price} </h6>
                    <p>{productdata.Product_Descroption}</p>
                </div>
            </div>
        </>
    )
}

export default Product