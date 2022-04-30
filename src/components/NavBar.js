import React from 'react';
import Button from '@mui/material/Button';
import Logo from './Logo';
import CartWidget from '../components/CartWidget'
//react router dom
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
        title:'Vodkas',
        url:'/category/vodkas'
    },
   

    ]
    return( 
    <div>
        <header className='main-header'>
           <nav>
           <div className='container-logo'>
             <Logo />
            </div>
         
            <ul className="navbar">

                {pages.map( (pages, index)=>{
                    return(
                        <li key ={index}>
                            <Button className='btn-link' variant="contained" color='success' >
                                <Link to={pages.url}>{pages.title}</Link>
                            </Button>
                            
                            </li>
                       
                    )
                })}

            </ul>
                <div className='CartBar'>
                    <CartWidget/>
                </div>
            
           </nav>
          
        </header>
       
    </div>
)};

export default NavBar;