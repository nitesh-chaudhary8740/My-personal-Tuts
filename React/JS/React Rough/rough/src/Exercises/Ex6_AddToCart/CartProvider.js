import React from 'react'
import AddCartContext from './AddCartContext'
import ListItems from './ListItems'
import './css/index.css'
import CartItems from './CartItems'
const CartProvider = () => {
  return (
    <AddCartContext>
      
      <ListItems/>  
      <CartItems/>
    </AddCartContext>
  )
}

export default CartProvider
