

const DynamicProductPage = ({params}) => {
    
    return (
        <div className="flex justify-center">
            <h1 className="text-5xl font-semibold">{params.allProductsId} </h1>
        </div>
    );
};

export default DynamicProductPage;