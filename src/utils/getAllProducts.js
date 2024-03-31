export const getAllProducts = async ( category)=>{
    const res = await fetch(`http://localhost:5000/allProducts?category=${category}`, { cache: "no-store"})
    return  res.json();
}