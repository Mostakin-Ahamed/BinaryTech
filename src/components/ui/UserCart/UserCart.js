

import React, { useContext } from 'react';
import { getCart } from '../../../utils/getCart'
import Image from 'next/image';
import { AuthContext } from '../../../Provider/AuthProvider';

const UserCart = async () => {
    const carts = await getCart()
    // const { user } = useContext(AuthContext)
    // console.log(user);


    return (
        <div>
            <table className="table">
                {/* head */}
                <thead>
                    <th>
                        #
                    </th>
                    <th>Product Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Status</th>
                </thead>
                <tbody>
                    {
                        carts.map((service, index) =>
                            <tr key={service._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <Image src={service.image} height={100} width={100} alt='image'></Image>
                                            </div>
                                        </div>
                                        <div>
                                            {/* <div className="font-bold">{service.tourName}</div> */}
                                            <div className="text-sm ">{service.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {service.quantity}

                                </td>
                                <td>$ {service.totalPrice} </td>
                                <th>
                                    <div>
                                        {
                                            service?.status === "pending" ? <h2 className=" text-red-400">{service.status}</h2> : <h2 className=" text-green-400">{service.status}</h2>
                                        }
                                    </div>
                                </th>
                            </tr>
                        )
                    }
                </tbody>




            </table>
            <div className="w-full gap-4 mt-5 mb-3">
                <hr className='border border-gray-400' />
            </div>

        </div>
    );
};

export default UserCart;