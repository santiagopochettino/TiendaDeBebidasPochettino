import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartContextProvider({ children }){
    
    const [cartList, setCartList] = useState([]);

   
    const getId = (id)=> cartList.find(product=>product.id === id  ) || null
    function agregarAlCarrito(item){
        const idCart = getId(item.id)
        if ( !idCart ) {
            setCartList([...cartList, item])
        } 
    }
    console.log(cartList, "soy cart List")


    function emptyCart(){
        setCartList([]);
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