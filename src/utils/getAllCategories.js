export const getAllCategories = async ()=>{
    const res = await fetch("https://binary-tech-server.vercel.app/category")
    return res.json()
}