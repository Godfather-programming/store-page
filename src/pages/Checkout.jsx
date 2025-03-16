import { useContext } from "react"
import styles from "./Checkout.module.css"
import { ProductContext } from "../components/Card"
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