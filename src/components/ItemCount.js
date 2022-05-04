import React, {useState} from 'react'

//css
import '../css/ItemCount.css'

const ItemCount = ({onAdd,thumbnailUrl, stock, name }) => {
   const initial = 1
   const [count, setCount]= useState(initial);
   const addCount = ()=>{
      
   setCount(count + 1)
    }
    const removeCount = ()=>{
        setCount(count - 1)
    }
    const finishShop = ()=>{
        onAdd(count)
    }

  return ( 
      <>
      <div >
        <img className='imgSize' src={thumbnailUrl} alt=""/>
        <h2 >{name}</h2>
        <div className='countContainer'>
        <div className='countContainer__counter'>
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
            Comprar
            </button>
        </div>
    </div>

        </div> 
   
      </>
  )
}

export default ItemCount