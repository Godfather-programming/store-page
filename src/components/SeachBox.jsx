import { IoSearchSharp } from "react-icons/io5"
import styles from "./SearchBox.module.css"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import { finalQuery, shortenText } from "../utils/stringfunction"
import { useProducts } from "../context/ProductsProvider"


function SeachBox({search, setSearch, setSearchParams, query, setQuery}) {
  // console.log(data)
 

  // const [searchParams, setSearchParams] = useSearchParams()

  const searchHandler = () => {
 
  setQuery((query) => finalQuery(query, { search }));

    // let newData = data.filter(item => shortenText(item.title).toLowerCase().includes(search))
    // if(!search) {
    //   dispatch({type : "SUCCESS", payload : data})
    // } else {
    //   dispatch({type : "SUCCESS", payload : newData})
    // }

    // if(!search) {
    //   setSearchParams({})
    // } 
    // else {
    // setSearchParams({search : `${search}`})
    // }

  }

  console.log(search)
  return (
   <div className={styles.container}>
 <input className={styles.SearchBox} type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value.toLowerCase().trim())}/>
 <button className={styles.button} onClick={searchHandler}> <IoSearchSharp color="#fff" size="1.5rem"/> </button>
    </div>
  )
}

export default SeachBox