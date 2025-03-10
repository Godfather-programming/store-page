import { FaHeart } from "react-icons/fa"
import { MdAddShoppingCart } from "react-icons/md"

import styles from "./Layout.module.css"


function Layout({children}) {
  return (
    <>
    <header> 
        <div className={`${styles.header} ${styles.common}`}>
            <h1 className={styles.title}> Godfather shop </h1>
            <span className={styles.icon}> <MdAddShoppingCart size="2rem" color="#FF5722"/> </span>
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