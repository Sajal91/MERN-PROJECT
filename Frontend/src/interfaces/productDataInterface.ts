import CATEGORY from "../constants/category"

interface ProductDataInterface {
    _id: string,
    Product_Name: string,
    Product_Price: number,
    Product_Image: string[],
    Product_Description: string,
    Product_Category: CATEGORY,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export default ProductDataInterface