import Kiri from '../../assets/Leftarrow.svg';
import Kanan from '../../assets/Vector 96.svg';
import CaraPembayaran from './CaraPembayaran';
import MetodePembayaran from './MetodePembayaran';
import Pengingat from './Pengingat';

function Main() {
return (
<div>

    <div className="flex ml-[72px] mt-10">
        <img src={Kiri} alt="kiri" className="mr-4" />
        <p className="text-sky-500 text-xs font-bold leading-snug">Checkout</p>
        <img src={Kanan} alt="Kanan" className="mx-4" />
        <p className="text-zinc-500 text-xs font-medium leading-snug">Instruksi Bayar</p>
    </div>
    <div className="text-neutral-900 flex ml-[72px] mt-10 text-3xl font-bold leading-loose">Intruksi Pembayaran</div>
    
    <div className="w-[1269px] h-[635px] bg-white mx-auto mt-10 rounded-2xl flex">
    <MetodePembayaran/>
    <CaraPembayaran/>
    </div>
    <div className="mb-20">
       <Pengingat/>
    </div>
</div>
);
}

export default Main;
