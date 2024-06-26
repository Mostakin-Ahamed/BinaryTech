"use client"
import React from 'react';

import { Box, Grid } from '@mui/material';
import AdminCart from '../../components/ui/AdminCart/AdminCart';

const layout = ({ children }) => {
    return (
        <Box >
            <div className='w-10/12 mx-auto'>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={12}>
                        {
                            <AdminCart></AdminCart>
                        }
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
};

export default layout;