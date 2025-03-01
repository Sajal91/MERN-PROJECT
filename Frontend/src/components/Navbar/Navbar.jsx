import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css"

function Navbar() {
    const navRoutes = [
        { name: "Home", path: "/home" },
        { name: "About", path: "/about" },
        { name: "Product", path: "/product" },
        { name: "Login", path: "/login" }
    ];

    const activeNavStyle = { borderBottom: "solid 3px white" };
    const unactiveNavStyle = { borderBottom: "solid 3px transparent" };

    return (
        <nav className="fixed left-1/2 top-0 flex w-[100vw] -translate-x-1/2 justify-between items-center h-16 shadow-xl py-4 bg-blue-500 text-white font-bold gap-10">
            <div className="w-[75vw] mx-auto flex justify-between items-center">
                <div className="logo-wrapper text-2xl w-30 flex justify-center items-center">
                    <a href="/home" className="w-full">Logo</a>
                </div>
                <div className="nav-links flex justify-center items-center gap-6">
                    {navRoutes.map(({ name, path }, index) => (
                        <NavLink
                            key={index}
                            to={path}
                            style={(e) => (e.isActive ? activeNavStyle : unactiveNavStyle)}
                            className="px-2"
                        >
                            <p className="text-md hover:scale-110 transition-normal tracking-wider">{name}</p>
                        </NavLink>
                    ))}
                </div>
                <div className="profile-wrapper w-30 flex gap-6 justify-center items-center">
                    <button className="w-6 h-6 flex justify-center items-center cursor-pointer hover:scale-120 transition-all">
                        <IoSearch className="w-full h-full" />
                    </button>
                    <button className="w-6 h-6 flex justify-center items-center cursor-pointer hover:scale-120 transition-all">
                        <BsCart2 className="w-full h-full mb-1" />
                    </button>
                    <button className="w-6 h-6 flex justify-center items-center cursor-pointer hover:scale-120 transition-all">
                        <CgProfile className="w-full h-full" />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
