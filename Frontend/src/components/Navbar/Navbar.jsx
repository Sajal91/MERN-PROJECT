import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css"

const Navbar = () => {
    const navRoutes = [
        { name: "Home", path: "/home" },
        { name: "About", path: "/about" },
        { name: "Collection", path: "/collection" },
        { name: "Login", path: "/login" }
    ];

    const activeNavStyle = { borderBottom: "solid 3px white" };
    const unactiveNavStyle = { borderBottom: "solid 3px transparent" };

    return (
        <nav className="fixed z-[999] left-0 top-0 flex w-screen justify-between items-center h-18 shadow-md py-4 bg-blue-500 text-white font-bold gap-10">
            <div className="w-[85vw] mx-auto flex justify-between items-center">
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
                    <button className="relative w-6 h-6 flex justify-center items-center cursor-pointer hover:scale-120 transition-all">
                        <BsCart2 className="w-full h-full mb-1" />
                        <span className="absolute flex justify-center items-center top-0 start-full w-6 h-3 -translate-x-1/2 -translate-y-1/2 bg-black text-white text-[11px] font-semibold rounded-full p-2">
                            {99}
                        </span>
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
