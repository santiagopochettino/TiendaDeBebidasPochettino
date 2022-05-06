import { createContext, useState } from "react";

export const CartContext = createContext([]);

export function CartContextProvider({ children }){
    
    const [cartList, setCartList] = useState([])
    const [total, setTotal] = useState(0)
    const [totalCompra, setTotalCompra] = useState(0)

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
        setTotalCompra(totalCompra + (item.count * item.price))
        return true
    }
    function emptyCart(){
        setCartList([])
        setTotal(0)
        setTotalCompra(0)
    }
    const isInCart = (id) =>{
        return cartList.some( prod => prod.id === id)
    }
    
    const sumaTotal = () => {
       return calcularTotal(cartList)
    }

    const calcularTotal = (cartList) => {
        return cartList.reduce((acum, item) => acum = acum + (item.price * item.cantidad), 0)
     }

    const cantidad = () => {
        return calcularCantidad(cartList)
    }
    
    const calcularCantidad = (cartList) => {
        return cartList.reduce((acum, item) => acum += item.cantidad, 0)
    }

    const deleteOne = (id) => {
        setCartList(cartList.filter(p => p.id !== id))
        setTotal(cantidadForItem())
        setTotalCompra(sumaForItem())
    }

    const getItemFromCart = (id) => {
        return cartList.filter(p => p.id === id)
    }

    const cantidadForItem = (id) => {
        const item = getItemFromCart(id)
        return calcularCantidad(item)
    }

    const sumaForItem = (id) =>{
        const item = getItemFromCart(id)
        return calcularTotal(item)
    }
    
    return <CartContext.Provider value={{
        cartList,
        agregarAlCarrito,
        emptyCart, 
        deleteOne,
        sumaTotal,
        cantidad,
        setTotal,
        total,
        totalCompra,
        isInCart
    }}>
        { children }
    </CartContext.Provider>
}