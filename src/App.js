//imports
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';


// import { BrowserRouter, Routes , Route } from 'react-router-dom';
// import HomePage from './pages/HomePage';

//ccs
import './css/App.css';

function App() {
  return (
    <div className='App'>
      
      {/* <BrowserRouter>
         <NavBar/>
         <Routes>
           <Route path='/' element={<HomePage/>} />
           <Route path='/*' element={'Error 404'} />
         </Routes>
      </BrowserRouter> */}
       <NavBar/>
       <ItemListContainer/>
       <ItemDetailContainer id={1} />
     
       
    </div>
  );
}

export default App;
