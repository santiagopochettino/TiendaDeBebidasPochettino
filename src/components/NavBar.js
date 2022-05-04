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
        title:'Whisky',
        url:'/category/whiskys'
    },
    {
        title:'Cerveza',
        url:'/category/beers'
    },
    {
        title:'Ron',
        url:'/category/rons'
    },
    {
        title:'Licor',
        url:'/category/licores'
    },
    {
        title:'Gin',
        url:'/category/gins'
    },
    {
        title:'Fernet',
        url:'/category/fernets'
    },
    {
        title:'Vodka',
        url:'/category/vodkas'
    },
    {
        title:'Vino',
        url:'/category/vinos'
    },
    {
        title:'Aperitivo',
        url:'/category/aperitivos'
    },
    {
        title:'Jugo',
        url:'/category/sinalcohol'
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