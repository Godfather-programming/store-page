import { TbChecklist } from "react-icons/tb"
import styles from "./Situation.module.css"
import { Link } from "react-router-dom"
import { FaHashtag } from "react-icons/fa"
import { LuBadgeCheck } from "react-icons/lu"
import { useDispatch, useSelector } from "react-redux"
import { checkout, selectorCart } from "../features/cart/cartSlice"
// import { useCart } from "../context/CartProvider"

function Situation() {
//  const [state , dispatch] = useCart()
  const stateCart = useSelector(selectorCart)
  const dispatch = useDispatch()
 
//  const checkoutHandler = (type) => dispatch(checkout())
  return (
    <div className={styles.container}>
           <div className={styles.info}> 
               <div className={styles.item}> 
                   <span> <TbChecklist size="1.5rem" color="#FF5722"/> </span>
                   <span className={styles.key}> Total: </span>
                   <span className={styles.value}> {stateCart.total} $ </span>
                </div>

                <div className={styles.item}>
                   <span> <FaHashtag size="1.5rem" color="#FF5722"/> </span>
                   <span className={styles.key}> Quantity: </span>
                   <span className={styles.value}> {stateCart.itemsCounter} </span>
                </div>

                <div className={styles.item}> 
                   <span> <LuBadgeCheck size="1.5rem" color="#FF5722"/> </span>
                   <span className={styles.key}> Status: </span>
                   {stateCart.checkout ? <span className={styles.value}> ...Completed </span> : <span className={styles.value}> ...Pending </span>} 
                </div>
           </div>

           <span className={styles.Checkout} onClick={() => dispatch(checkout())}> <Link> Checkout </Link> </span>
    </div>
  )
}

export default Situation