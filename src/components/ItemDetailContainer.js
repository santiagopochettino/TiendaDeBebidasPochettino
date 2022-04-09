import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productList } from '../data/data';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const {id} = useParams()

  const myProducts = () =>{
    return new Promise ( (resolve, reject) =>{
      return resolve(productList);
    })
  }

  useEffect(() => {
    myProducts().then( (res) =>{
      const productId = res.find(e => e.id == id)
      setProduct(productId)
    })
   
  }, []);
  
  return (
    <section className="item-detail-container">
      {product ? <ItemDetail item={product} /> : <p>Obteniendo producto...</p>}
    </section>
  );
};

export default ItemDetailContainer;
