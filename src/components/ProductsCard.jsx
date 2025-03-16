import { createContext, useEffect, useReducer, useState } from "react"
import styles from "./ProductCard.module.css"
import { useSearchParams } from "react-router-dom"
import { BallTriangle } from "react-loader-spinner"
import { filterProducts, getInitialQuery, searchProducts, shortenText } from "../utils/stringfunction"
import Sidebar from "./Sidebar"
import ProductDetails from "../pages/ProductDetails"
import Card from "./Card"
import SeachBox from "./SeachBox"
import Checkout from "../pages/Checkout"
import { useProducts } from "../context/ProductsProvider"

const initalState = {
    isLoading : true,
    data : [],
    error : ""
}

const reducer = (state, action) => {
    console.log({state, action})
    switch (action.type) {
        case "SUCCESS":
        return { ... state, isLoading : false, data : action.payload }     
        break;
        case "FAILED" : 
        return { ... state, isLoading : false, error : action.payload }
        break;  
        default:
        throw new Error("invalid action") 
            break;
    }
}


function ProductsCard() {
   const products = useProducts()
 console.log(products)

 const [displayed, setDisplayed] = useState([])
 const [query, setQuery] = useState({})
 const [search, setSearch] = useState("")

 const [searchParams, setSearchParams] = useSearchParams()
 
 useEffect(() => {
    setDisplayed(products)

   setQuery(getInitialQuery(searchParams || ""))
   
  },[products])

 useEffect(() => {
    setSearchParams(query)
    setSearch(query.search || "")
    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducts(finalProducts, query.category)
    setDisplayed(finalProducts)
 }, [query])

const [show, setShow] = useState(false)

 

 const [condition, dispatch] = useReducer(reducer, initalState)
  return (
    <> 


    <SeachBox search={search} setSearch={setSearch} condition={condition} dispatch={dispatch} setSearchParams={setSearchParams} query={query} setQuery={setQuery}/>
    <div className={styles.container}>
     {!displayed.length && <div className={styles.loading}> <BallTriangle /> </div>}


     <div className={styles.cards}>{
displayed.map(product => <Card key={product.id} show={show} setShow={setShow} product={product}/>) 
        }</div>


    {!!condition.error && <div> {condition.error} </div>}    

    <Sidebar setSearchParams={setSearchParams} condition={condition} dispatch={dispatch} query={query} setQuery={setQuery}/>
 </div>
 </>
  )
}

export default ProductsCard














































































































// function Card({product}) {
//     const {category, description, id, image, price, rating, title} = product
   
//     const [corp, setCorp] = useState(null)
//     const [show, setShow] = useState(false)
     
//    const clickHandler = () => {
//        setShow(true)
//    //   setCorp(product)
     
   
//    }
   
   
//    return (
//        <div key={id} className={styles.card}>
//            { show && <ProductContext.Provider value={product}> 
//             <ProductDetails /> 
//            </ProductContext.Provider> }
//     <img className={styles.image} src={image} alt={title} />
//     <p className={styles.title}> {shortenText(title)} </p>
//     <p className={styles.price}>  {price} $ </p>
//     <div className={styles.profile}> 
//    <span onClick={clickHandler} className={styles.list}> <Link to={`/products/${id}`}> <TbListDetails size="1.5rem" color="#FF5722"/> </Link>  </span>
//    <span className={styles.buy}> <TbShoppingBagCheck size="1.5rem" color="#fff"/> </span>  
//     </div>
//     </div>
//     )
//    }
   
