import Card from '../Card/Card';
import Policies from './Policies';
import { FC, useEffect, useState } from 'react';
import fetchData from '../../utilities/fetchData';
import ProductDataInterface from '../../interfaces/productDataInterface';
import Corrousel from './Carousel';

const Home: FC = () => {
    const [latestCollections, setLatestCollections] = useState<ProductDataInterface[]>()
    const [bestSellerCollections, setBestSellerCollections] = useState<ProductDataInterface[]>()
    const [isDataLoaded, setIsDataLoaded] = useState<boolean>(false)

    useEffect(() => {
        fetchData.getLatestCollections()
            .then((data) => {
                setLatestCollections([...data])
                setIsDataLoaded(true)
            }).catch(() => {
                setIsDataLoaded(false)
            })

        fetchData.getBestSellerProducts()
            .then((data) => {
                setBestSellerCollections([...data])
                setIsDataLoaded(true)
            }).catch(() => {
                setIsDataLoaded(false)
            })
    }, [])

    return (
        <div className="pt-24 w-full scroll-smooth flex justify-center">
           

            <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8">
                {/* <div className="banner-section w-full h-full flex justify-center border-1 border-black border-solid max-md:flex-col max-md:justify-between">
                    <div className="text-area w-1/2 flex justify-center items-center text-4xl max-md:w-full max-md:h-40">Latest Arrivals</div>
                    <div className="image-area w-1/2 max-md:w-full h-full">
                        <img src={bannerImg} className='w-full h-full' alt="" />
                    </div>
                </div>
            </div>

                <Corrousel />
                <div className="collections-section w-full mt-16">
                    <h1 className='text-center text-4xl font-semibold'>Latest Collections</h1>
                    <p className='text-center text-sm tracking-wide mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam dolore fugiat aperiam</p>
                    <div className="cards-wrapper w-full mt-16 flex flex-wrap justify-center gap-12">
                        {
                            latestCollections?.map((element) => {
                                return <div className='flex justify-center' key={element._id}>
                                    <Card Product_name={element.Product_Name} Product_price={element.Product_Price} Product_image={element.Product_Image[0]} isDataLoaded={isDataLoaded} Product_id={element._id} />
                                </div>
                            })
                        }
                    </div>
                </div>

                {/* Latest Collections Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Collections</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Discover our newest arrivals, featuring the latest trends and styles in fashion.
                        </p>
                    </div>
                    
                    {isDataLoaded ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {latestCollections?.map((element) => (
                                <div key={element._id} className="transform hover:scale-105 transition-transform duration-200">
                                    <Card 
                                        Product_name={element.Product_Name} 
                                        Product_price={element.Product_Price} 
                                        Product_image={element.Product_Image[0]} 
                                        isDataLoaded={isDataLoaded} 
                                        Product_id={element._id} 
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black border-solid"></div>
                        </div>
                    )}
                </div>

                {/* Best Seller Section */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Best Sellers</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our most popular items, loved by customers worldwide.
                        </p>
                    </div>

                    {isDataLoaded ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                            {bestSellerCollections?.map((element) => (
                                <div key={element._id} className="transform hover:scale-105 transition-transform duration-200">
                                    <Card 
                                        Product_name={element.Product_Name} 
                                        Product_price={element.Product_Price} 
                                        Product_image={element.Product_Image[0]} 
                                        isDataLoaded={isDataLoaded} 
                                        Product_id={element._id} 
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black border-solid"></div>
                        </div>
                    )}
                </div>

                {/* Features Section */}
                <div className="bg-white rounded-2xl shadow-sm p-8 mb-24">
                    <Policies />
                </div>

                {/* Newsletter Section */}
                <div className="bg-black text-white rounded-2xl p-12 mb-24">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Newsletter</h2>
                        <p className="text-gray-300 mb-8">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
                        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="flex-1 px-6 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
                            />
                            <button className="px-8 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;