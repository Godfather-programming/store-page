import ProductsCard from "../components/ProductsCard"
import SeachBox from "../components/SeachBox"
import Sidebar from "../components/Sidebar"
import styles from "./Product.module.css"


function Prouduct() {
  return (
    <div>
      <SeachBox />
      <ProductsCard />
    </div>
  )
}

export default Prouduct