import React from "react";
import { useNavigate } from "react-router-dom";

const Pengingat = () => {
   const  navigate = useNavigate();
return(
<>
    <div className="w-screen h-96 relative bg-slate-700">
        <p className="text-white text-3xl text-center relative top-[120px] font-semibold leading-10">Sudah Transfer?
            Lakukan verifikasi pembayaran segera!</p>
        <div className="w-64 h-14 px-6 py-2.5  bg-amber-400 relative top-[150px] left-[550px]  rounded-3xl flex-col justify-center items-center gap-2.5 inline-flex">
            <button className="justify-start items-center gap-2 inline-flex" onClick={()=> navigate('/')}>
                <p className="text-black text-sm font-bold leading-tight">Verifikasi Pembayaran</p>
            </button>
        </div>
    </div>
</>
)
}

export default Pengingat;
