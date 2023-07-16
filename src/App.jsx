import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Catalog from './pages/Catalog';
import Detail from './pages/Detail';
import Checkout from './pages/Checkout';
import Pembayaran from './pages/Pembayaran';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Catalog/>}/>
        <Route path='/Detail' element={<Detail/>}/>
        <Route path='/Checkout' element={<Checkout/>}/>
        <Route path='/Pembayaran' element={<Pembayaran/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
