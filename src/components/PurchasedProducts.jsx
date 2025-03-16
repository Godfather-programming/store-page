import { useEffect, useState } from "react"
import styles from "./PurchasedProducts.module.css"
import { api } from "../services/config"
import { shortenText } from "../utils/stringfunction"


function PurchasedProducts() {
   const [buyProducts, setBuyProducts] = useState([])
   useEffect(() => {
    api.get("products/1").then(res => setBuyProducts(res))
   }, [])
   console.log(buyProducts)
  return (
    <div className={styles.container}>
  <div className={styles.wrapper}>
  <img className={styles.image} src={buyProducts.image} alt={buyProducts.title} /> 

  <span className={styles.title}> { buyProducts.title } </span>

  <div className={styles.content}> 
  <button> - </button>
  <span> 3 </span> 
  <button> + </button>
  </div>
  </div>
    </div>
  )
}

export default PurchasedProducts
