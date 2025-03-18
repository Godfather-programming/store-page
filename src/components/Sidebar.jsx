import { FaListUl } from "react-icons/fa"
import styles from "./Sidebar.module.css"
import { finalQuery } from "../utils/stringfunction"
import { categories } from "../constant/list"



function Sidebar({ query, setQuery}) {

  const categoryHandler = (e) => {
    const {tagName} = e.target

    if(tagName !== "LI") return
    
    console.log(e.target.innerText.toLowerCase())
    const category = e.target.innerText.toLowerCase()

    setQuery(query => finalQuery(query, { category }))

  }


  return (
    <div className={styles.container}>
        <div className={styles.category}> 
        <FaListUl />
        <span> Categories </span>
        </div>
        <ul className={styles.list} onClick={categoryHandler}>
          {categories.map(category => <li key={category.id} className={category.type.toLowerCase() === query.category ? styles.selected : null}> {category.type} </li>)}   
        </ul>
    </div>
  )
}

export default Sidebar