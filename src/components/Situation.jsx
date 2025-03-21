import { TbChecklist } from "react-icons/tb"
import styles from "./Situation.module.css"
import { Link } from "react-router-dom"
import { FaHashtag } from "react-icons/fa"
import { LuBadgeCheck } from "react-icons/lu"
import { useCart } from "../context/CartProvider"

function Situation() {
 const [state , dispatch] = useCart()
 
 const checkoutHandler = (type) => dispatch({ type })
  return (
    <div className={styles.container}>
           <div className={styles.info}> 
               <div className={styles.item}> 
                   <span> <TbChecklist size="1.5rem" color="#FF5722"/> </span>
                   <span className={styles.key}> Total: </span>
                   <span className={styles.value}> {state.total} $ </span>
                </div>

                <div className={styles.item}>
                   <span> <FaHashtag size="1.5rem" color="#FF5722"/> </span>
                   <span className={styles.key}> Quantity: </span>
                   <span className={styles.value}> {state.itemsCounter} </span>
                </div>

                <div className={styles.item}> 
                   <span> <LuBadgeCheck size="1.5rem" color="#FF5722"/> </span>
                   <span className={styles.key}> Status: </span>
                   {state.checkout ? <span className={styles.value}> ...Completed </span> : <span className={styles.value}> ...Pending </span>} 
                </div>
           </div>

           <span className={styles.Checkout} onClick={() => checkoutHandler("CHECKOUT")}> <Link> Checkout </Link> </span>
    </div>
  )
}

export default Situation