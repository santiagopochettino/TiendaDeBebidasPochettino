import NavBar from './components/NavBar';
import Footer from './components/Footer';
//react router dom 
import { BrowserRouter, Routes , Route } from 'react-router-dom';
//pages
import Detail from './pages/Detail';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Tienda from './pages/Tienda';
import Carrito from './pages/Carrito';
//ccs
import './css/App.css';
//context
import {CartContextProvider} from './context/CartContext';
//bebidas
import Aperitivos from './pages/Aperitivos';
import Beers from './pages/Beers';
import Fernets from './pages/Fernets';
import Gins from './pages/Gins';
import Licores from './pages/Licores';
import Rons from './pages/Rons';
import Sinalcohol from './pages/Sinalcohol';
import Vinos from './pages/Vinos';
import Vodkas from './pages/Vodkas';
import Whiskys from './pages/Whiskys';



function App() {
  
  
  return (
    <div className='App'>
    <CartContextProvider> 
      <BrowserRouter>
         <NavBar/>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/tienda' element={<Tienda/>}/>
            <Route path='/detalle/:id' element={<Detail/>}/>
            <Route path='/category/aperitivos' element={<Aperitivos/>}/>
            <Route path='/category/beers' element={<Beers/>}/>
            <Route path='/category/fernets' element={<Fernets/>}/>
            <Route path='/category/gins' element={<Gins/>}/>
            <Route path='/category/licores' element={<Licores/>}/>
            <Route path='/category/rons' element={<Rons/>}/>
            <Route path='/category/sinalcohol' element={<Sinalcohol/>}/>
            <Route path='/category/vinos' element={<Vinos/>}/>
            <Route path='/category/vodkas' element={<Vodkas/>}/>
            <Route path='/category/whiskys' element={<Whiskys/>}/>
            <Route path='/cart' element={<Carrito/>}/>
            <Route path='*' element={<NotFoundPage/>} />
         </Routes>
         <Footer/>
      </BrowserRouter>
     </CartContextProvider> 
       
       
    </div>
  );
}

export default App;
