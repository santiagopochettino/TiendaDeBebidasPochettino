import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartContextProvider({ children }){
    
    const [cartList, setCartList] = useState([]);
    const [total, setTotal] = useState(0)

    const getId = (id)=> cartList.find(product=>product.id === id  ) || null
    function agregarAlCarrito(item, count){
        const idCart = getId(item.id)
        if ( !idCart ) {
            setCartList([...cartList, item])
            item.count = count 
        } else{
            if(idCart.count + count > idCart.stock)
            return false
            idCart.count += count 
        }
        setTotal(total + count )
        return true
    }
    console.log('cart list', cartList)

    function emptyCart(){
        setCartList([]);
        setTotal(0)
    }
    const isInCart = (id) =>{
        return cartList.some( prod => prod.id === id)
    }
    const deleteOne = (id) => {
        setCartList(cartList.filter(p => p.id !== id));
    }
    const sumaTotal = () => {
       return cartList.reduce((acum, item) => acum = acum + (item.price * item.cantidad), 0)
    }

    const cantidad = () => {
        return cartList.reduce((acum, item) => acum += item.cantidad, 0)
    } 
    return <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        emptyCart, 
        deleteOne,
        sumaTotal,
        cantidad,
        isInCart
    }}>
        { children }
    </CartContext.Provider>
}