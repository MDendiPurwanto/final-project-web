import React from "react"
import Main from "./ProductDetail/Main"
import Materi from "./ProductDetail/Materi"
import Checkout from "./ProductDetail/Checkout"
import Fasility from "./ProductDetail/Fasility"
import Ajakan from "./ProductDetail/Ajakan"
import Footer from "./Footer"



function DetailProduct () {
return (
<>
    <Main />
    <div className="bg-white w-full h-full flex">
        <Checkout />
        <div className="container">
            <Materi />
            <Fasility />
        </div>
    </div>
    <Ajakan />
    <Footer />
</>
)
}
export default DetailProduct;
