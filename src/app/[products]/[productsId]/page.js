import React from 'react';

import QuantityControl from "../../../components/ui/QuantityControl/QuantityControl"


import { getSingleProductDetail } from "../../../utils/getSingleProductDetail"
import Image from 'next/image';


const ProductDetailPage = async ({ params }) => {
    const data = await getSingleProductDetail(params.productsId)
    return (
        <div className='w-9/12 mx-auto mt-10 flex justify-center'>
            <div className='w-3/4 mx-auto text-center mt-20 '>
                <Image src={data.image} alt='image.png' width={700} height={500} className=''></Image>
            </div>
            <div className='items-center w-3/4  mx-auto pt-20 pl-10'>
                <h1 className='text-4xl font-semibold mb-5'>{data.name}</h1>
                {
                    data.generation? <h1 className='text-xl mb-3 font-semibold'>Gen: {data.generation}</h1>:<></>
                }
                <h1 className='text-xl mb-3 font-semibold'>Manufacturer: {data.manufacturer}</h1>
                {
                    data.socket? <h1 className='text-xl mb-3 font-semibold'>Socket: {data.socket}</h1>:<></>
                }
                {
                    data.socket_type? <h1 className='text-xl mb-3 font-semibold'>Socket: {data.socket_type}</h1>:<></>
                }
                {
                    data.form_factor? <h1 className='text-xl mb-3 font-semibold'>Form Factor: {data.form_factor}</h1>:<></>
                }
                {
                    data.capacity? <h1 className='text-xl mb-3 font-semibold'>Capacity: {data.capacity}</h1>:<></>
                }
                {
                    data.chipset? <h1 className='text-xl mb-3 font-semibold'>Chipset: {data.chipset}</h1>:<></>
                }
                {
                    data.vram? <h1 className='text-xl mb-3 font-semibold'>Vram: {data.vram}</h1>:<></>
                }
                {
                    data.speed? <h1 className='text-xl mb-3 font-semibold'>Speed: {data.speed}</h1>:<></>
                }
                {
                    data.clock_speed? <h1 className='text-xl mb-3 font-semibold'>Clock Speed: {data.clock_speed}</h1>:<></>
                }
                {
                    data.type? <h1 className='text-xl mb-3 font-semibold'>Type: {data.type}</h1>:<></>
                }
                {
                    data.color? <h1 className='text-xl mb-3 font-semibold'>Color: {data.color}</h1>:<></>
                }
                {
                    data.interface? <h1 className='text-xl mb-3 font-semibold'>Interface: {data.interface}</h1>:<></>
                }
                {
                    data.rgb? <h1 className='text-xl mb-3 font-semibold'>RGB: Yes</h1>:<></>
                }
                {
                    data.cores? <h1 className='text-xl mb-3 font-semibold'>Core: {data.cores}  Threads: {data.threads}</h1>:<></>
                }
                {
                    data.base_clock?  <h1 className='text-xl mb-3 font-semibold'>Base-Clock: {data.base_clock}  Max-Clock: {data.max_clock}</h1>:<></>
                }
                {
                    data.cache?  <h1 className='text-xl mb-3 font-semibold'>Cache: {data.cache} </h1>:<></>
                }
                 <h1 className='text-3xl mb-3 font-semibold'><span className='text-orange-500'>Price: $</span> {data.price} + tax</h1>
                 <h1 className='text-lg font-semibold'>Description: {data.description}</h1>
                 
                <QuantityControl data={data}></QuantityControl>
            </div>
        </div>
    );
};

export default ProductDetailPage;