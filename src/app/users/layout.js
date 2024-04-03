import { Box, Grid } from '@mui/material';
import React from 'react';

const layout = () => {
    return (
        <Box >
            <div className='w-10/12 mx-auto'>
                <Grid container spacing={0}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={12}>
                        <p>users control page</p>
                    </Grid>
                </Grid>
            </div>
        </Box>
    );
};

export default layout;