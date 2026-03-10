import React, { useContext } from 'react'
import { MainContext } from '../context/Context'
import { Button } from '@mui/material'

const CartPage = () => {
    const {cart, setCart} = useContext(MainContext)
    const deleteHandler=(id)=>{
     let newcart = cart.filter((item)=> item.id != id )
     setCart(newcart)
     localStorage.setItem('cartItem', JSON.stringify(newcart))
    }
    
    const cartTotal = cart?.reduce((sum, cur)=> sum + (cur.quantity * cur.price),0)
    console.log("kkkkkkk", cart, cartTotal);
  return (
    <div>
      <table>
        
        {cart?.map((item)=> <tr> <td>{item.id}</td><td>{item.proname}</td><td>{item.price}</td><td>{item.quantity}</td><td>{item.quantity * item.price}</td><td><Button variant='contained' onClick={()=>deleteHandler(item.id)}>DELETE</Button></td></tr>)}
      </table>
      <div className=' bg-amber-950 text-3xl text-white'>Total: {cartTotal}</div>
    </div>
  )
}

export default CartPage