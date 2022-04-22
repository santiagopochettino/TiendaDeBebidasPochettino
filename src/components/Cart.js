import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import  Button  from "@mui/material/Button"
//context
import { CartContext } from "../context/CartContext"
import '../css/Cart.css'


const Cart = () =>{

    const {cartList, emptyCart } = useContext(CartContext)
    const handledClear = ()=>{
      emptyCart()
    }
    const finalizarCompra = ()=>{
      alert('Compra exitosa!')
    }
    if( !cartList.length){
      return (<div>
           <div className="cartContainer">
           <h2>¿No hay productos en el carrito?</h2>
           <p>Click en el botón para continuar comprando!</p>
           <Button className='btn-link' variant="contained" aria-label="outlined primary button group" >
           <Link to={'/tienda'}>Tienda</Link>
           </Button>
           </div>
        </div> )
    }

    return(
      <div>
        <CartItem items={cartList}/>
        
        <Button className='btn-link btnVaciarCart'  onClick={handledClear} variant="contained" aria-label="outlined primary button group" >
           Vaciar Carrito
        </Button>
        <Button className='btn-link btnVaciarCart'  onClick={finalizarCompra} variant="contained" aria-label="outlined primary button group" >
          <Link to={'/'}>Finalizar Compra</Link>
        </Button>

      </div> 
    ) 
}

export default Cart