import React from 'react';
import ItemCount from './ItemCount';

import '../css/ItemDetail.css'

//ItemDetail recibe los datos del producto encontrado por id previamente y los muestra

const ItemDetail = ({ item }) => {
  const onAdd = (count) => {
    // alert(`Has agregado ${count} ${item.name} .`);
  };

  console.log(item);
  return (
    <article className="product-detail">
      <img src={item.thumbnailUrl} alt="" className="product-detail__img  "/>
      <div className="product-detail__info">
        <h2 className="name">Carrito</h2>
        <ul className="info-grid">
          <li className="name-li">Article name:</li>
          <li>{item.name}</li>
          <li className="name-li">Price:</li>
          <li>$ {item.price}</li>
          <li className="name-li">description:</li>
          <li>{item.description}</li>
        </ul>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
      </div>
    </article>
  );
};

export default ItemDetail;
