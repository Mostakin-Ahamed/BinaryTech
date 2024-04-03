
import React, { useState } from 'react';
import { getCart } from '../../../utils/getCart'
import Image from 'next/image';
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from 'sweetalert2';


const AdminCart = async () => {
    const carts = await getCart()

    

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/wishlist/${id}`, {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    })
                        .then(res => {
                            console.log(res);
                            if (res.ok) {
                                return res.json();
                            }
                            throw new Error('Network response was not ok.');
                        })
                        .then(data => {
                            if (data.deletedCount > 0) {
                                // refetch();
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your file has been deleted.",
                                    icon: "success"
                                });
                            }
                        })
                        .catch(error => {
                            console.error('Error deleting file:', error);
                            Swal.fire({
                                title: "Error!",
                                text: "An error occurred while deleting the file.",
                                icon: "error"
                            });
                        });
                }
            });
    };




    return (
        <div>
            <div className=' text-center mt-10  mb-10 mx-auto'>
                <p className="font-semibold  text-xl">Pending <span className="text-blue-500"> Orders </span> </p>


            </div>
            <table className="table">
                {/* head */}
                <thead>
                    <th>
                        #
                    </th>
                    <th>Product Name</th>
                    <th>User Email</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
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
                                            <div className="text-sm ">{service.name}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {service.userEmail}

                                </td>
                                <td>
                                    {service.quantity}

                                </td>
                                <td>$ {service.totalPrice} </td>
                                <th>
                                    <h2 className=" text-red-400">{service.status}</h2>
                                </th>
                                <th>
                                    <button onClick={() => handleDelete(service._id)} className="btn btn-ghost btn-lg text-red-400">
                                        <FaRegTrashCan />
                                    </button>
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

export default AdminCart;