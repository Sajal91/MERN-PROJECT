import { FC, useEffect, useState } from "react"
import fetchData from "../../utilities/fetchData"
import { useParams } from "react-router"
import ProductDataInterface from "../../interfaces/productDataInterface";
import sizes from "../../constants/productSizes";



const Product: FC = () => {
    const { productId } = useParams<string>()
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [productdata, setProductdata] = useState<ProductDataInterface>()
    const [productImage, setProductImage] = useState<string>()
    const [isProductImageLoaded, setIsProductImageLoaded] = useState<boolean>(true);
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [relatedCollection, setrelatedCollection] = useState<ProductDataInterface[]>()

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
        setIsProductImageLoaded(true)
        setProductImage(image)
    }

    return (
        <>
            <div className="absolute top-0 left-0 pt-24 left w-full h-screen overflow-scroll scroll-smooth">
                <div className="absolute left-1/2 -translate-x-1/2 w-[85vw] flex justify-between">
                    <div className="flex w-[full] flex-wrap justify-center">
                        <div className="flex w-1/2 flex-wrap">
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
                            <div >
                                <img src={productImage} alt="Selected Product" className="h-[60vh] w-[25vw]  bg-white p-5" />
                            </div>
                        </div>
                        <div className="w-1/2 max-w-[600px]">
                            <h1 className="text-2xl mt-10 ">{productdata?.Product_Name}</h1>
                            <h6 className="mt-5"> Reviews</h6>
                            <h6 className="mt-5 text-2xl font-bold ">${productdata?.Product_Price}</h6>
                            <p className="mt-5 font-extralight ">{productdata?.Product_Description}</p>
                            <h1 className="mt-5"> Select Size </h1>
                            <div className="flex gap-3 mt-5">
                                {sizes.map((size) => (
                                    <label key={size} className="relative">
                                        <input
                                            type="radio"
                                            name="size"
                                            value={size}
                                            checked={selectedSize === size}
                                            onChange={(e) => setSelectedSize(e.target.value)}
                                            className="hidden"
                                        /><div className={`w-12 h-12 flex items-center justify-center border-2 text-lg font-semibold cursor-pointer transition-all ${selectedSize === size ? "border-orange-500" : "bg-white text-gray-800 border-gray-400 hover:bg-gray-100"}`}>
                                            {size}
                                        </div>
                                    </label>

                                ))}
                            </div>
                            <button className=" mt-8 bg-black text-amber-100 w-[150px] h-[40px] cursor-pointer"> Add To Cart </button>
                            <hr className="mt-10 font-extralight" />
                            <div className="mt-3 text-sm font-extralight">
                                <p> 100% Original product.</p>
                                <p>Cash on delivery is available on this product.</p>
                                <p>Easy return and exchange policy within 7 days.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Product