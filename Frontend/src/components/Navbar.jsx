import { NavLink } from "react-router-dom";

function Navbar() {
    const navRoutes = [
        { name: "Home", path: "/home" },
        { name: "About", path: "/about" },
        { name: "Product", path: "/product" },
        { name: "Login", path: "/login" }
    ];

    const activeNavStyle = { borderBottom: "solid 3px blue" };
    const unactiveNavStyle = { borderBottom: "solid 3px transparent" };

    return (
        <nav className="flex w-full justify-center items-center py-4 bg-black text-white font-bold gap-10">
            {navRoutes.map(({ name, path }, index) => (
                <NavLink
                    key={index}
                    to={path}
                    style={({ isActive }) => (isActive ? activeNavStyle : unactiveNavStyle)}
                >
                    <p>{name}</p>
                </NavLink>
            ))}
        </nav>
    );
}

export default Navbar;
