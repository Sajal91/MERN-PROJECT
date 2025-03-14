import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css"
import navRoutes from "../../utilities/navRoutes";
import { FC } from "react";

const Navbar: FC = () => {

    const activeNavStyle = { borderBottom: "solid 2px white" };
    const unactiveNavStyle = { borderBottom: "solid 2px transparent" };

    return (
        <nav className="fixed z-[999] left-0 top-0 flex w-screen justify-between items-center h-18 shadow-md py-4 bg-black text-white font-bold gap-10">
            <div className="w-[85vw] mx-auto flex justify-between items-center">
                <div className="logo-wrapper text-2xl w-30 flex justify-center items-center">
                    <a href="/" className="w-full">Logo</a>
                </div>
                <div className="flex justify-center gap-8 transition-all">
                    {navRoutes.map(({ name, path }, index) => (
                        <NavLink
                            key={index}
                            to={path}
                            className={(e) => "text-gray-400 tracking-wider text-lg font-medium focus:outline-none transition-all duration-100 border-b-2 border-transparent" + (e.isActive ? "border-white text-white hover:text-white" : "hover:text-white hover:border-white border-transparent")}
                        >
                            <p className="">{name}</p>
                        </NavLink>
                    ))}
                </div>
                <div className="profile-wrapper w-30 flex gap-6 justify-center items-center">
                    <button className="w-6 h-6 flex justify-center items-center cursor-pointer hover:scale-105 transition-none">
                        <IoSearch className="w-full h-full" />
                    </button>
                    <button className="relative w-6 h-6 flex justify-center items-center cursor-pointer hover:scale-105 transition-none">
                        <BsCart2 className="w-full h-full mb-1" />
                        <span className="absolute flex justify-center items-center top-0 start-full -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-[11px] font-semibold rounded-full px-2">
                            {9}
                        </span>
                    </button>
                    <button className="w-6 h-6 flex justify-center items-center cursor-pointer hover:scale-105 transition-none">
                        <CgProfile className="w-full h-full" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;