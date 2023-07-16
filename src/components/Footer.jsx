import React from "react"

function Footer () {
    return (
        <>
        <div className="flex text-center font-bold text-black text-opacity-50  h-[576px] ml-10 font-sans">
        <div className="my-auto text-left text-font text-base text-abu w-[411px] h-[300px] ml-12">
          <h1 className="font-navbar mb-5">TAGLINE edspert disini</h1>
          <p className="font-600">Jl. Watigede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
        </div>
        <div className="self-center ml-64">
          <button className="flex">
            <div className="text-left font-bold">
              <h3 className="text-base text-black">Program</h3>
              <p className="text-abu my-4">Online Course</p>
              <p className="text-abu">Mini bootcamp</p>
              <p className="text-abu my-4">Bootcamp</p>
            </div>
            <div className="text-left font-bold mx-10">
              <h3 className="text-base text-black">Bidang Ilmu</h3>
              <p className="text-abu my-4">Digital Marketing</p>
              <p className="text-abu">Product management</p>
              <p className="text-abu my-4">English</p>
              <p className="text-abu">Programming</p>
            </div>
            <div className="text-left font-bold">
              <h3 className="text-base text-black">Tentang edspert</h3>
              <p className="text-abu my-4">Bantuan</p>
              <p className="text-abu">Kontak kami</p>
              <p className="text-abu my-4">Media sosial</p>
            </div>
          </button>
          <p className="text-sans text-black text-opacity-50 font-bold text-center mb-5 mt-36">&copy; Edspert, Copyright. Alamat boleh ditaruh disini apabila diinginkan.</p>
        </div>
      </div>
        </>
    )
}

export default Footer