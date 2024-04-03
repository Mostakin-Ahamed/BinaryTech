"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from 'react';
import { Pagination } from '@mui/material';




const AllProductsCard = ({ products }) => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 9;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const currentProducts = products.slice(startIndex, endIndex);






    return (
        <>

            {<div className="grid grid-cols-3 ">
                    {
                          currentProducts.map(product => (
                            <div key={product._id}>
                                <div className="max-h-[650px] pl-5 md:pl-12 lg:pl-10 mb-10">
                                    <div className="card w-96 h-full bg-inherit rounded-none shadow-md ">
                                        <figure className="">
                                            <Image src={product.image} width={385} height={250} alt="Image" className="object-contain" />
                                        </figure>
                                        <div className="card-body items-start text-center">
                
                                            <h2 className="text-2xl"> {product.name}</h2>
                                            <h2 className="text-sm bg-gray-500 rounded-md text-white py-1 px-1"> {product.category}</h2>
                                            <div className="flex w-9/12 justify-between">
                                                <div className="">
                                                    <h2 className="text-lg text-gray-700">Price <span className="text-xl font-semibold text-orange-600"> $: {product.price}</span> </h2>
                                                </div>
                
                                            </div>
                                            <div className="w-full gap-4 mb-3">
                                                <hr className='border border-gray-400' />
                                            </div>
                
                                            <div className="flex justify-between w-Full gap-8">
                
                                                <Link href={`/${product.category.toLowerCase()}/${product._id}`}><button className="btn btn-outline bg-blue-700 text-white">Show Details!</button></Link>
                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                
                
                
                            </div>
                
                
                            ))
                    }
            </div>}
                
              

            <div className="flex justify-center mb-5">
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                />
            </div>

        </>

    );
};

export default AllProductsCard;
