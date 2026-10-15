import { useEffect, useState } from "react"
import styles from "./PurchasedProducts.module.css"
import { api } from "../services/config"
import { shortenText } from "../utils/stringfunction"
import { MdDeleteOutline } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { decrease, increase, removeItem, selectorCart } from "../features/cart/cartSlice"


function PurchasedProducts() {


   const stateCart = useSelector(selectorCart)
   const dispatch = useDispatch()
  //  const [state , dispatch] = useCart()


  //  const clickHandler = (type, product) => dispatch({type, payload : product})
  return (
<div className={styles.container}>
{stateCart.selectedItems.map(product => 
  <div key={product.id} className={styles.wrapper}>
  <img className={styles.image} src={product.image} alt={product.title} /> 

  <span className={styles.title}> {shortenText(product.title)} </span>

  <div className={styles.content}> 
      {
        product.quantity === 1 && ( <button onClick={() => dispatch(removeItem(product))}> <MdDeleteOutline /> </button> )
      }
      {
        product.quantity > 1 && ( <button onClick={() => dispatch(decrease(product))}> - </button> )
      }
          { !!product.quantity && <span> {product.quantity} </span> }
          <button onClick={() => dispatch(increase(product))}> + </button>
      
  </div>
  </div>
    )}
</div>
  )
}

export default PurchasedProducts