import React from 'react'
import styles from "./Page404.module.css"
import { Link } from 'react-router-dom'

function Page404() {
  return (
    <div className={styles.container}>
      <span className={styles.error}> 404 error  </span>
      <span className={styles.text}> page not found </span>
      <span className={styles.main}> <Link to="/"> back to main page </Link> </span>
    </div>
  )
}

export default Page404