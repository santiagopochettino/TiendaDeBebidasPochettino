import React from 'react'
import CartShow from './CartShow'
//css
import '../css/ItemList.css'

const CartItem = ({items}) => {
  return (
    <div className="ItemList">
        {
            items.map(product =>
                <CartShow key={product.id} items={product}/>)
        }
    </div>
  )
}

export default CartItem