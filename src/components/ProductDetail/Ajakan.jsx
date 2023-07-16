import React from "react";
import { useNavigate } from "react-router-dom";

function Ajakan (){
   const navigate = useNavigate();
return(
<>
    <div className="w-screen h-96 relative bg-slate-700">
        <p className="text-white text-5xl text-center relative top-[100px] font-semibold leading-10">Sudah siap
            bergabung?</p>
        <div
            className="w-64 h-14 px-6 py-2.5  bg-amber-400 relative top-[150px] left-[550px]  rounded-3xl flex-col justify-center items-center gap-2.5 inline-flex">
            <button className="justify-start items-center gap-2 inline-flex" onClick={()=> navigate('/Checkout')}>
                <p className="text-black text-sm font-bold leading-tight">Daftar kelas</p>
            </button>
        </div>
    </div>
</>
)
}

export default Ajakan
