//components
// import  { useContext} from 'react';
import NavBar from './components/NavBar';
//react router dom 
import { BrowserRouter, Routes , Route } from 'react-router-dom';
//pages
import Contacto from './pages/Contacto';
import Detail from './pages/Detail';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Nosotros from './pages/Nosotros';
import Tienda from './pages/Tienda';
import Carrito from './pages/Carrito';
//ccs
import './css/App.css';
//context
import { CartProvider} from './context/CartContext';
// import {CartContext } from './context/CartContext';


function App() {
  // const {cartProducts} = useContext( CartContext);
  
  return (
    <div className='App'>
    <CartProvider> 
      <BrowserRouter>
         <NavBar/>
         <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/tienda' element={<Tienda/>}/>
            <Route path='/detalle/:id' element={<Detail/>}/>
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/contacto' element={<Contacto/>}/>
            <Route path='/cart' element={<Carrito/>}/>
            <Route path='*' element={<NotFoundPage/>} />
         </Routes>
         <footer className='footer'>Copyright © 2022 - Spoche</footer>
      </BrowserRouter>
     </CartProvider> 
       
       
    </div>
  );
}

export default App;
