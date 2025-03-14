import { FC, useEffect, useState } from "react"
import fetchData from "../../utilities/fetchData"
import { useParams } from "react-router"
import ProductDataInterface from "../../interfaces/productDataInterface";

const Product: FC = () => {
    const { productId } = useParams<string>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [productdata, setProductdata] = useState<ProductDataInterface>()

    useEffect(() => {
        fetchData.getProduct(productId!)
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
            <div className="absolute top-0 left-0 pt-24 left w-full h-screen overflow-scroll scroll-smooth">
                <div className="absolute left-1/2 -translate-x-1/2 w-[85vw] flex justify-between">
                    <div className="">
                        {
                            productdata?.Product_Image &&
                            productdata.Product_Image.map((image, index) => {
                                return <div key={index}>
                                    <img src={image} width="200px" alt={productdata.Product_Name} />
                                </div>
                            })
                        }
                    </div>
                    <div>
                        <h3>{productdata?.Product_Name}</h3>
                        <h6>${productdata?.Product_Price}</h6>
                        <p>{productdata?.Product_Description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product