export const getAllProducts = async ()=>{
    const res = await fetch("http://localhost:5000/products")
    return  res.json();
}