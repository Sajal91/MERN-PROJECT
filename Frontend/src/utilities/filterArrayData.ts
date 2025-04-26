import CATEGORY from "../constants/category"

interface FilterArrayInterface {
    id: number,
    Filter_Name: string,
    Filter_Type: string[]
}

const filterArr: FilterArrayInterface[] = [
    {
        id: 0,
        Filter_Name: "Category",
        Filter_Type: [CATEGORY.MEN, CATEGORY.WOMEN, CATEGORY.KIDS]
    },
    // {
    //     id: 1,
    //     Filter_Name: "Sub Category",
    //     Filter_Type: [CATEGORY.TOP_WEAR, CATEGORY.BOTTOM_WEAR, CATEGORY.WINTER_WEAR]
    // }
]

export default filterArr