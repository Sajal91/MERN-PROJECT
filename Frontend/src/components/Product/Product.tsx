import { FC, useEffect, useState } from "react"
import fetchData from "../../utilities/fetchData"
import { useParams } from "react-router"
import ProductDataInterface from "../../interfaces/productDataInterface";

const Product: FC = () => {
    const { productId } = useParams<string>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [productdata, setProductdata] = useState<ProductDataInterface>()
    const [productimage, setProductImage] = useState<string>("")
    const [isProductImageLoaded, setIsProductImageLoaded] = useState<boolean>(true);

    useEffect(() => {
        fetchData.getProduct(productId!)
            .then((data) => {
                setIsLoading(false)
                setProductdata(data[0])
                setProductImage(data[0].Product_Image[0])

            }).catch((error) => {
                console.log(error)
                setIsLoading(true)
            })
    }, [])

    const onProductImage = (image: string) => {
        setIsProductImageLoaded(false)
        setProductImage("")
        setTimeout(() => {
            setIsProductImageLoaded(true)
            setProductImage(image)
        }, 1000);
    }

    return (
        <>
            <div className="absolute top-0 left-0 pt-24 left w-full h-screen overflow-scroll scroll-smooth">
                <div className="absolute left-1/2 -translate-x-1/2 w-[85vw] flex justify-between">
                    <div className="flex w-[full] ">
                        <div className="flex w-1/2">
                            <div>
                                {
                                    productdata?.Product_Image &&
                                    productdata.Product_Image.map((image, index) => {
                                        return <div key={index}>
                                            <img src={image} alt={productdata.Product_Name} className="bg-gray-200 h-[100px] w-[150px] overflow-hidden" onClick={() => onProductImage(image)} />
                                        </div>
                                    })
                                }
                            </div>
                            {
                                isProductImageLoaded ?
                                    <div className="h-[320px] w-[250px]">
                                        <img src={productimage} alt="Selected Product" className="w-full h-full bg-white p-5" />
                                    </div>
                                    : <div className="h-[320px] w-[250px] animate-pulse"></div>
                            }
                        </div>
                        <div className="w-1/2">
                            <h3>{productdata?.Product_Name}</h3>
                            <h6>${productdata?.Product_Price}</h6>
                            <p>{productdata?.Product_Description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product