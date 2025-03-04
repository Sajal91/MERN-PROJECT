import Card from "../Home/Card"
import Filter from "./Filter"

const Collection = () => {
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

    return (
        <>
            <div className="absolute left-0 top-0 pt-24 w-full h-screen overflow-scroll scroll-smooth flex justify-center">
                <div className="collections absolute left-1/2 -translate-x-1/2 w-[85vw] flex justify-between">
                    <div className="filter-section w-[300px]">
                        <h1 className="text-4xl">Filters</h1>
                        <div className="filters-box">
                            {
                                filterArr.map((element, index)=>{
                                    return <Filter prop={element} key={index}/>
                                })
                            }
                        </div>
                    </div>
                    <div className="collections-section w-full">
                        <h1 className="text-4xl">All Collections</h1>
                        <div className="w-full mt-6 flex flex-wrap justify-between gap-5">
                            <div className='flex justify-center'>
                                <Card Product_name={"Men Round Neck Pure Cotton T-shirt"} Product_price={10} />
                            </div>
                            <div className='flex justify-center'>
                                <Card Product_name={"Men Round Neck Pure Cotton T-shirt"} Product_price={10} />
                            </div>
                            <div className='flex justify-center'>
                                <Card Product_name={"Men Round Neck Pure Cotton T-shirt"} Product_price={10} />
                            </div>
                            <div className='flex justify-center'>
                                <Card Product_name={"Men Round Neck Pure Cotton T-shirt"} Product_price={10} />
                            </div>
                            <div className='flex justify-center'>
                                <Card Product_name={"Men Round Neck Pure Cotton T-shirt"} Product_price={10} />
                            </div>
                            <div className='flex justify-center'>
                                <Card Product_name={"Men Round Neck Pure Cotton T-shirt"} Product_price={10} />
                            </div>
                            <div className='flex justify-center'>
                                <Card Product_name={"Men Round Neck Pure Cotton T-shirt"} Product_price={10} />
                            </div>
                            <div className='flex justify-center'>
                                <Card Product_name={"Men Round Neck Pure Cotton T-shirt"} Product_price={10} />
                            </div>
                            <div className='flex justify-center'>
                                <Card Product_name={"Men Round Neck Pure Cotton T-shirt"} Product_price={10} />
                            </div>
                            <div className='flex justify-center'>
                                <Card Product_name={"Men Round Neck Pure Cotton T-shirt"} Product_price={10} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection