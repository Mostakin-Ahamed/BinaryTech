"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const PopularProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://binary-tech-server.vercel.app/popular")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    return (
        <div className='w-9/12 mx-auto'>
            <div className="mt-10">
                <div className=" grid gap-5 grid-cols-3 ">
                    {
                        products.map(product => (
                            <div key={product._id}>
                                <div className=" pl-5  md:pl-12 lg:pl-10 mb-10">
                                    <div className="card w-96 h-full bg-inherit rounded-none shadow-md ">
                                        <figure className="w-[450px]  h-[300px]">
                                            <Image src={product.image}  width={350} height={200} alt="Image" className="object-contain h-[230px]" />
                                        </figure>
                                        <div className="card-body  items-start text-center">

                                            <h2 className="text-xl"> {product.name}</h2>
                                            <div className="flex w-9/12 justify-between">
                                                <div className="">
                                                    <h2 className="text-lg text-gray-700">Price <span className="text-xl font-semibold text-orange-600"> $: {product.price}</span> </h2>
                                                </div>

                                            </div>
                                            <div className="w-full gap-4 mb-3">
                                                <hr className='border border-gray-400' />
                                            </div>

                                            <div className="flex justify-between w-Full gap-8">

                                                <Link href={`/details/${product._id}`}><button className="btn btn-outline bg-blue-700 text-white">Show Details!</button></Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PopularProducts;