import React, {useState} from 'react'

//css
import '../css/ItemCount.css'

const ItemCount = ({onAdd, title}) => {
    const stock = 6
    const initial = 1
   const [count, setCount]= useState(initial);
   const addCount = ()=>{
      
   setCount(count + 1)
    }
    const removeCount = ()=>{
        
        setCount(count - 1)
    }
    const finishShop = ()=>{
        onAdd(
            alert(`Agregaste ${count} ${title} al carrito`)
        )
    }

  return (
    <div className='countContainer'>
         
        <div className='countContainer__counter'>

             <img  src='fernet.jpg' alt='fernet branca'/>
             <h4 className='countContainer__counter--h4'>{title}</h4>
            <button className='countContainer__counter--button'
             onClick={removeCount}
             disabled={count === initial ? true : null}>
                -
            </button>

            <span className='countContainer__counter--span'>
                {count}
            </span>
            <button className='countContainer__counter--button'
             onClick={addCount}
             disabled={count === stock ? true : null}>
                +
            </button>
            

            <button  className='countContainer__counter--button--finish' 
            onClick={finishShop}
            disabled={stock === 0 ? true : null}>
            Agregar
            </button>

        </div>


    </div>
  )
}

export default ItemCount