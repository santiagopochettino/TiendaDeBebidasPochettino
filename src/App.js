//imports
import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer'
// import ItemDetailContainer from './components/ItemDetailContainer';

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

function App() {
  return (
    <div className='App'>
      
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
      
       
    </div>
  );
}

export default App;
