import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchData from "../../utilities/fetchData";
import ProductDataInterface from "../../interfaces/productDataInterface";
import sizes from "../../constants/productSizes";

const Product: FC = () => {
    const { productId } = useParams<{ productId: string }>();

    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [productData, setProductData] = useState<ProductDataInterface | null>(null);
    const [productImage, setProductImage] = useState<string>("");
    const [selectedSize, setSelectedSize] = useState<string>("");
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!productId) return;

        setIsLoading(true);
        setError(null);

        // Simulate network delay
        setTimeout(() => {
            fetchData.getProduct(productId)
                .then((data) => {
                    setIsLoading(false);
                    if (data.length > 0) {
                        setProductData(data[0]);
                        setProductImage(data[0]?.Product_Image?.[0]);
                    } else {
                        setError("Product not found.");
                    }
                })
                .catch((error) => {
                    console.error(error);
                    setError("Failed to load product.");
                    setIsLoading(false);
                });
        }, 0); // ⏳ Simulated delay of 2 seconds
    }, [productId]);

    const onProductimage = (image: string) => {
        setProductImage(image);
    };

    return (
        <div className="absolute top-0 left-0 pt-24 w-full h-screen overflow-scroll scroll-smooth flex justify-center items-center">
            {isLoading ? (
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                    <p className="mt-3 text-lg text-gray-500">Loading Product...</p>
                </div>
            ) : error ? (
                <div className="text-center text-red-500 text-lg">{error}</div>
            ) : (
                <div className="absolute left-1/2 -translate-x-1/2 w-[85vw] top-24 flex justify-between">
                    <div className="flex w-full flex-wrap justify-center">
                        <div className="flex w-1/2 gap-6 h-[410px]">
                            <div className="flex flex-col justify-between gap-4 h-full">
                                {productData?.Product_Image?.length ? (
                                    productData.Product_Image.map((image, index) => (
                                        <div key={index} className="border-1 border-white w-24 h-28">
                                            <img 
                                                src={image} 
                                                alt={productData.Product_Name} 
                                                className="bg-gray-200 h-full w-full overflow-hidden cursor-pointer" 
                                                onClick={() => onProductimage(image)} 
                                            />
                                        </div>
                                    ))
                                ) : (
                                    <p>No images available</p>
                                )}
                            </div>
                            <div className="w-[350px] h-[410px]">
                                <img 
                                    src={productImage} 
                                    alt="Selected Product" 
                                    className="h-full w-full" 
                                />
                            </div>
                        </div>
                        <div className="w-1/2 max-w-[600px]">
                            <h1 className="text-2xl">{productData?.Product_Name}</h1>
                            <h6 className="mt-5">Reviews</h6>
                            <h6 className="mt-5 text-2xl font-bold">${productData?.Product_Price}</h6>
                            <p className="mt-5 font-extralight">{productData?.Product_Description}</p>
                            <h1 className="mt-5">Select Size</h1>
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
                                        />
                                        <div
                                            className={`w-12 h-12 flex items-center justify-center border-2 text-lg font-semibold cursor-pointer transition-all 
                                                ${selectedSize === size
                                                ? "border-orange-500"
                                                : "bg-white text-gray-800 border-gray-400 hover:bg-gray-100"
                                                }`}
                                        >
                                            {size}
                                        </div>
                                    </label>
                                ))}
                            </div>
                            <button className="mt-8 bg-black text-amber-100 w-[150px] h-[40px] cursor-pointer">
                                Add To Cart
                            </button>
                            <hr className="mt-10 font-extralight" />
                            <div className="mt-3 text-sm font-extralight">
                                <p>100% Original product.</p>
                                <p>Cash on delivery is available on this product.</p>
                                <p>Easy return and exchange policy within 7 days.</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;