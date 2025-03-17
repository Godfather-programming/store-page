import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layout/layout"
import Prouduct from "./pages/Prouduct"
import Checkout from "./pages/Checkout"
import Page404 from "./pages/page404"
import ProductDetails from "./pages/ProductDetails"
import { useEffect, useState } from "react"
import { api } from "./services/config"
import ProductsProvider from "./context/ProductsProvider"
import CartProvider from "./context/CartProvider"


function App() {
//   useEffect(() => {
//     api.get("products").then(res => console.log(res)).catch(err => dispatch({type : "FAILED" , payload : err.message}))
//  },[])
  return (
    <>
  <CartProvider> 
  <ProductsProvider> 
  <Layout>
  <Routes>
    <Route path="/products" element={<Prouduct />} />  
    <Route path="/products/:id" element={<ProductDetails />} />
    <Route index element={<Navigate to="/products"/>} />
    <Route path="/checkout" element={<Checkout />}/>
    <Route path="/*" element={<Page404 />}/>  
   </Routes>
  </Layout>
  </ProductsProvider>
  </CartProvider>  
    </>
  )
}

export default App
