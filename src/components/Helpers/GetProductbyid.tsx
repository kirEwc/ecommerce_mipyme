import { products } from "@/data/products";


export const GetProductbyid = (id = '') => {
  return products.find((product) => product.id === id)
}
