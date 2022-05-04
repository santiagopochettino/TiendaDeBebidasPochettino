import React, { useState, useContext } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {CartContext} from "../context/CartContext"
//css
import '../css/ItemDetail.css'

const ItemDetail = ({ item}) => {
  const [ contador, setContador ] = useState(0)
  const [compra, setCompra] = useState(false)
  const { agregarAlCarrito } = useContext(CartContext)

  function onAdd(count){
      setContador(count)
      setCompra(true)
  }
  function handledClick(){
    agregarAlCarrito(item, contador)
  }
  return (
    <article className="product-detail">
      <img src={item.thumbnailUrl} alt="" className="product-detail__img  "/>
      <div className="product-detail__info">
        <h2 className="name">Detalle del producto selecionado</h2>
        <ul className="info-grid">
          <li className="name-li">Articulo:</li>
          <li>{item.name}</li>
          <li className="name-li">Precio:</li>
          <li>$ {item.price}</li>
          <li className="name-li">Cantidad:</li>
        </ul>
        {
          compra? 
          <div><Link to={`/cart`}><button  className='countContainer__counter--button--finish' onClick={handledClick} >Ir al carrito</button></Link>  </div> :
          <ItemCount stock={item.stock} initial={1} onAdd={ onAdd}></ItemCount>
        }
      </div>
    </article>
  );
};

export default ItemDetail;
