import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { getAllCategories } from '../../../utils/getAllCategories';
import Link from 'next/link';

const CategoryList = async () => {
    const allCategories  = await getAllCategories()
    return (
        <Box className="mt-5">
            <div className='flex justify-center mb-5 '>
                <p className='text-3xl font-serif font-bold'>Categories</p>
            </div>
            <Divider></Divider>
            <Stack rowGap={1} sx={{mt: 2.5}}>
                {
                    allCategories.map(category =>(
                        <Button variant='outlined' key={category._id}>
                            <Link href={`allProducts?category=${category.title.toLowerCase()}`}>{category.title.toUpperCase()}</Link>
                        </Button>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;