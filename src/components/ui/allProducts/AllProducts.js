

import { getAllProducts } from '../../../utils/getAllProducts';
import ProductList from '../productsList/ProductList';

const AllProducts =  async() => {
    
    const allProducts =  await getAllProducts()
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className='w-9/12 mx-auto'>
            
            {
                allProducts.map(product =>(
                    <button key={product._id}>{product.name.toUpperCase()}</button>
                ))
            }
            
        </div>
    );
};

export default AllProducts;
