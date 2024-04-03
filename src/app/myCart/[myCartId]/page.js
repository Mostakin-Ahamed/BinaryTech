"use client"

import React, { useContext } from 'react';
import {getCart} from '../../../utils/getCart'


const page = async () => {
    
     
    
    const products = await getCart()

    
    
    return (
        <div className=' text-center mt-10  mx-auto'>
            <p className="font-semibold  text-xl">Your <span className="text-blue-500"> Cart </span> </p>
            <p className="font-sans ">Your Selected Product From Us! </p>
            
        </div>
    );
};

export default page;