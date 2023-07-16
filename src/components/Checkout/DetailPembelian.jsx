import React from 'react';
import Gambar from '../../assets/Orang1.png';
import Kanan from '../../assets/Leftarrow.svg';
import { useNavigate } from 'react-router-dom';

function DetailPembelian() {
const navigate = useNavigate();
return (
<>
    <div className="w-[587px] h-[847px] bg-white relative ml-[72px] mt-10 rounded-2xl ">
        <div className="container px-12 py-5">
            <p className="text-neutral-900 text-xl font-bold  leading-7 mb-3">Ringkasan Pesanan</p>
            <div className="flex">
                <div className="w-[127px] h-[115px] bg-sky-950 rounded-lg mr-5">
                    <div className="flex justify-center">
                        <img src={Gambar} alt="gambar" />
                    </div>
                </div>
                <div className="w-80 h-24 relative">
                    <div className="w-80 left-0 top-0 absolute"><span
                            className="text-black text-xl font-extrabold leading-normal">Programming
                            React JS<br /></span><span
                            className="text-black text-base font-extrabold leading-normal">Getting Started with React JS</span></div>
                    <div className="left-[49px] top-[59px] absolute text-black text-xs font-semibold leading-tight">
                        September 2022 </div>
                    <div className="left-[49px] top-[79px] absolute text-black text-xs font-semibold leading-tight">
                        William Hartono, Farel Prayoga</div>
                    <div
                        className="left-0 top-[59px] absolute text-black text-opacity-50 text-xs font-semibold leading-tight">
                        Batch</div>
                    <div
                        className="left-0 top-[79px] absolute text-black text-opacity-50 text-xs font-semibold leading-tight">
                        Mentor</div>
                </div>
            </div>
            <div className="w-96 h-20  rounded-lg relative">
                <div className="w-96 h-20 left-0 top-1 absolute  flex-col justify-start items-start gap-2 inline-flex">
                    <div className="text-neutral-900 text-sm font-extrabold leading-tight">Kode Promo</div>
                    <div
                        className="self-stretch h-14 pl-3 pr-2.5 py-2.5 bg-white rounded-tl rounded-bl border border-gray-400 justify-start items-center gap-2.5 inline-flex">
                        <div className="text-neutral-900 text-sm font-normal leading-tight">Masukkan kode promo</div>
                    </div>
                </div>
                <button
                    className="w-28 h-14 px-4 py-2.5 left-[401px] top-[28px] absolute bg-sky-950 rounded-lg rounded-br border border-gray-400 flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                        <div className="text-white text-sm font-semibold leading-tight">Terapkan</div>
                    </div>
                </button>
            </div>

            <div className="w-72 h-11 top-[30px] relative">
                <div className="left-0 top-0 absolute text-neutral-900 text-sm font-extrabold leading-none">Metode
                    Pembayaran</div>
                <div className="left-0 top-[31px] absolute text-neutral-900 text-sm font-semibold leading-none">Bank
                    Transfer (verifikasi manual)-Mandiri</div>
            </div>
            <div>
                <p className="text-neutral-900 text-sm font-extrabold leading-none  mt-20 mb-3">Ringkasan Pembayaran</p>
                <div className="flex">
                    <p className="text-neutral-900 text-sm font-normal">Harga Kelas</p>
                    <p className="font-bold text-base ml-80 mb-2">Rp. 700.000</p>
                </div>
                <div className="flex">
                    <p className="text-neutral-900 text-sm font-normal">Potongan</p>
                    <p className="font-bold text-base ml-[332px] mb-2">Rp. 200.000</p>
                </div>
                <div className="flex">
                    <p className="text-neutral-900 text-sm font-normal">Promo</p>
                    <p className="font-bold text-base ml-[432px] mb-2">-</p>
                </div>
                <div className="flex border-b-2 mb-4">
                    <p className="text-neutral-900 text-sm font-normal">Kode Unik</p>
                    <p className="font-bold text-base ml-[330px] mb-5 ">Rp. 100.000</p>
                </div>
                <div className="flex font-sans">
                    <p className="text-neutral-900 text-md font-bold">Total Pembayaran</p>
                    <p className=" text-base ml-[260px] font-bold mb-5">Rp. 400.000</p>
                </div>
            </div>

            <div className="font-semibold text-sm">
                <p>
                    Dengan menekan tombol <span className="font-700">Bayar</span> kamu telah menyetujui syarat dan
                    ketentuan yang berlaku, silahkan baca kembali
                    <a className="font-700 text-sky-500 underline" href="#">
                        <span> Syarat & ketentuan </span>
                    </a>
                    yang berlaku.
                </p>
            </div>
            <div>
                <div className="flex mt-12">
                    <img src={Kanan} alt="Kanan" className="mx-4" />
                    <button className="font-bold text-sm self-center">Batalkan</button>
                    <button
                        className=" text-white ml-[235px] bg-sky-950 py-[10px] px-[70px] rounded-full font-600 text-sm"
                        onClick={()=> navigate('/Pembayaran')}>
                        Bayar
                    </button>
                </div>
            </div>

        </div>
    </div>
</>
);
}

export default DetailPembelian;
