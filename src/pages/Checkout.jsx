import styles from "./Checkout.module.css"
import Situation from "../components/Situation"
import PurchasedProducts from "../components/PurchasedProducts"



function Checkout() {

  return (
    <div className={styles.container}>
    <Situation />
    <PurchasedProducts />
    </div>
  )
}

export default Checkout