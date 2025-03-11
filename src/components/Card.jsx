
import { createContext, useState } from "react";
import styles from "./Card.module.css"
import ProductDetails from "./ProductDetails";
import { shortenText } from "../utils/stringfunction";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { LuTrash } from "react-icons/lu";

export const ProductContext = createContext();
function Card({product, show, setShow}) {
    const {category, description, id, image, price, rating, title} = product
   
 const [buy, setBuy] = useState(false)
 const [number, setNumber] = useState(1)


const clickHandler = () => {
 setShow(true)
}

 const buyHandler = () => {
    setBuy(true)
 }
   
   return (
       <div key={id} className={styles.card}>
     {show && <ProductContext.Provider value={product}> <ProductDetails /> </ProductContext.Provider> }
    <img className={styles.image} src={image} alt={title} />
    <p className={styles.title}> {shortenText(title)} </p>
    <p className={styles.price}>  {price} $ </p>
    <div className={styles.profile}> 
    <span className={styles.list} onClick={clickHandler}> <Link to={`/products/${id}`}> <TbListDetails size="1.5rem" color="#FF5722"/> </Link>  </span> 
   {buy ?  <div className={styles.amount}> {number === 1 ? <span className={`${styles.sign} ${styles.trash}`} onClick={() => setBuy(false)}> <LuTrash /> </span>  : <span className={styles.sign} onClick={() => setNumber(number => number - 1)}> - </span> } <span> {number} </span> <span className={styles.sign} onClick={() => setNumber(number => number + 1)}> + </span> </div> : <span className={styles.buy} onClick={buyHandler}> <TbShoppingBagCheck size="1.5rem" color="#fff"/> </span>}  
    </div>
    </div>
    )
   }
   
export default Card