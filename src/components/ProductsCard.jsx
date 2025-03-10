import { useEffect, useReducer } from "react"
import styles from "./ProductCard.module.css"
import { api } from "../services/config"
import { data } from "react-router-dom"
import { BallTriangle } from "react-loader-spinner"
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb"
import { shortenText } from "../utils/stringfunction"
import Sidebar from "./Sidebar"
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
 const [condition, dispatch] = useReducer(reducer, initalState)
 useEffect(() => {
    api.get("products").then(res => dispatch({type : "SUCCESS", payload : res})).catch(err => dispatch({type : "FAILED" , payload : err.message}))
 },[])
  return (
    <div className={styles.container}>
     {condition.isLoading && <div> <BallTriangle /> </div>}


     <div className={styles.cards}>{
condition.data.map(product => <Card product={product}/>) 
        }</div>


    {!!condition.error && <div> {condition.error} </div>}    

    <Sidebar />
 </div>
  )
}

export default ProductsCard

// shortenText(title)
function Card({product}) {
 const {category, description, id, image, price, rating, title} = product
 
return (
 <div key={id} className={styles.card}>
 <img className={styles.image} src={image} alt={title} />
 <p className={styles.title}> {shortenText(title)} </p>
 <p className={styles.price}>  {price} $ </p>
 <div className={styles.profile}> 
<span className={styles.list}> <TbListDetails size="1.5rem" color="#FF5722"/> </span>
<span className={styles.buy}> <TbShoppingBagCheck size="1.5rem" color="#fff"/> </span>  
 </div>
 </div>
 )
}