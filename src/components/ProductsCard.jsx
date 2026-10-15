import { useEffect, useState } from "react";
import styles from "./ProductCard.module.css";
import { useSearchParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
  shortenText,
} from "../utils/stringfunction";
import Sidebar from "./Sidebar";
import Card from "./Card";
import SeachBox from "./SeachBox";
// import { useProducts } from "../context/ProductsProvider"
import { useDispatch, useSelector } from "react-redux";
import { selectorCart } from "../features/cart/cartSlice";
import {
  fectchProducts,
  selectorProduct,
} from "../features/product/productSlice";

function ProductsCard() {
  const { products, loading } = useSelector(selectorProduct);
  //  const store = useSelector(selectorProduct)
  //  console.log(products)
  const dispatch = useDispatch();

  // const products = useProducts()
  //  const products = [];

  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fectchProducts());
  }, []);

  useEffect(() => {
    setDisplayed(products);

    setQuery(getInitialQuery(searchParams || ""));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  const [show, setShow] = useState(false);

  return (
    <>
<>
  <div className={styles.searchWrapper}>
    <SeachBox
      search={search}
      setSearch={setSearch}
      setSearchParams={setSearchParams}
      query={query}
      setQuery={setQuery}
    />
  </div>

  <div className={styles.container}>
    {loading && (
      <div className={styles.loading}>
        <BallTriangle />
      </div>
    )}

    <Sidebar
      setSearchParams={setSearchParams}
      query={query}
      setQuery={setQuery}
    />

    <div className={styles.cards}>
      {displayed.map((product) => (
        <Card
          key={product.id}
          show={show}
          setShow={setShow}
          product={product}
        />
      ))}
    </div>

    {!!displayed.error && (
      <div>{condition.error}</div>
    )}
  </div>
</>

      {/* <SeachBox search={search} setSearch={setSearch} setSearchParams={setSearchParams} query={query} setQuery={setQuery}/>
    <div className={styles.container}>
     {loading && <div className={styles.loading}> <BallTriangle /> </div>}


     <div className={styles.cards}>{
displayed.map(product => <Card key={product.id} show={show} setShow={setShow} product={product}/>) 
        }</div>


    {!!displayed.error && <div> {condition.error} </div>}    

    <Sidebar setSearchParams={setSearchParams}  query={query} setQuery={setQuery}/>
 </div> */}
    </>
  );
}

export default ProductsCard;
