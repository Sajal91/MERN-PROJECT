import { FC } from "react";
import about from "../../assets/Images/about.png"
import Footer from "../Footer/Footer";

const About: FC = () => {
    return (
        <>
            <div className="pt-24 w-full scroll-smooth">
                <div className="mx-auto max-w-7xl w-full px-2 sm:px-6 lg:px-8 flex flex-col items-center">
                    <div className="w-full text-center">
                        <h1 className="text-2xl font-bold">About Us</h1>
                    </div>
                    <div className="flex w-full mt-10">
                        <div className="w-1/2 text-center">
                            <img src={about} className="w-[450px] ml-20" />
                        </div>
                        <div className="w-1/2 mt-5 ">
                            <p> Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes. </p>
                            <p className="mt-5">
                                Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
                            </p>
                            <h1 className="text-3xl font-bold mt-10 "> Our Mission
                            </h1>
                            <p className="mt-5 ">

                                Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
                            </p>

                        </div>

                    </div>
                    {/* <div className='footer-section w-full items-center justify-center mt-28'>
                        <Footer />
                    </div> */}

                </div>


            </div>
        </>
    );
};

export default About;
