import { FaListUl } from "react-icons/fa"
import styles from "./Sidebar.module.css"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"



function Sidebar({setSearchParams}) {

  // const [searchParams, setSearchParams] = useSearchParams()

//  const {data} = condition
  const clickHandler = (e) => {
    

  //   console.log(e.target.innerText.toLowerCase())
  //   const type = e.target.innerText.toLowerCase()
  //   let newData = data.filter(item => item.category === type)
  //   newData = data
  //   if(type === "all") {
  //     dispatch({type : "SUCCESS", payload : data})
  //   } else {
  //     dispatch({ type : "SUCCESS", payload : data})
  //   }
  //   console.log(newData)

  //   console.log(newData)
  console.log(e.target.innerText.toLowerCase())
  const type = e.target.innerText.toLowerCase()
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