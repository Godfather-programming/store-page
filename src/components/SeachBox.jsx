import { IoSearchSharp } from "react-icons/io5"
import styles from "./SearchBox.module.css"
import { finalQuery } from "../utils/stringfunction"


function SeachBox({search, setSearch, setQuery}) {
  
  const searchHandler = () => {
 
  setQuery((query) => finalQuery(query, { search }));

  }

  return (
   <div className={styles.container}>
 <input className={styles.SearchBox} type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())}/>
 <button className={styles.button} onClick={searchHandler}> <IoSearchSharp color="#fff" size="1.5rem"/> </button>
    </div>
  )
}

export default SeachBox