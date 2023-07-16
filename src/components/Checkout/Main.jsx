import { useNavigate } from 'react-router-dom';
import Kiri from '../../assets/Leftarrow.svg';
import Kanan from '../../assets/Vector 96.svg';

function Main() {
 const   navigate = useNavigate();
return (
<>

    <div className="flex ml-[72px] mt-10">
        <img src={Kiri} alt="kiri" className="mr-4" onClick={()=> navigate('/Detail')} />
        <button className="text-sky-500 text-xs font-bold leading-snug" onClick={()=> navigate('/Detail')}>Checkout</button>
        <img src={Kanan} alt="Kanan" className="mx-4" />
        <p className="text-zinc-500 text-xs font-medium leading-snug">Instruksi Bayar</p>
    </div>
    <div className="text-neutral-900 flex ml-[72px] mt-10 text-3xl font-bold leading-loose">Checkout</div>

    
</>
);
}

export default Main;
