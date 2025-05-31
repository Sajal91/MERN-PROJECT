import { FC, use, useEffect, useState } from "react"
import Card from "../Card/Card"
import Filter from "./Filter"
import fetchData from "../../utilities/fetchData"
import ProductDataInterface from "../../interfaces/productDataInterface"
import filterArr from "../../utilities/filterArrayData"
import { useAppSelector } from "../../redux/hooks"
import CATEGORY from "../../constants/category"

const Collection: FC = () => {

    const [collectionData, setCollectionData] = useState<ProductDataInterface[]>([]);
    const [filteredCollections, setFilterCollections] = useState<ProductDataInterface[]>([]);
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
    const [isServerError, setIsServerError] = useState<boolean>(true);
    const filterCategories = useAppSelector(state => state.filterCategory.value);

    useEffect(() => {
        fetchData.getCollections()
            .then((data) => {
                setIsServerError(false)
                setCollectionData([...data])
                setFilterCollections([...data])
                setIsDataLoaded(true);
            }).catch(() => {
                setIsDataLoaded(false);
                setIsServerError(true);
            })
    }, [])

    useEffect(() => {
        checkFilterCategories();
    }, [filterCategories])

    const checkFilterCategories = () => {
        setFilterCollections([])
        if(filterCategories.length > 0) {
            filterCategories.map((category: CATEGORY) => {
                let filteredData = collectionData?.filter(element => category === element.Product_Category)
                setFilterCollections(prevItems => [...prevItems, ...filteredData])
            })
        } else {
            setFilterCollections(collectionData)
        }
    }

    return (
        <>
            <div className="left-0 top-0 pt-24 w-full scroll-smooth flex justify-center">
                <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8 flex justify-between">
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
                                filteredCollections?.map((element) => {
                                    return <div className='flex justify-center' key={element._id}>
                                        <Card Product_name={element.Product_Name} Product_price={element.Product_Price} Product_image={element.Product_Image[0]} isDataLoaded={isDataLoaded} Product_id={element._id} />
                                    </div>
                                }) :

                                [...Array(8)].map((_, index) => {
                                    return <div className='flex justify-center' key={index}>
                                        <Card Product_id="" Product_image="" Product_name="" Product_price={0} isDataLoaded={false} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection