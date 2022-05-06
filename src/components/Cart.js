import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import  Button  from "@mui/material/Button"
import ModalCustom from "./ModalCustom"
//context
import { CartContext } from "../context/CartContext"
//css
import '../css/Cart.css'
//firebase
import db from '../firebase'
import { addDoc, collection } from 'firebase/firestore';


const Cart = () =>{

    const {cartList, emptyCart, total, totalCompra} = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [successOrder, setSuccessOrder] = useState()
    const [formData, setFormData] = useState({
      name: '',
      phone: '',  
      email: '',
      address:''
  })
    const [order, setOrder] = useState(
      {
          buyer : formData,
          items: cartList.map( (cartList)=> {
              return {
                  id: cartList.id,
                  title: cartList.name,
                  price: cartList.price
              }
          }),
          total: ''
      }
  )
    const handledClearX = ()=>{
        setOpenModal(false)
    }
    const handledClear = ()=>{
      emptyCart()
    }
    const SeguirComprando = ()=>{
     
    }
   
    if( !cartList.length){
      return (<div>
           <div className="cartContainer">
           <h2>¿No hay productos en el carrito?</h2>
           <p>Click en el botón para continuar comprando!</p>
           <Button className='btn-link' variant="contained" color="success" >
           <Link to={'/tienda'}>Tienda</Link>
           </Button>
           <div className="cartContainerImgs">
                <img src="drink-01.jpg" alt=""/>
                <img src="drink-02.jpg" alt=""/>
                <img src="drink-03.jpg" alt=""/>
           </div>
           </div>
        </div> )
    }
    

    const handleSubmit = (e) => {
        e.preventDefault()
        let prevOrder = {...order,
            buyer: formData
        }
        setOrder({...order,
            buyer: formData})
        pushOrder(prevOrder)
    }
    const pushOrder = async (prevOrder) => {
      const orderFirebase = collection(db, 'ordenes')
      const orderDoc = await addDoc(orderFirebase, prevOrder)
      setSuccessOrder(orderDoc.id)
      
  }

  const handleChange = (e) => {
      const {value, name} = e.target

      setFormData({
          ...formData,
          [name]: value
      })
  }
  
    return(
      <div >
        <CartItem items={cartList}/>
        <div className="cart">
        <Button className='btn-link btnVaciarCart btnVaciarCartRed'  onClick={handledClear} variant="contained" color="error" >
           Vaciar Carrito
        </Button>
        <Button className='btn-link btnVaciarCart'  onClick={SeguirComprando} variant="contained" color="success" >
        <Link to={'/tienda'}>Seguir Comprando</Link>
        </Button>
        <Button className='btn-link btnVaciarCart'  onClick={setOpenModal} variant="contained" color="success" >
         Finalizar Compra
        </Button>
           <h3>Cantidad: {total} </h3>
           <h3>Total de la compra: $ {totalCompra}</h3>
        </div>
        <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                
                {successOrder ? (
                    <div className="CompraExitosa">
                        <h2>¡¡ Compra realizada correctamente !!</h2>
                        <p>¡ Felicidades ! <span className="bolder">{formData.name}</span></p>
                        <p>El total de su pedido es de  <span className="bolder">$ {totalCompra} .</span></p>
                        <p>Llegará en las proximas 24 hs.</p>
                        <p> A <span className="bolder">{formData.address}</span>.</p>
                        <p>Orden:<span className="bolder">  {successOrder}</span></p>
                        <p>¡Gracias por su Compra!</p>
                        <Button className='btn-link'  onClick={ handledClear} variant="contained" color="success" >
                          Aceptar
                        </Button>
                    </div>
                ) : ( 
                    <div className="form">
                         <button className="formX" onClick={handledClearX}>X</button>
                        <h3>Para finalizar tu compra completá:</h3>
                        <form onSubmit={handleSubmit}>
                            <label for="name">Nombre y Apellido:</label>
                            <input type="text" name='name' placeholder='Escriba su Nombre Completo...'  required className="form-control"
                                onChange={handleChange} 
                                value={formData.name}
                            />
                            <label for="phone">Telefono:</label>
                            <input type="number" name='phone' placeholder="Escriba su Telefono..." required className="form-control" 
                                onChange={handleChange} 
                                value={formData.phone}
                            />
                            <label for="email">Email:</label>
                            <input type="mail" name='email' placeholder="Escriba su Email..." required className="form-control"
                                onChange={handleChange} 
                                value={formData.email}
                            />
                            <label for="name">Dirección:</label>
                            <input type="text" name='address' placeholder='Escriba su Dirección...'  required className="form-control"
                                onChange={handleChange} 
                                value={formData.address}
                            />
                            
                            <Button className='btn-link ' type="submit" variant="contained" color="success">Enviar</Button>
                        </form>
                    </div>
                )}
                
            </ModalCustom>

      </div> 
    ) 
}

export default Cart