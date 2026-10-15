
import { createContext } from "react";
import styles from "./Card.module.css"
import ProductDetails from "../pages/ProductDetails";
import { productQuantity, shortenText } from "../utils/stringfunction";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { MdDeleteOutline } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import store from "../app/store";
import { addItem, decrease, increase, removeItem, selectorCart } from "../features/cart/cartSlice";

export const ProductContext = createContext();
function Card({product, show, setShow}) {
    const { id, image, price, title} = product

//   const [state , dispatch] = useCart()

   const stateCart = useSelector(selectorCart)
  //  console.log(state)
   const dispatchs = useDispatch()
  const quantity = productQuantity(stateCart, id)
  
  const clickHandler = () => {
     setShow(true)
   }

// const actionHandler = (type) => {
//    dispatch({type, payload: product})
// }

// console.log(cart)
   
// onClick={() => actionHandler("REMOVE_ITEM")}
   return (
       <div key={id} className={styles.card}>
     {show && <ProductContext.Provider value={product}> <ProductDetails /> </ProductContext.Provider> }
    <img className={styles.image} src={image} alt={title} />
    <p className={styles.title}> {shortenText(title)} </p>
    <p className={styles.price}>  {price} $ </p>
    <div className={styles.action}> 
<span className={styles.list} onClick={clickHandler}> <Link to={`/products/${id}`}> <TbListDetails size="1.5rem" color="#FF5722"/> </Link>  </span> 
    <div>

    {
         quantity === 1 && ( <button onClick={() => dispatchs(removeItem(product))}> <MdDeleteOutline /> </button> )
    }
    {
         quantity > 1 && ( <button onClick={() => dispatchs(decrease(product))}> - </button> )
    }
    { !!quantity && <span> {quantity} </span> }
      {
         quantity === 0 ? (  <button onClick={() => dispatchs(addItem(product))}> <TbShoppingBagCheck /> </button> ) : (  <button onClick={() => dispatchs(increase(product))}> + </button> )
      }
    </div>

    </div>
    </div>

    )
   }
   
   export default Card