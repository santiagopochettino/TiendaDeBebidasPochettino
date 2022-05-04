import React, { useEffect, useState } from 'react'
import Item from './Item'
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom'
//FireBase
import db from '../firebase'
import {collection, getDocs} from 'firebase/firestore';
//css
import '../css/ItemList.css'

const ItemList = () => {
    const [products, setProducts] = useState([]);
    const [contador, setContador] = useState(0)
    const [loading , setLoading] = useState(true)
    const { category } = useParams()
    const getProducts = async () => {
    const itemsCollection = collection(db, 'productos')
    const productosSnapshot = await getDocs(itemsCollection)
    const productList = productosSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        }
    )
    return productList
} 
  useEffect(() => {
    setProducts([])
    setLoading(true)
    getProducts().then( (productos) => {
      setLoading(false)
      category ? filterProductByCategory(productos, category) : setProducts(productos)
        })
    }, [category])
    const filterProductByCategory = (array , category) => {
      return array.map( (product) => {
          if(product.category === category) {
             return setProducts(products => [...products, product]);
          }
      })
  }

  const agregarClick = (e) => {
    e.stopPropagation()
    setContador(contador + 1)
}
  return (
    <div className="ItemList">
      
         
      {
       
        products.length ? ( 
          <>
            {
              products.map((item) => {
                return (
                  <div key={item.id} action={agregarClick}>
                    
                    <Item
                      name={item.name}
                      thumbnailUrl={item.thumbnailUrl}
                      price={item.price}
                      stock={item.stock}
                      id={item.id}
                    />
                  </div>
                );
              })
            }
          </>
        ) : (
         <div className='ItemListTitle'> 
         <h2>Cargando catalogo de bebidas</h2>
         <CircularProgress/>
         </div>
        ) 
      }
    </div>
  )
}

export default ItemList