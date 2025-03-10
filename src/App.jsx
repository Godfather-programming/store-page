import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Layout from "./layout/layout"
import Prouduct from "./pages/Prouduct"
import Checkout from "./pages/Checkout"
import Page404 from "./pages/page404"


function App() {

  return (
    <>
  <Layout>
   <Routes>
    <Route path="/products" element={<Prouduct />} />  
    <Route path="/" element={<Navigate to="/products"/>} />
    <Route path="/checkout" element={<Checkout />}/>
    <Route path="/*" element={<Page404 />}/>  
   </Routes>
 {/* <h1> hi </h1> */}
  </Layout>
    </>
  )
}

export default App
