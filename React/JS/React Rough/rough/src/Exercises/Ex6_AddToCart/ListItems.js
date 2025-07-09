import React, { useState } from 'react'
import useCart from './useCart'

const ListItems = () => {
    const {   addToCart } = useCart();
    const   [items, setItems]= useState([{
        id: 1, name: 'product1', price: 10, status: false,
    },
    {
        id: 2, name: 'product2', price: 11, status: false,
    },
    {
        id: 3, name: 'product3', price: 12, status: false,
    }])
    // const setAddCartStatus = (i) => {
    //     const tempArr = [...items];
    //     tempArr[i].status = true; // directly update the status
    //     setItems(tempArr);
    //   }; //1st approach
  
    const setAddCartStatus = (i) => {
        const tempArr = items.map((item, index) =>
         
          {return (index === i ? { ...item, status: true } : item)}
        
        );
        console.log('Array ',tempArr,'len: ',tempArr.length)
        setItems(tempArr); 
        addToCart(tempArr[i])
      };//2nd approach

    return (
        <div>

            <div className='item-container'>

                {
                    items.map((item,index) => (<div key={item.id} className='items'>
                        <h2>ProductId : {item.id}</h2>
                        <p>ProductName : {item.name}</p>
                        <p>ProductPrice : {item.price}</p>
                        <p>ProductStatus : {item.status?'added!':'not added'}</p>
                       {item.status? (<span style={{color:'green'}}>Item added to cart!</span>): (<button id={item.id} onClick={()=>{
                        setAddCartStatus(index)
                      
                    }     
                    }>Add To Card</button>)}
                    </div>))
                }
            </div>
            <hr />
       
                
        </div>
    )
}

export default ListItems
