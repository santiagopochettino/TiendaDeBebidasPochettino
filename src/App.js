import NavBar from './components/NavBar';
import Footer from './components/Footer';
//react router dom 
import { BrowserRouter, Routes , Route } from 'react-router-dom';
//pages
import Detail from './pages/Detail';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Nosotros from './pages/Nosotros';
import Tienda from './pages/Tienda';
import Carrito from './pages/Carrito';
//ccs
import './css/App.css';
//context
import {CartContextProvider} from './context/CartContext';
import Vodkas from './pages/Vodkas';



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
            <Route path='/nosotros' element={<Nosotros/>}/>
            <Route path='/category/vodkas' element={<Vodkas/>}/>
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
