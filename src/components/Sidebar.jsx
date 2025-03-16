import { FaListUl } from "react-icons/fa"
import styles from "./Sidebar.module.css"
import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import { finalQuery } from "../utils/stringfunction"
import { categories } from "../constant/list"



function Sidebar({condition, dispatch, setSearchParams, query, setQuery}) {

//  const {data} = condition
  const categoryHandler = (e) => {
    const {tagName} = e.target

    if(tagName !== "LI") return
    
    console.log(e.target.innerText.toLowerCase())
    const category = e.target.innerText.toLowerCase()

    setQuery(query => finalQuery(query, { category }))


    // const newData = data.filter(item => item.category === category)
    

    // if(category === "all") {
    //   dispatch({category : "SUCCESS", payload : data})
    // } else {
    //   dispatch({ category : "SUCCESS", payload : newData})
    // }
    // console.log(newData)
  
  // if( category === "all" ) {
  //   setSearchParams({})
  // } else {
  // setSearchParams({category : `${category}`})
  // }
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










{/* <li className={style === "All" ? styles.selected : null}> All </li>
<li className={style === "Electronics" ? styles.selected : null}> Electronics </li>
<li className={style === "Jewelery" ? styles.selected : null}> Jewelery </li>
<li className={style === "Men's Clothing" ? styles.selected : null}> Men's Clothing </li>
<li className={style === "Women's Clothing" ? styles.selected : null}> Women's Clothing </li>     */}