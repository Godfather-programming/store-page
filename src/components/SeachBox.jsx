import { IoSearchSharp } from "react-icons/io5"
import styles from "./SearchBox.module.css"
import { useSearchParams } from "react-router-dom"
import { useState } from "react"
import { shortenText } from "../utils/stringfunction"


function SeachBox({condition, dispatch, setSearchParams}) {
  console.log(condition.data)
  const {data} = condition
  // console.log(data)
  const [text, setText] = useState("")

  // const [searchParams, setSearchParams] = useSearchParams()

  const clickHandler = () => {
    // newData = data
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
 <input className={styles.SearchBox} type="text" placeholder="Search..." value={text} onChange={e => setText(e.target.value)}/>
 <button className={styles.button} onClick={clickHandler}> <IoSearchSharp color="#fff" size="1.5rem"/> </button>
    </div>
  )
}

export default SeachBox