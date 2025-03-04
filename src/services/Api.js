import axios from "axios";
import Cookies from "js-cookie";

const client = axios.create({
  baseURL: "http://localhost:3004",
});
const authClient = axios.create({
  baseURL: "http://localhost:3004",
  headers:{
    token:Cookies.get("token")
  }
});
export async function getProducts() {
  const { data } = await client("/products");
  return data;
}
export async function getProduct(id) {
  const { data } = await client(`/products/${id}`);
  return data;
}
export async function checkDiscount(code) {
  const { data } = await client(`/discount?code=${code}`);
  return data;
}

export async function getHomeSliders() {
  const { data } = await client("/slider");
  return data;
}
export async function getHomeBanners(placement) {
  const { data } = await client("/banners");
  return data.filter((item) => item.placement === placement);
}
export async function login([username,password]){
  const {data}=await client({
    method:"post",
    url:"/login",
    data:[username,password]
  })
  return data
}
export async function createProduct(params){
  const {data}=await client({
    method:"post",
    url:"/products",
    data:params
  })
  return data
}