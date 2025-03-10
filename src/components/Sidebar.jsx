import { FaListUl } from "react-icons/fa"
import styles from "./Sidebar.module.css"


function Sidebar() {
  return (
    <div className={styles.container}>
        <div className={styles.category}> 
        <FaListUl />
        <span> Categories </span>
        </div>
        <ul className={styles.list}>
         <li> All </li>
         <li> Electronics </li>
         <li> jewelery </li>
         <li> Men's Clothing </li>
         <li> Women's Clothing </li>    
        </ul>
    </div>
  )
}

export default Sidebar