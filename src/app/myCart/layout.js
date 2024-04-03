

import React, { useContext } from 'react';
import UserCart from '../../components/ui/UserCart/UserCart';
import { AuthContext } from '../../Provider/AuthProvider';

const layout = ({ children }) => {


    return (
        <div className='w-9/12 mx-auto'>
            {
                children
            }
            <UserCart></UserCart>
        </div>
    );
};

export default layout;