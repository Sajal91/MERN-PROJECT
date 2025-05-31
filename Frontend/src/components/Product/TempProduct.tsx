import { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import fetchData from "../../utilities/fetchData";
import ProductDataInterface from "../../interfaces/productDataInterface";
import sizes from "../../constants/productSizes";

const TempProduct: FC = () => {

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
        <div className="pt-0 w-full scroll-smooth flex justify-center items-center">
            <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8 flex justify-center bg-amber-400 h-[400px]">

            </div>
        </div>
    )
}

export default TempProduct