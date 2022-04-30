import React from 'react'
//context
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
//css
import '../css/CartWidget.css'

const CartWidget = () => {
  const {total} = useContext(CartContext)
  
  
  return (
    <div className='cart-icon'>
         <Link to= '/cart' className='nav-link active'>
            <svg xmlns='http://www.w3.org/2000/svg' width='50' height='40' fill='black' className='bi bi-bag-fill' viewBox='0 0 16 16'>
            <path d='M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z'/>
            </svg>
         </Link>
         <p>{total}</p>
        
    </div>
  )
}

export default CartWidget