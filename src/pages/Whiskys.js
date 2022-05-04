import React, {useEffect, useState} from 'react'
import Item from '../components/Item'
import CircularProgress from '@mui/material/CircularProgress';

//fireBase
import db from '../firebase'
import { collection, getDocs } from 'firebase/firestore'

//css
import '../css/Category.css'

const Whiskys = () => {
  const [whisky, setWhisky] = useState([])
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
      //gins whiskys vodkas rons fernets sinalcohol licores beers aperitivos vinos
      if( category.category === 'whiskys'){
       produtosFiltrados.push(category)
      }
      
    })
    setWhisky(produtosFiltrados)

  }
  
  
  return (
    <div  className='categoryTitle'>
      <h2> Sección Whisky</h2>
      {loading ? 
      (<div> 

         <CircularProgress/>
        
       </div>
      )
      :
      (<div className="category" >
        {whisky ? (whisky.map((e)=>( <div key={e.id}>
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

export default Whiskys