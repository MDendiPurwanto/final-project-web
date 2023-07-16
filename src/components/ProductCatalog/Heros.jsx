import React from "react"
import Image from '../../assets/Image2.png'
function Heros (){
    return(
        <>
        <div className="container mx-auto ml-15 mr-64">
            <h1 className="w-auto left-[100px] top-[150px] relative text-white text-4xl font-semibold leading-10">Jadi expert bersama edspert.id</h1>
            <p className="mt-2 w-auto text-neutral-50  left-[100px] top-[150px] text-base relative font-normal ">Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda.</p>
            <div className="absolute">
              <img src={Image} alt="Gambar" className="w-[900] relative left-full  h-[450px]" />
            </div>
        </div>
        </>
    )
}

export default Heros