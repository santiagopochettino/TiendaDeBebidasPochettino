import { useContext } from "react"
// import { Link } from "react-router-dom"
import CartItem from "./CartItem"
//context
import { CartContext } from "../context/CartContext"


const Cart = () =>{

    const {cartList, emptyCart } = useContext(CartContext)
    const handledClear = ()=>{
      emptyCart()
    }
    if( !cartList.length){
      return (<div>
            <h2>No hay productos en el carrito</h2>
        </div> )
    }

    return(
      <div>
        <CartItem items={cartList}/>
        <button onClick={handledClear}>Vaciar Carrito</button>

      </div> 
    ) 
}

export default Cart