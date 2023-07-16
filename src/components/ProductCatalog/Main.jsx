import React from "react"
import ProductList from "./ProductList";

function Main() {
    return(
        <>
        <div className="bg-main">
            <div className="flex flex-wrap">
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                    <ProductList/>
                </div>  
        </div>
        </>
       
    )
}

export default Main;