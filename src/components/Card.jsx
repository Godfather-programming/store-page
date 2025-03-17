
import { createContext, useState } from "react";
import styles from "./Card.module.css"
import ProductDetails from "../pages/ProductDetails";
import { shortenText } from "../utils/stringfunction";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { LuTrash } from "react-icons/lu";
import { useCart } from "../context/CartProvider";

export const ProductContext = createContext();
function Card({product, show, setShow}) {
    const {category, description, id, image, price, rating, title} = product
   
 const [buy, setBuy] = useState(false)

  const [state , dispatch] = useCart()
  

const clickHandler = () => {
 setShow(true)
}

 const buyHandler = () => {
    setBuy(true)
    dispatch({type: "ADD", payload: product})
 }
   
   return (
       <div key={id} className={styles.card}>
     {show && <ProductContext.Provider value={product}> <ProductDetails /> </ProductContext.Provider> }
    <img className={styles.image} src={image} alt={title} />
    <p className={styles.title}> {shortenText(title)} </p>
    <p className={styles.price}>  {price} $ </p>
    <div className={styles.profile}> 
    <span className={styles.list} onClick={clickHandler}> <Link to={`/products/${id}`}> <TbListDetails size="1.5rem" color="#FF5722"/> </Link>  </span> 
   {buy ?  <div className={styles.amount}> {number === 1 ? <span className={`${styles.sign} ${styles.trash}`} onClick={() => setBuy(false)}> <LuTrash /> </span>  : <span className={styles.sign} onClick={() => setNumber(number => number - 1)}> - </span> } <span> {number} </span> <span className={styles.sign} onClick={() => setNumber(number => number + 1)}> + </span> </div> : <span className={styles.buy} onClick={buyHandler}> <TbShoppingBagCheck size="1.5rem" color="#fff"/> </span>}  
    </div>
    </div>
    )
   }
   
export default Card












































// import { useContext, useEffect, useState } from "react"
// import styles from "./ProductDetail.module.css"

// import { ProductContext } from "./Card" 
// import { Link, NavLink } from "react-router-dom"
// import { api } from "../services/config"
// import { shortenText } from "../utils/stringfunction"
// import { TbPinnedFilled } from "react-icons/tb"
// import { PiMapPinPlusFill } from "react-icons/pi"
// import { BiLeftArrowAlt } from "react-icons/bi"

// function ProductDetails() {
//     const [product, setProduct] = useState([]) 
//     useEffect(() => {
//         api.get("products/3").then(res => setProduct(res))
//     }, [])
//     const {category, description, id, image, price, rating, title} = product
//     console.log(product)

  

//   return (
//     <div className={styles.container}>
//         <div className={styles.imgWrapper}>
//             <img className={styles.img} src={product.image} alt={product.title}/>
//         </div>
//         <div className={styles.detailes}>
//             <h3 className={styles.title}> {product.title} </h3>
//            <div className={styles.discriptionWrapper}> <p className={styles.description}> {product.description} </p> </div>
//             <div className={`${styles.category} ${styles.arrange1}`}> <TbPinnedFilled fontSize="1.5rem" color="#FF5722"/>  {product.category} </div>
//             <div>
//                 <div className={`${styles.wrapper} ${styles.price}`}>
//                 <div className={styles.category}>
//                 <PiMapPinPlusFill fontSize="1.5rem" color="#FF5722"/> {product.price} $
//                 </div>
//                 <div className={styles.return}>
//                 <Link className={styles.link} to="/products"> <span> <BiLeftArrowAlt fontSize="1.5rem"/> </span> <span className={styles.text}> Back to Shop </span> </Link>
//                 </div>
//                 </div>
               
//             </div>
//         </div>
//     </div>
//   )
// }

// export default ProductDetails














































// .container {
//    display: flex;
//    gap: 70px;
// }

// .imgWrapper {
//    width: 250px;
//    height: 260px;
//    background-color: #fff;
//    text-align: center;
//    border: 3px dashed #FF5722;
//    line-height: 350px;
//    border-radius: 50px;
//    -webkit-border-radius: 50px;
//    -moz-border-radius: 50px;
//    -ms-border-radius: 50px;
//    -o-border-radius: 50px;
// }

// .img {
//    width: 170px;
//    height: 200px;
//    margin-top: 25px;
//    margin-right: 4px;
// }

// .detailes {
//    width: 75%;
//    border: 2px dashed #FF5722;
//    border-radius: 50px;
//    -webkit-border-radius: 50px;
//    -moz-border-radius: 50px;
//    -ms-border-radius: 50px;
//    -o-border-radius: 50px;
//    height: fit-content;
//    padding: 30px 20px;
// }

// .title {
//    font-size: 1.5rem;
//    color: #FF5722;
//    font-weight: bolder;
// }

// .discriptionWrapper {
//    width: 540px;
// }

// .description {
//    margin-top: 40px;
//    font-size: 1.2rem;
//    color: rgb(65, 64, 64);
//    font-weight: 400;
// }

// .arrange1 {
//    margin-top: 30px;
// }

// .wrapper {
//    display: flex;
//    align-items: center;
//    justify-content: space-between;
// }

// .category {
//    display: flex;
//    align-items: center;
//    gap: 10px;
//    font-size: 1.2rem;
//    font-weight: 500;
// }

// .price {
//    margin-top: 10px;
// }

// .return {
//    background-color: #FF5722;
//    display: flex;
//    align-items: center;
//    padding: 10px;
//    line-height: 20px;
//    height: 40px;
//    border-radius: 15px;
//    -webkit-border-radius: 15px;
//    -moz-border-radius: 15px;
//    -ms-border-radius: 15px;
//    -o-border-radius: 15px;
//    color: #fff;
//    padding-bottom: 15px;
// }

// .link {
//    margin-top: 7px;
// }

// .text {
//    position: relative;
//    top: -6px;
//    font-weight: 500;
// }