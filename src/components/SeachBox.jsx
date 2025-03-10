import { IoSearchSharp } from "react-icons/io5"
import styles from "./SearchBox.module.css"


function SeachBox() {
  return (
    <div className={styles.container}>
 <input className={styles.SearchBox} type="text" placeholder="Search..."/>
 <button className={styles.button}> <IoSearchSharp color="#fff" size="1.5rem"/> </button>
    </div>
  )
}

export default SeachBox