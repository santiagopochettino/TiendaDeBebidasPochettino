import React from 'react'
import {Link} from 'react-router-dom'

//css
import '../css/ItemCount.css'

const Item = ({name, thumbnailUrl, stock, price, id}) => {
  return (
    <div className='ItemC'>
       <div className='ItemContainer'>
          <img className='imgSize' src={thumbnailUrl} alt=""/>
          <h2 >{name}</h2>
          <p>Precio: $ {price}</p>
          <p>Stock: {stock}</p>
          
          <button  className='countContainer__counter--button--detalle '>
              <Link to={`/detalle/${id}`}>Detalle</Link>
          </button>
      </div>
    </div> 
  );
};

export default Item