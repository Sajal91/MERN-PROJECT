import { useEffect, useState } from "react"
import fetchData from "../../Utilities/fetchData"
import { useParams } from "react-router"

const Product = () => {
    const { productId } = useParams();
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetchData.getProduct(productId)
            .then((data) => {
                setIsLoading(false)
            }).catch((error) => {
                console.log(error)
                setIsLoading(true)
            })
    }, [])

    return (
        <>
            <h1 className='text-center text-5xl font-bold uppercase'>Product Page...</h1>
        </>
    )
}

export default Product