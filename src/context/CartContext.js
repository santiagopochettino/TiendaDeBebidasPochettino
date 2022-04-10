import { createContext, useState } from 'react'

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [cartProducts, setCartProducts] = useState([]);

    const addProductToCart = (product)=>{
      let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
        !exist && setCartProducts(cartProducts => [...cartProducts, product])
    }
    const calculeTotalPrice = ()=>{
      let total = 0

      cartProducts.map( (cartProduct) => {
         total = cartProduct.price + total
      })

      return total
    }
    const deleteProduct = (product) => {
      setCartProducts(cartProducts.filter( cartProduct => cartProduct.id !== product.id))
  }


    const data = {
      addProductToCart,
      calculeTotalPrice,
      deleteProduct
    }

  return (
    <>
    <CartContext.Provider value={data}>
        {children}
    </CartContext.Provider>

    </>
  )
}

//Cuando ya tenemos utilizado 1 componente con export default 
//al otro lo definimos como un export y {}
export {CartProvider}
export default CartContext