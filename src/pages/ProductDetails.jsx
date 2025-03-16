import { useContext, useEffect, useState } from "react"
import styles from "./ProductDetail.module.css"

import { ProductContext } from "../components/Card" 
import { Link, NavLink } from "react-router-dom"
import { api } from "../services/config"
import { shortenText } from "../utils/stringfunction"
import { TbPinnedFilled } from "react-icons/tb"
import { PiMapPinPlusFill } from "react-icons/pi"
import { BiLeftArrowAlt } from "react-icons/bi"

function ProductDetails() {
    const [product, setProduct] = useState([]) 
    useEffect(() => {
        api.get("products/3").then(res => setProduct(res))
    }, [])
    const {category, description, id, image, price, rating, title} = product
    console.log(product)

  
//  const res = useContext(ProductContext)
//  console.log(res)
  return (
    <div className={styles.container}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={product.image} alt={product.title}/>
        </div>
        <div className={styles.detailes}>
            <h3 className={styles.title}> {product.title} </h3>
           <div className={styles.discriptionWrapper}> <p className={styles.description}> {product.description} </p> </div>
            <div className={`${styles.category} ${styles.arrange1}`}> <TbPinnedFilled fontSize="1.5rem" color="#FF5722"/>  {product.category} </div>
            <div>
                <div className={`${styles.wrapper} ${styles.price}`}>
                <div className={styles.category}>
                <PiMapPinPlusFill fontSize="1.5rem" color="#FF5722"/> {product.price} $
                </div>
                <div className={styles.return}>
                <Link className={styles.link} to="/products"> <span> <BiLeftArrowAlt fontSize="1.5rem"/> </span> <span className={styles.text}> Back to Shop </span> </Link>
                </div>
                </div>
               
            </div>
        </div>
    </div>
  )
}

export default ProductDetails