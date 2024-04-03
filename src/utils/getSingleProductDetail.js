export const getSingleProductDetail = async( id) =>{
    const res = await fetch (`https://binary-tech-server.vercel.app/allProducts/${id}`, { cache: "no-store"})
    return res.json();
}