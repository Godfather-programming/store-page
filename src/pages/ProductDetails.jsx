import styles from "./ProductDetail.module.css"

import { Link, useParams } from "react-router-dom"
import { BiLeftArrowAlt } from "react-icons/bi"
import { useProductDetails } from "../context/ProductsProvider"
import { BallTriangle } from "react-loader-spinner"
import { SiOpenproject } from "react-icons/si"
import { IoMdPricetag } from "react-icons/io"

function ProductDetails() {

    const { id } = useParams() 

    const productDetails = useProductDetails(+id)
    
  return (
    <>  
    {!productDetails ? <div className={styles.loading}> <BallTriangle /> </div> : 
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
            <img className={styles.img} src={productDetails.image} alt={productDetails.title}/>
        </div>
        <div className={styles.detailes}>
            <h3 className={styles.title}> {productDetails.title} </h3>
           <div className={styles.discriptionWrapper}> <p className={styles.description}> {productDetails.description} </p> </div>
            <div className={`${styles.category} ${styles.arrange1}`}> <SiOpenproject fontSize="1.5rem" color="#FF5722"/>  {productDetails.category} </div>
            <div>
                <div className={`${styles.wrapper} ${styles.price}`}>
                <div className={styles.category}>
                <IoMdPricetag fontSize="1.5rem" color="#FF5722"/> {productDetails.price} $
                </div>
                <div className={styles.return}>
                <Link className={styles.link} to="/products"> <span> <BiLeftArrowAlt fontSize="1.5rem"/> </span> <span className={styles.text}> Back to Shop </span> </Link>
                </div>
                </div>
               
            </div>
        </div>
    </div>
}
    </>
  )
}

export default ProductDetails