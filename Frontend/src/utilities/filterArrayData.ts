interface FilterArrayInterface {
    id: number,
    Filter_Name: string,
    Filter_Type: string[]
}

const filterArr = <FilterArrayInterface[]> [
    {
        id: 0,
        Filter_Name: "Category",
        Filter_Type: ["Men", "Women", "Kids"]
    },
    {
        id: 1,
        Filter_Name: "Category",
        Filter_Type: ["Men", "Women", "Kids", "Men", "Women", "Kids"]
    },
    {
        id: 2,
        Filter_Name: "Category",
        Filter_Type: ["Men", "Women", "Kids", "Men", "Kids"]
    },
    {
        id: 3,
        Filter_Name: "Category",
        Filter_Type: ["Men", "Women", "Kids", "Men", "Women", "Kids", "Men", "Women", "Kids"]
    }
]

export default filterArr