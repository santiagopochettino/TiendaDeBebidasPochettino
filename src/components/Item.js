import React from 'react'
import ItemCount from './ItemCount'

//css
import '../css/Item.css'


const Item = ({title, stock, price, img, alt}) => {
  return (
    <div>
      <div className='ItemContainer'>
         <img className='imgSize' src={img} alt={alt}/>
         <h2 >{title}</h2>
         <p>Precio: $ {price}</p>
         <p>Stock: {stock}</p>
         <ItemCount/>
        
        </div> 

        
    </div>
  )
}

export default Item