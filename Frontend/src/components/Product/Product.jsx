import { useEffect, useState } from "react"
import fetchData from "../../Utilities/fetchData"
import { useParams } from "react-router"

const Product = () => {
    const { productId } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [productdata , setProductdata] = useState({})
    const [productimage , setProductimage] = useState("")

    useEffect(() => {
        fetchData.getProduct(productId)
            .then((data) => {
                console.log(data)
                setProductdata({...data})
                
                setIsLoading(false)
            }).catch((error) => {
                console.log(error)
                setIsLoading(true)
            })
    }, [])

    return (
             <>
             <div className="absolute top-24 left w-full h-screen overflow-scroll scroll-smooth">
             <div>
              { productdata.Product_Image.map((image , index) => 
              <div className="w-30 h-40"> 
              <img src={image} key={index}  className="" /> 
              </div>
                  )}
             </div>
               <div>
               <h3>  {productdata.Product_Name} </h3>
               <h6> ${productdata.Product_Price} </h6>
               <p>{ productdata.Product_Descroption }</p>
               </div>
               
             </div>
             </>
    )
}

export default Product