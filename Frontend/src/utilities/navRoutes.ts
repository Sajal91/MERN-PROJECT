interface NavRoutesInterface {
    name: string,
    path: string
}

const navRoutes = <NavRoutesInterface[]> [
    { 
        name: "Home", 
        path: "/" 
    },
    { 
        name: "About", 
        path: "/about" 
    },
    { 
        name: "Collection", 
        path: "/collection" 
    },
    { 
        name: "Login", 
        path: "/login" 
    }
]

export default navRoutes