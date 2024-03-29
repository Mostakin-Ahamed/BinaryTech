"use client"

import React, { useState } from 'react';
import { Grid, Pagination } from '@mui/material';

import products from "../../components/ui/productsList/ProductList"
const Page = () => {
    const [currentPage, setCurrentPage] = useState(1); 
    const data = products()
    console.log(data);
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <div className='w-9/12 mx-auto'>
            <div className="font-bold mt-5 text-2xl text-center mb-16 ">
                <p>All of Our <span className="text-blue-500"> Products</span> </p>
            </div>
            {/* {
                data.map()
            } */}
            <Grid container justifyContent="center">
                <Pagination
                    count={10} // Example: total number of pages
                    page={currentPage}
                    onChange={handlePageChange}
                    siblingCount={1} // Number of sibling page links to show
                    boundaryCount={1} // Number of first and last page links to show
                    variant="outlined"
                    shape="rounded"
                />
            </Grid>
        </div>
    );
};

export default Page;