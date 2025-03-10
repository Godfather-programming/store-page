import { FaListUl } from "react-icons/fa"
import styles from "./Sidebar.module.css"


function Sidebar({condition, dispatch}) {
  console.log(condition)
  let data = condition.data
  console.log(data)

  const clickHandler = (e) => {
    console.log(e.target.innerText.toLowerCase())
    const type = e.target.innerText.toLowerCase()
    const newData = data.filter(item => {
      if (type === "all") {
        dispatch({type : "SUCCESS", payload : data})
      } else if (type === item.category) {
        
     
      }
    })
    dispatch({type : "SUCCESS", payload : newData})
  }

  return (
    <div className={styles.container}>
        <div className={styles.category}> 
        <FaListUl />
        <span> Categories </span>
        </div>
        <ul className={styles.list} onClick={clickHandler}>
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