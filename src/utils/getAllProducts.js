export const getAllProducts = async ( category)=>{
    const res = await fetch(`https://binary-tech-server.vercel.app/allProducts?category=${category}`, { cache: "no-store"})
    return  res.json();
}