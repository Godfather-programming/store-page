import { FaListUl } from "react-icons/fa"
import styles from "./Sidebar.module.css"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"



function Sidebar({condition, dispatch, setSearchParams}) {

 const {data} = condition
  const clickHandler = (e) => {
    const {tagName} = e.target


    if(tagName !== "LI") return

    console.log(e.target.innerText.toLowerCase())
    const type = e.target.innerText.toLowerCase()
    const newData = data.filter(item => item.category === type)

    if(type === "all") {
      dispatch({type : "SUCCESS", payload : data})
    } else {
      dispatch({ type : "SUCCESS", payload : newData})
    }
    console.log(newData)
  
  if( type === "all" ) {
    setSearchParams({})
  } else {
  setSearchParams({category : `${type}`})
  }
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