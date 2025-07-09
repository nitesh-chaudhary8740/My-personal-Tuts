import React from 'react'
import useCart from './useCart'

const CartItems = () => {
  const { cart,showCart,setShowCart }=useCart();
  const cartShowHandler = () => {setShowCart(prev=> !prev); }

  return (
    
    <div>
      <h2>My Cart</h2>
      <button onClick={()=>{
        cartShowHandler();
      }}> {showCart?'Close Cart':'Show Cart'}</button>

      {showCart &&  (cart.length===0?(<h2>Cart is Empty</h2>):
                    cart.map(item => (<div key={item.id} className='items'>
                        <h2>ProductId : {item.id}</h2>
                        <p>ProductName : {item.name}</p>
                        <p>ProductPrice : {item.price}</p>
                        <p>ProductStatus : {item.status?'added!':'not added!'}</p> 
               
                    </div>))
                   
                )}

          
    </div>
  )
}

export default CartItems
