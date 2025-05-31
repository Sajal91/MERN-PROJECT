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
        <div className="min-h-screen bg-gray-50 pt-24 pb-12">
            {isLoading ? (
                <div className="flex flex-col items-center justify-center min-h-[60vh]">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-solid"></div>
                    <p className="mt-4 text-lg text-gray-600 font-medium">Loading Product...</p>
                </div>
            ) : error ? (
                <div className="flex items-center justify-center min-h-[60vh]">
                    <div className="text-center text-red-500 text-lg font-medium bg-red-50 p-4 rounded-lg">{error}</div>
                </div>
            ) : (
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8">
                        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                            {/* Product Images Section */}
                            <div className="flex flex-col-reverse lg:flex-row gap-6 lg:w-[545px] max-lg:w-full">
                                <div className="flex flex-row lg:flex-col justify-start gap-4 overflow-x-auto lg:overflow-y-auto max-h-[600px] p-2">
                                    {productData?.Product_Image?.length ? (
                                        productData.Product_Image.map((image, index) => (
                                            <div 
                                                key={index} 
                                                className={`border-2 rounded-lg overflow-hidden transition-all duration-200 cursor-pointer hover:opacity-80
                                                    ${productImage === image ? 'border-orange-500' : 'border-gray-200'}`}
                                            >
                                                <img
                                                    src={image}
                                                    alt={`${productData.Product_Name} - View ${index + 1}`}
                                                    className="w-24 h-28 object-cover"
                                                    onClick={() => onProductimage(image)}
                                                />
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500">No images available</p>
                                    )}
                                </div>
                                <div className="lg:w-[425px] w-full aspect-square rounded-lg overflow-hidden bg-gray-100">
                                    <img
                                        src={productImage}
                                        alt={productData?.Product_Name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Product Details Section */}
                            <div className="flex-1 max-w-[600px]">
                                <h1 className="text-3xl font-bold text-gray-900">{productData?.Product_Name}</h1>
                                
                                <div className="mt-4 flex items-center gap-1">
                                    {[...Array(4)].map((_, i) => (
                                        <i key={i} className="fa-solid fa-star text-yellow-400"></i>
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">(4.0)</span>
                                </div>

                                <div className="mt-6">
                                    <span className="text-3xl font-bold text-gray-900">${productData?.Product_Price}</span>
                                </div>

                                <p className="mt-6 text-gray-600 leading-relaxed">{productData?.Product_Description}</p>

                                <div className="mt-8">
                                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Select Size</h2>
                                    <div className="flex flex-wrap gap-3">
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
                                                    className={`w-14 h-14 flex items-center justify-center rounded-lg border-2 text-lg font-medium cursor-pointer transition-all duration-200
                                                        ${selectedSize === size
                                                            ? "border-orange-500 bg-orange-50 text-orange-600"
                                                            : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                                                        }`}
                                                >
                                                    {size}
                                                </div>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <button className="mt-8 w-full sm:w-auto px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                                    Add To Cart
                                </button>

                                <div className="mt-8 pt-8 border-t border-gray-200">
                                    <div className="space-y-3 text-sm text-gray-600">
                                        <p className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-green-500"></i>
                                            <span>100% Original product</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-green-500"></i>
                                            <span>Cash on delivery available</span>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <i className="fa-solid fa-check text-green-500"></i>
                                            <span>Easy return and exchange policy within 7 days</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;