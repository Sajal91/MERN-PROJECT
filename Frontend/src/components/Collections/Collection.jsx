import { useEffect, useState } from "react"
import Card from "../Card/Card"
import Filter from "./Filter"
import fetchData from "../../Utilities/fetchData"

const Collection = () => {

    const [collectionData, setCollectionData] = useState([]);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [isServerError, setIsServerError] = useState(true);

    const filterArr = [
        {
            id: 0,
            Filter_Name: "Category",
            Filter_Type: ["Men", "Women", "Kids"]
        },
        {
            id: 1,
            Filter_Name: "Category",
            Filter_Type: ["Men", "Women", "Kids", "Men", "Women", "Kids"]
        },
        {
            id: 2,
            Filter_Name: "Category",
            Filter_Type: ["Men", "Women", "Kids", "Men", "Kids"]
        },
        {
            id: 3,
            Filter_Name: "Category",
            Filter_Type: ["Men", "Women", "Kids", "Men", "Women", "Kids", "Men", "Women", "Kids"]
        }
    ]

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
                                    return <Filter prop={element} key={index} />
                                })
                            }
                        </div>
                    </div>
                    <div className="collections-section w-full">
                        <h1 className="text-4xl">All Collections</h1>
                        <div className="w-full mt-6 flex flex-wrap justify-between gap-5">
                            {!isServerError ?
                                collectionData.map((element) => {
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