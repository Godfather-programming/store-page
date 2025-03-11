import { createContext, useEffect, useReducer, useState } from "react"
import styles from "./ProductCard.module.css"
import { api } from "../services/config"
import { data, Link, useSearchParams } from "react-router-dom"
import { BallTriangle } from "react-loader-spinner"
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb"
import { shortenText } from "../utils/stringfunction"
import Sidebar from "./Sidebar"
import ProductDetails from "./ProductDetails"
import Card from "./Card"
import SeachBox from "./SeachBox"
import Checkout from "../pages/Checkout"
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
const [show, setShow] = useState(false)

const [searchParams, setSearchParams] = useSearchParams()
 

 const [condition, dispatch] = useReducer(reducer, initalState)
 useEffect(() => {
    api.get("products").then(res => dispatch({type : "SUCCESS", payload : res})).catch(err => dispatch({type : "FAILED" , payload : err.message}))
 },[])
  return (
    <> 


    <SeachBox condition={condition} dispatch={dispatch} setSearchParams={setSearchParams}/>
    <div className={styles.container}>
     {condition.isLoading && <div> <BallTriangle /> </div>}


     <div className={styles.cards}>{
condition.data.map(product => <Card show={show} setShow={setShow} product={product}/>) 
        }</div>


    {!!condition.error && <div> {condition.error} </div>}    

    <Sidebar setSearchParams={setSearchParams}/>
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
   
