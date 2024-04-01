export const getSingleProductDetail = async( id) =>{
    const res = await fetch (`http://localhost:5000/allProducts/${id}`, { cache: "no-store"})
    return res.json();
}