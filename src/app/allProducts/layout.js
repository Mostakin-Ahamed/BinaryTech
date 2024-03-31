import { Box, Container, Grid } from '@mui/material';
import CategoryList from '../../components/ui/CategoryList/CategoryList';



const ProductsLayout = ({children}) => {
    
    return (
      <Box >
        <div className='w-10/12 mx-auto'>
        <Grid container spacing={2}>
                <Grid item xs ={2}>
                    <CategoryList></CategoryList>
                </Grid>
                <Grid item xs = {10}>
                    {children}
                </Grid>
            </Grid>
        </div>
            
        
      </Box>  
    );
};

export default ProductsLayout;
