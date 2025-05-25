import Card from '../Card/Card';
import Policies from './Policies';
import { FC, useEffect, useState } from 'react';
import fetchData from '../../utilities/fetchData';
import ProductDataInterface from '../../interfaces/productDataInterface';

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
                </div> */}


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

                <div className="best-seller-section w-full mt-16">
                    <h1 className='text-center text-4xl font-semibold'>Best Seller</h1>
                    <p className='text-center text-sm tracking-wide mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam dolore fugiat aperiam</p>
                    <div className="cards-wrapper w-full mt-16 flex flex-wrap justify-center gap-12">
                        {
                            bestSellerCollections?.map((element) => {
                                return <div className='flex justify-center' key={element._id}>
                                    <Card Product_name={element.Product_Name} Product_price={element.Product_Price} Product_image={element.Product_Image[0]} isDataLoaded={isDataLoaded} Product_id={element._id} />
                                </div>
                            })
                        }
                    </div>
                </div>

                <div className='policies-section w-full items-center justify-center mt-28'>
                    <Policies />
                </div>

                {/* <div className='footer-section w-full items-center justify-center mt-28'>
                    <Footer />
                </div> */}

            </div>
        </div>

    )
}

export default Home;