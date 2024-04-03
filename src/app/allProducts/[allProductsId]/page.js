
import { getAllProducts } from "../../../utils/getAllProducts";

import AllProductCard from "../../../components/ui/allProducts/AllProductsCard";
import { CloseFullscreen } from "@mui/icons-material";



const DynamicProductPage = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.category)
    

    return (
        <div>
            <div className="flex justify-center mt-5">
                <h1 className="text-3xl font-semibold">Total <span className="text-blue-800">{searchParams.category.toUpperCase()}</span>: {products.length} </h1>
            </div>
            <div className="mt-10">
                <AllProductCard products={products}></AllProductCard>
            </div>
            
        </div>
    );
};

export default DynamicProductPage;