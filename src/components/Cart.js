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

    const {cartList, emptyCart, total, totalCompra } = useContext(CartContext)
    const [openModal, setOpenModal] = useState(false)
    const [successOrder, setSuccessOrder] = useState()
    const [formData, setFormData] = useState({
      name: '',
      phone: '',  
      email: '',
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
           <Button className='btn-link' variant="contained" aria-label="outlined primary button group" >
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
      console.log("orden generada: ", orderDoc.id)
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
      <div>
        <CartItem items={cartList}/>
        <div>
           <h2>  Cantidad a comprar : {total}</h2>
           <p>Total de la compra: {totalCompra}</p>
        </div>

        <Button className='btn-link btnVaciarCart'  onClick={handledClear} variant="contained" aria-label="outlined primary button group" >
           Vaciar Carrito
        </Button>
        <Button className='btn-link btnVaciarCart'  onClick={SeguirComprando} variant="contained" aria-label="outlined primary button group" >
        <Link to={'/tienda'}>Seguir Comprando</Link>
        </Button>
        <Button className='btn-link btnVaciarCart'  onClick={setOpenModal} variant="contained" aria-label="outlined primary button group" >
         Finalizar Compra
        </Button>
        <ModalCustom handleClose={() => setOpenModal(false)} open={openModal}>
                
                {successOrder ? (
                    <div>
                        <h3>Orden generada correctamente</h3>
                        <p>Felicidades!</p>
                        <p>Su numero de orden es: {successOrder}</p>
                        <Button className='btn-link btnVaciarCart'  onClick={ handledClear} variant="contained" aria-label="outlined primary button group" >
                          Aceptar
                        </Button>
                    </div>
                ) : (
                    <>
                        <h2>FORM USUARIO</h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" name='name' placeholder='Nombre' 
                                onChange={handleChange} 
                                value={formData.name}
                            />
                            <input type="number" name='phone' placeholder='Telefono' 
                                onChange={handleChange} 
                                value={formData.phone}
                            />
                            <input type="mail" name='email' placeholder='mail' 
                                onChange={handleChange} 
                                value={formData.email}
                            />

                            <Button type="submit">Enviar</Button>
                        </form>
                    </>
                )}
                
            </ModalCustom>

      </div> 
    ) 
}

export default Cart