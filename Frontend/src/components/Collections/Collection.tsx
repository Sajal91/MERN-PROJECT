import { FC, useEffect, useState } from "react"
import Card from "../Card/Card"
import Filter from "./Filter"
import fetchData from "../../utilities/fetchData"
import ProductDataInterface from "../../interfaces/productDataInterface"
import filterArr from "../../utilities/filterArrayData"
import { useAppSelector } from "../../redux/hooks"
import { FiFilter, FiX } from "react-icons/fi"

const Collection: FC = () => {
    const [collectionData, setCollectionData] = useState<ProductDataInterface[]>([]);
    const [filteredCollections, setFilterCollections] = useState<ProductDataInterface[]>([]);
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false);
    const [isServerError, setIsServerError] = useState<boolean>(true);
    const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
    const [sortBy, setSortBy] = useState<string>("featured");
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
        applyFilters();
    }, [filterCategories, sortBy])

    const applyFilters = () => {
        let filtered = [...collectionData];

        // Apply category filters
        if (filterCategories.length > 0) {
            filtered = filtered.filter(element =>
                filterCategories.includes(element.Product_Category)
            );
        }

        // Apply sorting
        switch (sortBy) {
            case "price-low-high":
                filtered.sort((a, b) => a.Product_Price - b.Product_Price);
                break;
            case "price-high-low":
                filtered.sort((a, b) => b.Product_Price - a.Product_Price);
                break;
            case "newest":
                // Assuming there's a timestamp or date field
                filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                break;
            default:
                // Featured - keep original order
                break;
        }

        setFilterCollections(filtered);
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-16 md:pt-20 lg:pt-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                    {/* Mobile Filter Button */}
                    <button
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                        className="lg:hidden flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 w-full sm:w-auto"
                    >
                        {isFilterOpen ? <FiX className="w-5 h-5" /> : <FiFilter className="w-5 h-5" />}
                        <span className="text-sm font-medium">
                            {isFilterOpen ? 'Close Filters' : 'Show Filters'}
                        </span>
                    </button>

                    {/* Filter Section */}
                    <div className={`lg:w-[280px] xl:w-[320px] ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
                        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 sticky top-20 lg:top-24">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 sm:mb-6">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Filters</h2>
                                <p className="text-sm sm:text-base text-gray-600">
                                    Showing {filteredCollections.length} products
                                </p>
                            </div>
                            <div className="space-y-4 sm:space-y-6">
                                {filterArr.map((element, index) => (
                                    <Filter
                                        Filter_Name={element.Filter_Name}
                                        Filter_Type={element.Filter_Type}
                                        id={element.id}
                                        key={index}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Collections Grid */}
                    <div className="flex-1">
                        {/* Results Count and Sort */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 sm:mb-6">
                            <div className="flex items-center gap-2 w-full sm:w-auto">
                                <span className="text-sm sm:text-base text-gray-600">Sort by:</span>
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-black/5 w-full sm:w-auto"
                                >
                                    <option value="featured">Featured</option>
                                    <option value="price-low-high">Price: Low to High</option>
                                    <option value="price-high-low">Price: High to Low</option>
                                    <option value="newest">Newest</option>
                                </select>
                            </div>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
                            {!isServerError ? (
                                filteredCollections?.map((element) => (
                                    <div key={element._id} className="transform hover:scale-105 transition-transform duration-200">
                                        <Card
                                            Product_name={element.Product_Name}
                                            Product_price={element.Product_Price}
                                            Product_image={element.Product_Image[0]}
                                            isDataLoaded={isDataLoaded}
                                            Product_id={element._id}
                                        />
                                    </div>
                                ))
                            ) : (
                                [...Array(8)].map((_, index) => (
                                    <div key={index} className="transform hover:scale-105 transition-transform duration-200">
                                        <Card
                                            Product_id=""
                                            Product_image=""
                                            Product_name=""
                                            Product_price={0}
                                            isDataLoaded={false}
                                        />
                                    </div>
                                ))
                            )}
                        </div>

                        {/* No Results State */}
                        {filteredCollections.length === 0 && !isServerError && (
                            <div className="text-center py-8 sm:py-12">
                                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                                <p className="text-sm sm:text-base text-gray-600">Try adjusting your filters to find what you're looking for.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection