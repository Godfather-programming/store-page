

const shortenText = (text) => {
    return text.split(" ").slice(0, 3).join(" ")
 } 

 const searchProducts = (products, search) => {
    if (!search) return products
   const searchedProducts = products.filter(p => p.title.toLowerCase().includes(search))
   return searchedProducts
 }

 const filterProducts = (products, category) => {
    if(!category) return products
    const filteredProducts = products.filter(p => p.category === category)
    return filteredProducts
 }

 const finalQuery = (currentQuery, newQuery) => {
    if (newQuery.category === "all") {
        const {category, ...other} = currentQuery
        return other 
    }
    if (newQuery.search === "") {
        const {search, ...other} = currentQuery
        return other
    }
    return {
        ...currentQuery,
        ...newQuery
    }
 }

 const getInitialQuery = (searchParams) => {
        const queryLoad = {}
        const category = searchParams.get("category")
        const search = searchParams.get("search")
        if (category) queryLoad.category = category 
        if (search)  queryLoad.search = search 
        return queryLoad
 }
 
 export {shortenText , searchProducts, filterProducts, finalQuery, getInitialQuery}