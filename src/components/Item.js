import React,{useState} from 'react'


//css
import '../css/ItemCount.css'

const Item = ({name, onAdd, thumbnailUrl, stock, price,id}) => {

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
            alert(` Agregaste ${count} botellas de ${name} ! al carrito.`)
        )
    }

  return (
    <>
      <div className='ItemContainer'>
        <img className='imgSize' src={thumbnailUrl} alt=""/>
        <h3 >Nombre: {name}</h3>
        <p>Nro de producto: {id}</p>
        <p>Precio: $ {price}</p>
        <p>Stock: {stock}</p>
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
            Agregar
            </button>
        </div>
    </div>

        </div> 
   
      </>
  );
};


export default Item