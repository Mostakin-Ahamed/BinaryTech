"use client"
import React from 'react';
import AdminCart from '../../components/ui/AdminCart/AdminCart';

const layout = ({ children }) => {
    return (
        <div className='w-9/12 mx-auto'>
            {
                children
            }
            <AdminCart></AdminCart>
        </div>
    );
};

export default layout;