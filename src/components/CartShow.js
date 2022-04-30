import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import '../css/CartShow.css'

const CartShow = ({items}) => {
    const { deleteOne} = useContext(CartContext)
    const handledRemove = ()=>{
        deleteOne(items.id)
    }
  return (
    <div>
      <div className='ItemC'>
      <div className='ItemContainer2'>
        <button onClick={handledRemove}>X</button>
        <img className='imgSize' src={items.thumbnailUrl} alt=""/>
        <h2 >{items.name}</h2>
        <p>Cantidad: {items.count}</p>
        <p>Total: $ {items.count * items.price}</p>
      </div>
      </div> 
   
    </div>
  )
}

export default CartShow