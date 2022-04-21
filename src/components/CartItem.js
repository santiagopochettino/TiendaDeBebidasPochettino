import React from 'react'
import CartShow from './CartShow'

const CartItem = ({items}) => {
  return (
    <div>
        {
            items.map(product =>
                <CartShow key={product.id} items={product}/>)
        }
    </div>
  )
}

export default CartItem