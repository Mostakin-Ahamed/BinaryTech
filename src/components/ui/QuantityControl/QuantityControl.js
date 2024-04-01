"use client"
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Provider/AuthProvider';

const QuantityControl = ({ data }) => {
    const [quantity, setQuantity] = useState(1); // Initial quantity
    const { user } = useContext(AuthContext)


    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };
    const totalPrice = quantity * data.price;



    const addToCart = e => {
        e.preventDefault();
        delete data._id
        data.totalPrice = totalPrice.toFixed(2)
        data.quantity = quantity
        data.userEmail = user.email
        
        fetch('http://localhost:5000/addToCart', {

            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Tour added to WishList!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>
            <div className="mt-9 flex items-center">
                <h1 className='text-3xl font-semibold mr-5'>Quantity</h1>
                <button onClick={handleDecrease} className="btn btn-ghost w-14 bg-gray-200 px-2 py-1 rounded-l">
                    -
                </button>
                <input type="text" value={quantity} readOnly className="w-20 text-xl font-semibold text-center" />
                <button onClick={handleIncrease} className="btn btn-ghost w-14 bg-gray-200 px-2 py-1 rounded-r">
                    +
                </button>
            </div>
            <div className="w-full gap-4 mt-5 mb-3">
                <hr className='border border-gray-400' />
            </div>
            <div>
                <h1 className='text-3xl mb-3 font-semibold'><span className='text-orange-500 mr-20'>Total Price: </span> $ {totalPrice.toFixed(2)}</h1>
                <button onClick={addToCart} className="btn px-20 mt-5 btn-outline bg-blue-700 text-white">Add To Cart+</button>
            </div>
        </div>
    );
};

export default QuantityControl;
