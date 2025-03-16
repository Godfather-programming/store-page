import { createContext, useContext, useEffect, useState } from "react"
import { api } from "../services/config"

const ProductContext = createContext()

function ProductsProvider({children}) {
    const [products, setProducts] = useState([])
console.log(products)
    useEffect(() => {
    const fetchProducts = async () => {
      try {
      setProducts(await api.get("products"))

      } catch (error) {
        console.log(error.message)
      }
    }
    fetchProducts()
  } , [])
  return <ProductContext.Provider value={products}> {children} </ProductContext.Provider>
}

const useProducts = () => {
    const product = useContext(ProductContext)
    return product
}

export default ProductsProvider

export {useProducts}