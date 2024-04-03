export const getCart = async ()=>{
    const res = await fetch('https://binary-tech-server.vercel.app/myCart', { cache: "no-store"})
    return  res.json();
}