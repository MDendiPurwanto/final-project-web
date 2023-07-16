import Kiri from '../../assets/leftarrow.svg';
import Kanan from '../../assets/Vector 96.svg';

function Main() {
return (
<>

    <div className="flex ml-[72px] mt-10">
        <img src={Kiri} alt="kiri" className="mr-4" />
        <p className="text-sky-500 text-xs font-bold leading-snug">Checkout</p>
        <img src={Kanan} alt="Kanan" className="mx-4" />
        <p className="text-zinc-500 text-xs font-medium leading-snug">Instruksi Bayar</p>
    </div>
    <div className="text-neutral-900 flex ml-[72px] mt-10 text-3xl font-bold leading-loose">Checkout</div>

    
</>
);
}

export default Main;
