
import { createContext } from "react";
import styles from "./Card.module.css"
import ProductDetails from "../pages/ProductDetails";
import { productQuantity, shortenText } from "../utils/stringfunction";
import { Link } from "react-router-dom";
import { TbListDetails, TbShoppingBagCheck } from "react-icons/tb";
import { useCart } from "../context/CartProvider";
import { MdDeleteOutline } from "react-icons/md";

export const ProductContext = createContext();
function Card({product, show, setShow}) {
    const { id, image, price, title} = product
   
  const [state , dispatch] = useCart()
  const quantity = productQuantity(state, id)

  const clickHandler = () => {
     setShow(true)
   }

const actionHandler = (type) => {
   dispatch({type, payload: product})
}

   
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
         quantity === 1 && ( <button onClick={() => actionHandler("REMOVE_ITEM")}> <MdDeleteOutline /> </button> )
    }
    {
         quantity > 1 && ( <button onClick={() => actionHandler("DECREASE")}> - </button> )
    }
    { !!quantity && <span> {quantity} </span> }
      {
         quantity === 0 ? (  <button onClick={() => actionHandler("ADD_ITEM")}> <TbShoppingBagCheck /> </button> ) : (  <button onClick={() => actionHandler("INCREASE")}> + </button> )
      }
    </div>

    </div>
    </div>

    )
   }
   
   export default Card