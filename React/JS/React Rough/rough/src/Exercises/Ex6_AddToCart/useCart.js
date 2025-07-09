import React, { useContext } from 'react'
import { CartContext } from './AddCartContext'

const useCart = () => {
    const {cart,setUpdateCart,showCart,setShowCart}=useContext(CartContext);
      const addToCart = (item,index) =>{
          const tempArr = [...cart];
          tempArr.push(item);
          setUpdateCart(tempArr);
            
        }
  return (
   {cart,setUpdateCart,addToCart,showCart,setShowCart}
  );
}

export default useCart
