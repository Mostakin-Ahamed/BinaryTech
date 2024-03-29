import { Box, Container, Grid } from '@mui/material';
import CategoryList from '../../components/ui/CategoryList/CategoryList';



const ProductsLayout = ({children}) => {
    
    return (
      <Box>
        <Container>
            <Grid container spacing={2}>
                <Grid item xs ={2}>
                    <CategoryList></CategoryList>
                </Grid>
                <Grid item xs = {10}>
                    {children}
                </Grid>
            </Grid>
        </Container>
      </Box>  
    );
};

export default ProductsLayout;
