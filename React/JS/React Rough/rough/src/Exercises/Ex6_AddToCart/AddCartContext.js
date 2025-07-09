import React, { useState } from 'react'
export const CartContext = React.createContext();

const AddCartContext = ({children}) => {
    const [cart,setUpdateCart] =useState([]);
    const [showCart,setShowCart] = useState(false);

    // const [status,toggleStatus] = useState(false);
  
  return (
    <CartContext.Provider value={{cart,setUpdateCart,showCart,setShowCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default AddCartContext
