import { useEffect, useState } from "react"
import Card from "../Card/Card"
import Filter from "./Filter"

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
        fetch("http://localhost:8080/products")
            .then((result) => {
                result.json()
                    .then((response) => {
                        // console.log(response)
                        setCollectionData([...response])
                        setTimeout(() => {
                            setIsDataLoaded(true);
                        }, 2000);
                        setIsServerError(false);
                    }).catch((err) => {
                        // console.log(err)
                        setIsDataLoaded(false);
                        setIsServerError(true);
                    })
            }).catch((err) => {
                // console.log(err)
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
                            {   !isServerError ?
                                collectionData.map((element) => {
                                    return <div className='flex justify-center' key={element._id}>
                                        <Card Product_name={element.Product_Name} Product_price={element.Product_Price} Product_image={element.Product_Image[0]} isDataLoaded={isDataLoaded} />
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