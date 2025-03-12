import { useContext, useEffect, useState } from "react"
import styles from "./ProductDetail.module.css"

import { ProductContext } from "./Card" 
import { Link, NavLink } from "react-router-dom"

function ProductDetails() {
  
 const res = useContext(ProductContext)
 console.log(res)
  return (
    <div>
        <div>
            <img />
        </div>
        <div>
            <h3> hi </h3>
            <p>  </p>
            <p>    </p>
            <div>
                <div>
                 
                </div>
                <Link to="./products"> </Link>
            </div>
        </div>
    </div>
  )
}

export default ProductDetails