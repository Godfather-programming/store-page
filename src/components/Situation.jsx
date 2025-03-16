import { TbChecklist } from "react-icons/tb"
import styles from "./Situation.module.css"
import { Link } from "react-router-dom"
import { FaHashtag } from "react-icons/fa"
import { LuBadgeCheck } from "react-icons/lu"
import { useEffect, useState } from "react"
import { api } from "../services/config"

function Situation() {

  return (
    <div className={styles.container}>
           <div className={styles.info}> 
               <div className={styles.item}> 
                   <span> <TbChecklist size="1.5rem" color="#FF5722"/> </span>
                   <span className={styles.key}> Total: </span>
                   <span className={styles.value}> 710.39 $ </span>
                </div>

                <div className={styles.item}>
                   <span> <FaHashtag size="1.5rem" color="#FF5722"/> </span>
                   <span className={styles.key}> Quantity: </span>
                   <span className={styles.value}> 11 </span>
                </div>

                <div className={styles.item}> 
                   <span> <LuBadgeCheck size="1.5rem" color="#FF5722"/> </span>
                   <span className={styles.key}> Status: </span>
                   <span className={styles.value}> pending... </span> 
                </div>
           </div>

           <span className={styles.Checkout}> <Link> Checkout </Link> </span>
    </div>
  )
}

export default Situation