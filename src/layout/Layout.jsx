import { FaHeart } from "react-icons/fa"
import { MdAddShoppingCart } from "react-icons/md"

import styles from "./Layout.module.css"
import { Link } from "react-router-dom"
import { SlEye } from "react-icons/sl"


function Layout({children}) {
  return (
    <>
    <header> 
        <div className={`${styles.header} ${styles.common}`}>
            <h1 className={styles.title}> <Link to="/products"> Godfather shop </Link>  </h1>
            <span className={styles.icon}> <Link to="/checkout"> <MdAddShoppingCart size="2rem" color="#FF5722"/> </Link> <span className={styles.content}> 10 </span> </span>
        </div>
    </header>

   {children}


   <footer> 
    <div className={`${styles.footer} ${styles.common}`}>
        <h2 className={styles.text}> Develope by godfather with <FaHeart color="red"/> </h2>
    </div>
   </footer>

    </>
  )
}

export default Layout