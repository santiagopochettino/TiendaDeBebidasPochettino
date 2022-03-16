//imports
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

//ccs
import './css/App.css';

function App() {
  return (
    <div className='App'>
       <NavBar/>
       <ItemListContainer title="Hola soy Santiago Pochettino en el desafio numero 3, saludando a mi tutora Anyel desde una props!"/>
    </div>
  );
}

export default App;

