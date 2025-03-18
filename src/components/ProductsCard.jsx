import { useEffect, useState } from "react"
import styles from "./ProductCard.module.css"
import { useSearchParams } from "react-router-dom"
import { BallTriangle } from "react-loader-spinner"
import { filterProducts, getInitialQuery, searchProducts, shortenText } from "../utils/stringfunction"
import Sidebar from "./Sidebar"
import Card from "./Card"
import SeachBox from "./SeachBox"
import { useProducts } from "../context/ProductsProvider"


function ProductsCard() {
   const products = useProducts()

 const [displayed, setDisplayed] = useState([])
 const [query, setQuery] = useState({})
 const [search, setSearch] = useState("")

 const [searchParams, setSearchParams] = useSearchParams()
 
 useEffect(() => {
    setDisplayed(products)

   setQuery(getInitialQuery(searchParams || ""))
  },[products])

 useEffect(() => {
    setSearchParams(query)
    setSearch(query.search || "")
    let finalProducts = searchProducts(products, query.search)
    finalProducts = filterProducts(finalProducts, query.category)
    setDisplayed(finalProducts)
 }, [query])

const [show, setShow] = useState(false)

 

  return (
    <> 


    <SeachBox search={search} setSearch={setSearch} setSearchParams={setSearchParams} query={query} setQuery={setQuery}/>
    <div className={styles.container}>
     {!displayed.length && <div className={styles.loading}> <BallTriangle /> </div>}


     <div className={styles.cards}>{
displayed.map(product => <Card key={product.id} show={show} setShow={setShow} product={product}/>) 
        }</div>


    {!!displayed.error && <div> {condition.error} </div>}    

    <Sidebar setSearchParams={setSearchParams}  query={query} setQuery={setQuery}/>
 </div>
 </>
  )
}

export default ProductsCard