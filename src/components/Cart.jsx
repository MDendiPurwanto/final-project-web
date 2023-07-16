import React from "react";
import Navbar2 from "./Navbar2";
import Main from "./Checkout/Main";
import Metode from "./Checkout/Metode";
import DetailPembelian from "./Checkout/DetailPembelian";

function Cart () {
    return(
        <div>
     
        <Navbar2/>
        <Main/>
        <div className="flex">
        <Metode/>
        <DetailPembelian/>
        </div>
        

        </div>
    )
}

export default Cart;