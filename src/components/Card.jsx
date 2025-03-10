
import { createContext, useState } from "react";
import styles from "./Card.module.css"
import ProductDetails from "./ProductDetails";
import { shortenText } from "../utils/stringfunction";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";

export const ProductContext = createContext();
function Card({product, setCorp}) {
    const {category, description, id, image, price, rating, title} = product
   
 

   
   
   return (
       <div key={id} className={styles.card}>
    <img className={styles.image} src={image} alt={title} />
    <p className={styles.title}> {shortenText(title)} </p>
    <p className={styles.price}>  {price} $ </p>
    <div className={styles.profile}> 
   <span className={styles.list}> <Link to={`/products/${id}`}> <TbListDetails size="1.5rem" color="#FF5722"/> </Link>  </span>
   <span className={styles.buy}> <TbShoppingBagCheck size="1.5rem" color="#fff"/> </span>  
    </div>
    </div>
    )
   }
   
export default Card