import { FC } from "react"
import Footer from "../Footer/Footer"

const Login: FC = () => {
    return (
        <>
            <div className="absolute left-0 top-0 pt-24 w-full h-screen overflow-scroll scroll-smooth flex justify-center">

                <div className="absolute left-1/2 -translate-x-1/2 w-[85vw]">
                <h1 className='text-center text-5xl  uppercase mt-20'>
                 Login <span className="inline-block scale-x-300">-</span>
                </h1>
                <div className="mt-10 bg-white p-6   w-[450px] m-auto">
                    <form className="flex flex-col gap-4 ">
                        <input
                            type="text"
                            id="Username"
                            placeholder="Username"
                            className="border border-gray-300 p-3  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            id="Password"
                            placeholder="Password"
                            className="border border-gray-300 p-3  focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="bg-black text-white py-2 px-4  cursor-pointer hover:bg-gray-800 transition"
                        >
                            Login
                        </button>
                    </form>
                    <button> Forgot your password? </button>
                    <button className="ml-32"> Create account </button>
                </div>
                <div className='footer-section w-full items-center justify-center mt-28'>
                    <Footer />
                </div>
                </div></div>
        </>
    )
}

export default Login