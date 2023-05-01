import { createContext, useState, useReducer, useEffect, useContext } from "react";
import { productReducer } from "./Reducers";
import { AuthContext } from "./AuthContext";

const ProductContext = createContext();

function ProductProvider({children}){
    const {user, token} = useContext(AuthContext)
     const [products, setProducts] = useState()

     const [productState, productDispatch] = useReducer(productReducer, {
        delivery_cost: "",
        searchQuery: "",
      });
    
// console.log(products)
    // useEffect(() => {
    //     // fetch(`/products?search=${query}`)
    //     fetch('/products',{
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${token}`
    //       },
    //     })
    //     .then(r => r.json())
    //     .then((data) => setProducts(data))
    //   }, [user])
    


    return (
    <ProductContext.Provider value={{products, productState, productDispatch}}>
            {children}
        </ProductContext.Provider>
    )

};


export  { ProductContext, ProductProvider}