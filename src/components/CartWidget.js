import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//context
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

//css
import '../css/CartWidget.css'

const CartWidget = () => {
  const {cartList} = useContext(CartContext)
  
  
  return (
    <div className='cart-icon'>
        <ShoppingCartIcon /> 
       <p>{cartList.length}</p>
        
    </div>
  )
}

export default CartWidget