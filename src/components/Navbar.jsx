
import Heros from "./ProductCatalog/Heros";

function Navbar () {

    const program = [
        {
          judul: 'Program',
          id: 1,
        },
        {
            judul: 'Bootcamp',
          id: 2,
        },
        {
            judul: 'Mini bootcamp',
          id: 3,
        },
        {
            judul: 'Online course',
          id: 4,
        },
      ];
      const BidangIlmu = [
        {
            judul: 'Bidang ilmu',
          id: 1,
        },
        {
            judul: 'Digital Marketing',
          id: 2,
        },
        {
            judul: 'Product Management',
          id: 3,
        },
        {
            judul: 'Data Analysis',
          id: 4,
        },
        {
            judul: 'Front End Development',
          id: 5,
        },
        {
            judul: 'Back End Development',
          id: 6,
        },
      ];
      const Data = (e) => {
        const selectedValue = e.target.value;
      };
    return (
        <>
         <div className="w-screen h-screen opacity-90 bg-sky-950">
            <nav className="lg:flex items-center justify-between p-4 bg-sky-950 font-sans" >
                <div className="flex items-center">
                    <h1 className="text-white font-bold text-3xl uppercase ml-24 font-sans">LOGO</h1>
                </div>

                <div className="lg:flex space-x-4 text-md mx-36">
                <div className="self-end">
                <a href="#" className="text-white hover:text-gray-200  font-sans">
                    <select className="bg-sky-950 rounded p-2 text-white" onChange={Data}>
                        {program.map((item) => (
                        <option key={item.id}>{item.judul}</option>
                        ))}
                    </select>
                </a>

                <a href="#" className="text-white hover:text-gray-200  font-sans mx-5">
                    <select className="bg-sky-950 rounded p-2 text-white" onChange={Data}>
                        {BidangIlmu.map((item) => (
                        <option key={item.id}>{item.judul}</option>
                        ))}
                    </select>
                </a>

                <a href="https://edspert.id/pages/all-class-filter/program/4e413d3d" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 my-auto font-navbar mr-5">
                    Tentang edspert.id
                 </a>
                </div>
                <div className="w-36 h-12 px-6 py-2.5 bg-red-400 rounded-3xl flex-col justify-center items-center gap-2.5 inline-flex">
                    <div className="justify-start items-center gap-2 inline-flex">
                        <a href="" className="text-white text-sm font-semibold leading-tight">Masuk/Daftar</a>
                    </div>
                </div>
                </div>
            </nav>
             <Heros/>
                          
            </div>
        </>
    )
}

export default Navbar