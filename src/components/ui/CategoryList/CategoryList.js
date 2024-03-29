import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import { getAllCategories } from '../../../utils/getAllCategories';
import Link from 'next/link';

const CategoryList = async () => {
    const allCategories   = await getAllCategories()
    console.log(allCategories);
    return (
        <Box className="mt-5">
            <div className='flex justify-center mb-5 '>
                <p className='text-3xl font-serif font-bold'>Categories</p>
            </div>
            <Divider></Divider>
            <Stack rowGap={1} sx={{mt: 2.5}}>
                {
                    allCategories.map(category =>(
                        <Button variant='outlined' style={{ textAlign: 'left' }} key={category._id}>
                            <Link href={category.title}>{category.title}</Link>
                        </Button>
                    ))
                }
            </Stack>
        </Box>
    );
};

export default CategoryList;