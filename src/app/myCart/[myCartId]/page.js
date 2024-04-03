"use client"
import React, { useContext } from 'react';
import {getCart} from '../../../utils/getCart'
import { AuthContext } from '../../../Provider/AuthProvider';
import UserCart from '../../../components/ui/UserCart/UserCart';

// 


const page = async () => {
    
    
    const carts = await getCart();    

    
    
    return (
        <>
        <div className=' text-center mt-10 mb-10 mx-auto'>
            <p className="font-semibold  text-xl">Your <span className="text-blue-500"> Cart </span> </p>
            <p className="font-sans ">Your Selected Product From Us! </p>
            
        </div>
        <UserCart carts={carts}></UserCart>
        </>
        
    );
};

export default page;