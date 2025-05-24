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
        <div className="pt-24 w-full scroll-smooth flex justify-center items-center h-screen">
            {isLoading ? (
                <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                    <p className="mt-3 text-lg text-gray-500">Loading Product...</p>
                </div>
            ) : error ? (
                <div className="text-center text-red-500 text-lg">{error}</div>
            ) : (
                <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8 flex max-lg:pt-24 justify-center min-h-[500px]">
                    <div className="flex w-full justify-between">
                        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:h-full max-lg:h-[600px] lg:w-[545px] max-lg:w-[400px]">
                            <div className="flex flex-row lg:flex-col justify-between gap-4 overflow-x-scroll lg:h-full">
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
                            <div className="lg:w-[425px] w-full lg:h-full">
                                <img
                                    src={productImage}
                                    alt="Selected Product"
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                        <div className="w-fit max-w-[600px] pl-10">
                            <h1 className="text-2xl">{productData?.Product_Name}</h1>
                            <h6 className="mt-5">
                                <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                                <i className="fa-solid fa-star" style={{ color: "#FFD43B" }}></i>
                            </h6>
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