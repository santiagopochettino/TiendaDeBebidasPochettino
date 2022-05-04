import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import CircularProgress from '@mui/material/CircularProgress';
import { doc, getDoc } from "firebase/firestore";
import db from '../firebase'

const ItemDetailContainer = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  const getProduct = async() => {
      const docRef = doc(db, "productos", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
          let product = docSnap.data()
          product.id = docSnap.id
          setProduct(product)
        } else {
          navigate('/error')
        }
  }
  useEffect( () => {
    getProduct()
}, [id])
 
  return (
    <section className="item-detail-container">
      {product ? <ItemDetail  item={product} /> : <CircularProgress/>}
    </section>
  );
};

export default ItemDetailContainer;
