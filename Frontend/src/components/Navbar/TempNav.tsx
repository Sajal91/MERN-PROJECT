import { FC, useState } from "react";
import navRoutes from "../../utilities/navRoutes";
import { NavLink } from "react-router";
import { IoSearch } from "react-icons/io5";
import { BsCart2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

const TempNav: FC = () => {
    const [menuToggle, setMenuToggle] = useState<boolean>(false);

    const handleMenuClick = () => {
        setMenuToggle(!menuToggle)
    }

    return (
        <nav className="bg-black text-white gap-10 shadow-lg fixed w-full z-[999]">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="flex shrink-0 items-center max-sm:hidden">
                        <img
                            className="h-8 w-auto"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                            alt="Company Logo"
                        />
                    </div>
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                            onClick={handleMenuClick}
                        >
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="block size-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                            <svg
                                className="hidden size-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                                data-slot="icon"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18 18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-1 ml-20 items-center justify-center sm:items-stretch sm:justify-center">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex gap-6 h-full">
                                {navRoutes.map(({ name, path }, index) => (
                                    <NavLink
                                        key={index}
                                        to={path}
                                        className={({ isActive }) =>
                                            `flex items-center text-gray-400 tracking-wider text-lg font-medium focus:outline-none transition-all duration-100 border-b-2 border-transparent 
                                hover:text-white ${isActive ? 'border-white text-white' : 'hover:border-white'}`
                                        }
                                    >
                                        <p className="text-sm">{name}</p>
                                    </NavLink>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex gap-4 items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <button className="w-6 h-6 flex justify-center items-center cursor-pointer hover:scale-105 transition-none">
                            <IoSearch className="w-full h-full" />
                        </button>
                        <button className="relative w-6 h-6 flex justify-center items-center cursor-pointer hover:scale-105 transition-none">
                            <BsCart2 className="w-full h-full mb-1" />
                            <span className="absolute h-4 w-4 flex justify-center items-center top-0 start-full -translate-x-1/2 -translate-y-1/2 bg-white text-black text-xs font-semibold rounded-full shadow-2xl">
                                {9}
                            </span>
                        </button>
                        <button className="w-6 h-6 flex justify-center items-center cursor-pointer hover:scale-105 transition-none">
                            <CgProfile className="w-full h-full" />
                        </button>
                    </div>
                </div>
            </div>

            {
                menuToggle &&
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        {navRoutes.map(({ name, path }, index) => (
                            <NavLink
                                key={index}
                                to={path}
                                className={({ isActive }) =>
                                    `text-gray-400 tracking-wider text-lg font-medium focus:outline-none transition-all duration-100 border-b-2 border-transparent 
                                hover:text-white ${isActive ? 'border-white text-white' : 'hover:border-white'}`
                                }
                            >
                                <p className="text-sm">{name}</p>
                            </NavLink>
                        ))}
                    </div>
                </div>
            }
        </nav>
    );
};

export default TempNav;