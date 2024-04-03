import { Box, Button, Divider, Link, Stack } from '@mui/material';
import React from 'react';

const AdminCategory = () => {
    return (
        <div>
            <Box className="mt-5">
                <div className='flex justify-center mb-5 '>
                    <p className='text-3xl font-serif font-bold'>Categories</p>
                </div>
                <Divider></Divider>
                <Stack rowGap={1} sx={{ mt: 2.5 }}>

                    <Button variant='outlined' >
                        <Link href={`allProducts?category=${category.title.toLowerCase()}`}>Order List</Link>
                    </Button>
                    <Button variant='outlined' >
                        <Link href={`allProducts?category=${category.title.toLowerCase()}`}>Order List</Link>
                    </Button>
                    <Button variant='outlined' >
                        <Link href={`allProducts?category=${category.title.toLowerCase()}`}>Order List</Link>
                    </Button>
                </Stack>
            </Box>
        </div>
    );
};

export default AdminCategory;