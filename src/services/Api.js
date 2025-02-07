import axios from "axios";
const client=axios.create({
    baseURL:"http://localhost:3004",
})
export async function getProducts() {
    const {data} =await client("/products");
    return data; 
}
export async function getProduct(id) {
    const {data}=await client(`/products/${id}`);
    return data;  
}
export async function getSliders() {
    const {data} =await client("/slider");
    return data; 
}