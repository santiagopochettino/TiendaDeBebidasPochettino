import React from 'react';
import Button from '@mui/material/Button';
import Logo from './Logo';
import CartWidget from '../components/CartWidget'
import { Link } from 'react-router-dom'


//css
import '../css/NavBar.css'

function NavBar  ()  {
    const pages = [
    {
        title:'Inicio',
        url:'/'
    },
    {
        title:'Tienda',
        url:'/tienda'
    },
    {
        title:'Nosotros',
        url:'/nosotros'
    },
    {
        title:'Contacto',
        url:'/contacto'
    }
    ]
    return( 
    <div>
        <header className='main-header'>
           <nav>
           <div className='container-logo'>
             <Logo />

             <h1>Tienda de bebidas Sofía</h1>
            </div>
         
            <ul className="navbar">
                     {/* <li>
                        <Button variant="contained" aria-label="outlined primary button group">
                            <Link to={'/'}>Inicio</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button variant="contained" aria-label="outlined primary button group">
                            <Link to={'/tienda'}>Tienda</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button variant="contained" aria-label="outlined primary button group">
                            <Link to={'/nosotros'}>Nosotros</Link>
                        </Button>     
                    </li>
                    <li>
                        <Button variant="contained" aria-label="outlined primary button group">
                            <Link to={'/contacto'}>Contacto</Link>
                        </Button>     
                    </li> */}

                {pages.map( (pages)=>{
                    return(
                        <li>
                            <Button className='btn-link' variant="contained" aria-label="outlined primary button group" >
                                <Link to={pages.url}>{pages.title}</Link>
                            </Button>
                            </li>
                       
                    )
                })}



               
            </ul>
            <CartWidget/>
           
           </nav>
          
        </header>
       

    </div>
)};

export default NavBar;