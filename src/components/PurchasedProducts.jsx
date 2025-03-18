import { useEffect, useState } from "react"
import styles from "./PurchasedProducts.module.css"
import { api } from "../services/config"
import { shortenText } from "../utils/stringfunction"
import { useCart } from "../context/CartProvider"
import { MdDeleteOutline } from "react-icons/md"


function PurchasedProducts() {
   const [buyProducts, setBuyProducts] = useState([])
   useEffect(() => {
    api.get("products/1").then(res => setBuyProducts(res))
   }, [])

   const [state , dispatch] = useCart()


   const clickHandler = (type, product) => dispatch({type, payload : product})
  return (
<div className={styles.container}>
{state.selectedItems.map(product => 
  <div key={product.id} className={styles.wrapper}>
  <img className={styles.image} src={product.image} alt={product.title} /> 

  <span className={styles.title}> {shortenText(product.title)} </span>

  <div className={styles.content}> 
      {
        product.quantity === 1 && ( <button onClick={() => clickHandler("REMOVE_ITEM", product)}> <MdDeleteOutline /> </button> )
      }
      {
        product.quantity > 1 && ( <button onClick={() => clickHandler("DECREASE", product)}> - </button> )
      }
          { !!product.quantity && <span> {product.quantity} </span> }
          <button onClick={() => clickHandler("INCREASE", product)}> + </button>
      
  </div>
  </div>
    )}
</div>
  )
}

export default PurchasedProducts