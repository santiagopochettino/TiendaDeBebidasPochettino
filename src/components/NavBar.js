import React from 'react';
import Button from '@mui/material/Button';
import Logo from './Logo';
import CartWidget from '../components/CartWidget'
//react router dom
import { Link } from 'react-router-dom'
//context
// import ThemeContext from '../context/ThemeContext';


//css
import '../css/NavBar.css'

function NavBar  ()  {
    // const {lightTheme} = useContext(ThemeContext)
    // console.log("light state : ", lightTheme)
   
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
        title:'Cart',
        url:'/cart'
    },
    {
        title:'vodkas',
        url:'/category/vodkas'
    },

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

                {pages.map( (pages, index)=>{
                    return(
                        <li key ={index}>
                            <Button className='btn-link' variant="contained" aria-label="outlined primary button group" >
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