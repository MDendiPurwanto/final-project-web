import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import BankMandiri from '../../assets/mandiri.png'
import BankBCA from '../../assets/bcamobile.png'

function Metode() {
const [isOpen, setIsOpen] = useState(false);
function handleToggle() {
setIsOpen(!isOpen);
}

return (
<>
    <div className="w-[587px] h-[847px] bg-white drop-shadow-md relative ml-[72px] mt-10 rounded-2xl ">
        <div className="container px-12 py-5">
            <div>
                <h1 className="text-neutral-900   mb-4 text-xl font-bold leading-7">Pilih Metode Pembayaran</h1>
                <button className=" text-left" onClick={handleToggle}>
                    <h4 className="font-bold text-sm mb-2">Bank Transfer (verifikasi manual)</h4>
                    <div className=" border-b-2 flex">
                        <p className="font-bold text-subdued text-xs mb-3">Pembayaran melalui Bank transfer Mandiri atau
                            BCA. Metode bayar ini memerlukan verifikasi pembayaran manual melalui whatsapp.</p>
                        <p> {isOpen ?
                            <IoIosArrowUp /> :
                            <IoIosArrowDown />}
                        </p>
                    </div>
                </button>
                {isOpen && (
                <button>
                    <div className="w-80 h-5 relative">
                        <h2 className="left-[87px] top-[1px] absolute text-neutral-900 text-sm font-semibold leading-tight">
                            Bank Transfer ke Rek Bank Mandiri</h2>
                        <img className="w-16 h-5 left-0 top-0 absolute" src={BankMandiri} />
                    </div>
                    <div className="w-80 h-5 top-[20px] relative">
                        <h2 className="left-[87px] top-[1px] absolute text-neutral-900 text-sm font-semibold leading-tight">
                            Bank Transfer ke Rek Bank BCA</h2>
                        <img className="w-16 h-5 left-0 top-0 absolute" src={BankBCA} />
                    </div>
                </button>
                )}

                <div>
                    <button className="text-left mt-10" onClick={handleToggle}>
                        <h4 className="font-bold text-sm mb-2">Virtual Account (verifikasi otomatis)</h4>
                        <div className=" border-b-2 flex">
                            <p className="font-bold text-subdued text-xs mb-3">Pembayaran melalui virtual account
                                berbagai bank. Metode bayar ini akan diverifikasi secara otomatis.</p>
                            <p> {isOpen ?
                                <IoIosArrowUp /> :
                                <IoIosArrowDown />}
                            </p>
                        </div>
                    </button>
                    {isOpen && (
                    <div className="w-96 h-14 rounded shadow border border-neutral-300">
                        <div className="w-80 h-5 relative">
                            <h2 className="left-[87px] top-[1px] absolute text-neutral-900 text-sm font-semibold leading-tight">
                                Virtual Account Mandiri</h2>
                            <img className="w-16 h-5 left-0 top-0 absolute" src={BankMandiri} />
                        </div>
                        <div className="w-80 h-5 top-[20px] relative">
                            <h2 className="left-[87px] top-[1px] absolute text-neutral-900 text-sm font-semibold leading-tight">
                                Virtual Account BCA</h2>
                            <img className="w-16 h-5 left-0 top-0 absolute" src={BankBCA} />
                        </div>
                    </div>

                    )}
                </div>

            </div>
        </div>
    </div>
</>
);
}

export default Metode;
