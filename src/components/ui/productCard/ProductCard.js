// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react';

// const ProductCard = ({product}) => {
//     return (
//         <div className="max-h-[650px] pl-5 md:pl-12 lg:pl-10 mb-10">
//                             <div className="card w-96 h-full bg-inherit rounded-none shadow-md ">
//                                 <figure className="">

//                                     <Image height={250} width={385} src={product.image} alt="Image" className=" w-full object-fill h-[250px]" />
//                                 </figure>
//                                 <div className="card-body items-start text-center">
//                                     <h3 className="flex gap-3"> {product.name} </h3>
//                                     <h2 className="text-2xl"> {product.category}</h2>
//                                     <div className="flex w-9/12 justify-between">
//                                         <div className="">
//                                             <h2 className="text-lg text-gray-700">From <span className="text-xl font-semibold text-orange-600"> $: {product.price}</span> </h2>
//                                         </div>
//                                         {/* <div className="">
//                             <h2 className="card-title"><FaRegClock></FaRegClock> {duration_hours} Hours</h2>
//                         </div> */}
//                                     </div>
//                                     <div className="w-full gap-4 mb-3">
//                                         <hr className='border border-gray-400' />
//                                     </div>

//                                     <div className="flex justify-between w-Full gap-8">

//                                         <Link to={`/details/${product._id}`}><button className="btn btn-outline ">Show Details!</button></Link>
//                                         {/* <button onClick={addToWishlist} className="btn btn-ghost ">Add to Wishlist <FaRegHeart /></button> */}
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//     );
// };

// export default ProductCard;