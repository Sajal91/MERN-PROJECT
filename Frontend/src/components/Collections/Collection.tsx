import { useEffect, useState } from "react"
import Card from "../Card/Card"
import Filter from "./Filter"
import fetchData from "../../utilities/fetchData"
import ProductDataInterface from "../../interfaces/productDataInterface"
import filterArr from "../../utilities/filterArrayData"


const Collection = () => {

    const [collectionData, setCollectionData] = useState<ProductDataInterface[]>();
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [isServerError, setIsServerError] = useState(true);

    useEffect(() => {
        fetchData.getCollections()
            .then((data) => {
                setIsServerError(false)
                setCollectionData([...data])
                setIsDataLoaded(true);
            }).catch((err) => {
                setIsDataLoaded(false);
                setIsServerError(true);
            })
    }, [])

    return (
        <>
            <div className="absolute left-0 top-0 pt-24 w-full h-screen overflow-scroll scroll-smooth flex justify-center">
                <div className="collections absolute left-1/2 -translate-x-1/2 w-[85vw] flex justify-between">
                    <div className="filter-section w-[300px]">
                        <h1 className="text-4xl">Filters</h1>
                        <div className="filters-box">
                            {
                                filterArr.map((element, index) => {
                                    return <Filter Filter_Name={element.Filter_Name} Filter_Type={element.Filter_Type} id={element.id} key={index} />
                                })
                            }
                        </div>
                    </div>
                    <div className="collections-section w-full">
                        <h1 className="text-4xl">All Collections</h1>
                        <div className="w-full mt-6 flex flex-wrap justify-between gap-5">
                            {!isServerError ?
                                collectionData?.map((element) => {
                                    return <div className='flex justify-center' key={element._id}>
                                        <Card Product_name={element.Product_Name} Product_price={element.Product_Price} Product_image={element.Product_Image[0]} isDataLoaded={isDataLoaded} Product_id={element._id} />
                                    </div>
                                }) :
                                <div className="w-full h-screen bg-gray-200 animate-pulse"></div>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection