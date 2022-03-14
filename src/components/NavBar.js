import React from 'react';
import Button from '@mui/material/Button';
import CartWidget from './CartWidget';


//css
import '../css/NavBar/NavBar.css'

function NavBar  ()  {
    return( 
    <div>
        <header className='main-header'>
           <nav>
           <div className='container-logo'>
             <CartWidget />
             <h1>Tienda de bebidas Sofía</h1>
            </div>
         
            <ul className="navbar">
                <li><Button variant="contained" aria-label="outlined primary button group">Inicio</Button></li>
                <li><Button variant="contained" aria-label="outlined primary button group">Tienda</Button></li>
                <li><Button variant="contained" aria-label="outlined primary button group">Nosotros</Button></li>
                <li><Button variant="contained" aria-label="outlined primary button group">Contacto</Button></li>
            </ul>
           </nav>
        </header>

    </div>
)};

export default NavBar;