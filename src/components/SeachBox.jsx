import { IoSearchSharp } from "react-icons/io5"
import styles from "./SearchBox.module.css"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import { shortenText } from "../utils/stringfunction"
import { useProducts } from "../context/ProductsProvider"


function SeachBox({condition, dispatch, setSearchParams}) {
  console.log(condition.data)
  const {data} = condition
  // console.log(data)
  const [text, setText] = useState("")

  // const [searchParams, setSearchParams] = useSearchParams()

  const searchHandler = () => {

    let newData = data.filter(item => shortenText(item.title).toLowerCase().includes(text))
    if(!text) {
      dispatch({type : "SUCCESS", payload : data})
    } else {
      dispatch({type : "SUCCESS", payload : newData})
    }

    if(!text) {
      setSearchParams({})
    } else {
    setSearchParams({search : `${text}`})
    }

  }

  console.log(text)
  return (
   <div className={styles.container}>
 <input className={styles.SearchBox} type="text" placeholder="Search..." value={text} onChange={e => setText(e.target.value.toLowerCase().trim())}/>
 <button className={styles.button} onClick={searchHandler}> <IoSearchSharp color="#fff" size="1.5rem"/> </button>
    </div>
  )
}

export default SeachBox