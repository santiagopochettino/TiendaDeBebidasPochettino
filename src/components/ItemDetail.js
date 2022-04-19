import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {useCartContext} from "../context/CartContext"


import '../css/ItemDetail.css'

//ItemDetail recibe los datos del producto encontrado por id previamente y los muestra

const ItemDetail = ({  prod, setLoading }) => {
  const [ contador, setContador ] = useState(0)
    
  const { agregarAlCarrito } = useCartContext()

  function onAdd(cant){
      setContador(cant)
      agregarAlCarrito( {...prod, cantidad: cant} )
      setLoading(false)
  }
  
  return (
    <article className="product-detail">
      <img src={prod.thumbnailUrl} alt="" className="product-detail__img  "/>
      <div className="product-detail__info">
        <h2 className="name">Carrito</h2>
        <ul className="info-grid">
          <li className="name-li">Article name:</li>
          <li>{prod.name}</li>
          <li className="name-li">Price:</li>
          <li>$ {prod.price}</li>
          <li className="name-li">Cantidad:</li>
          <li> </li>
          <li className="name-li">description:</li>
          <li>{prod.description}</li>
        </ul>
        {
          contador? 
          <div><Link to={`/cart`}><button  className='countContainer__counter--button--finish' >Ir al carrito</button></Link>  </div> :
          <ItemCount stock={prod.stock} initial={1} onAdd={() => onAdd()}></ItemCount>
        }
      </div>
    </article>
  );
};

export default ItemDetail;
