import axios from "axios";
const client = axios.create({
  baseURL: "http://localhost:3004",
  baseURL2: "https://api.digikala.com/v2/product",
});
export async function getProducts() {
  const { data } = await client("/products");
  return data;
}
export async function getProduct(id) {
  const { data } = await client(`/products/${id}`);
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
