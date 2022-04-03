//imports
import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer'
// import ItemDetailContainer from './components/ItemDetailContainer';

//react router dom 
import { BrowserRouter, Routes , Route } from 'react-router-dom';
//pages
import Contacto from './pages/Contacto';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Nosotros from './pages/Nosotros';
import Tienda from './pages/Tienda';


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
           <Route path='/nosotros' element={<Nosotros/>}/>
           <Route path='/contacto' element={<Contacto/>}/>
           <Route path='/*' element={<NotFoundPage/>} />
         </Routes>
      </BrowserRouter>
       {/*
       <ItemDetailContainer id={1} />
      */}
       
    </div>
  );
}

export default App;
