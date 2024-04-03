export const getAllCategories = async ()=>{
    const res = await fetch("https://binary-tech-server.vercel.app/category",{ cache: "no-store"})
    return res.json()
}