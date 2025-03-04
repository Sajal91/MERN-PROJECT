import bannerImg from '../../assets/Images/banner-img.jpg'
import Card from './Card';
import Policies from './Policies';
import Footer from '../Footer/Footer';

const Home = () => {

    return (
        <div className="absolute left-0 top-0 pt-24 w-full h-screen overflow-scroll scroll-smooth flex justify-center">

            <div className="absolute left-1/2 -translate-x-1/2 w-[85vw]">
                <div className="banner-section w-full h-[70vh] flex justify-center border-1 border-black border-solid">
                    <div className="text-area w-1/2 flex justify-center items-center text-4xl">Latest Arrivals</div>
                    <div className="image-area w-1/2">
                        <img src={bannerImg} className='w-full h-full' alt="" />
                    </div>
                </div>

                <div className="collections-section w-full mt-16">
                    <h1 className='text-center text-4xl font-semibold'>Latest Collections</h1>
                    <p className='text-center text-sm tracking-wide mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam dolore fugiat aperiam</p>
                    <div className="cards-wrapper w-full mt-16 flex flex-wrap justify-center gap-12">
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

                <div className="best-seller-section w-full mt-16">
                    <h1 className='text-center text-4xl font-semibold'>Best Seller</h1>
                    <p className='text-center text-sm tracking-wide mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magnam dolore fugiat aperiam</p>
                    <div className="w-full mt-6 flex flex-wrap justify-center gap-12">
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

                <div className='policies-section w-full items-center justify-center mt-28'>
                    <Policies/>
                </div>

                <div className='footer-section w-full items-center justify-center mt-28'>
                    <Footer/>
                </div>

            </div>
        </div>

    )
}

export default Home;