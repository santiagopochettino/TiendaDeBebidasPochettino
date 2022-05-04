import React, {useEffect, useState} from 'react'
import Item from '../components/Item'
import CircularProgress from '@mui/material/CircularProgress';

//fireBase
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

//css
import '../css/Category.css'

const Gins = () => {
  const [gin, setGin] = useState([])
  const [products , setProducts ] = useState([])
  const [loading, setLoading]= useState(true)
 
  const getProducts = async()=>{
    const itemsCollection = collection(db,'productos')
    
    const productosSnapshot = await getDocs(itemsCollection)
    const productList = productosSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
         
            return product
        }
    )
    return productList
  }
  useEffect(()=>{
    setLoading(true)
    setProducts([])
  
    getProducts().then((res)=>{
      setProducts(res)
      setLoading(false)
    })

  },[])
  useEffect( ()=>{
    filterByCategory(products)
  }, [products])

  
  const filterByCategory = (productos)=>{
    const produtosFiltrados = []
    productos.map((category)=>{
      if( category.category === 'gins'){
       produtosFiltrados.push(category)
      }
      
    })
    setGin(produtosFiltrados)

  }
  
  
  return (
    <div  className='categoryTitle'>
      <h2> Sección Gin</h2>
      {loading ? 
      (<div> 

         <CircularProgress/>
        
       </div>
      )
      :
      (<div className="category" >
        {gin ? (gin.map((e)=>( <div key={e.id}>
          <Item 
              name={e.name}
              thumbnailUrl={e.thumbnailUrl}
              price={e.price}
              stock={e.stock}
              id={e.id}
              />
        </div>))): 
        (<div>No hay productos de esa categoria</div>)}
      </div>)
      }

    </div>
  )
}

export default Gins