import Link from "next/link";
import { getAllProducts } from "../../../utils/getAllProducts";
import Image from "next/image";
import ProductCard from '../../../components/ui/productCard/ProductCard';
import { Button, buttonBaseClasses } from "@mui/material";


const DynamicProductPage = async ({ searchParams }) => {


    const products = await getAllProducts(searchParams.category)

    return (
        <div>
            <div className="flex justify-center mt-5">
                <h1 className="text-3xl font-semibold">Total <span className="text-blue-800">{searchParams.category.toUpperCase()}</span>: {products.length} </h1>
            </div>
            <div  className="mt-10">
                <div className="grid grid-cols-3 ">
                    {
                        products.map(product => (
                            <div key={product._id}>
                                <div className="max-h-[650px] pl-5 md:pl-12 lg:pl-10 mb-10">
                                    <div className="card w-96 h-full bg-inherit rounded-none shadow-md ">
                                        <figure className="">
                                            <Image src={product.image} width={385} height={250} alt="Image" className="object-contain" />
                                        </figure>
                                        <div className="card-body items-start text-center">

                                            <h2 className="text-2xl"> {product.name}</h2>
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

export default DynamicProductPage;