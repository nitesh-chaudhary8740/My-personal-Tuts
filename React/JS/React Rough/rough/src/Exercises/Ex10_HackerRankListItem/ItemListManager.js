import React, { useState } from 'react'

const ItemListManager = () => {
    const [itemName, setItemName] = useState('')
    const [listItems, setListItems] = useState([]);
    const [showInputField, setShowInputField] = useState(false)
   
    const [showAlert,setShowALert] =useState(false)
    const addNewItemHandler = () => {
        setShowInputField(true);
        if (itemName && showInputField) {
            const tempArray = [...listItems];
            tempArray.push(itemName);
            setListItems(tempArray);
            setItemName('');
            setShowInputField(false)
        }
        else if(showInputField && !itemName) {
            setShowALert(true);
            setTimeout(() => {
                setShowALert(false)
            }, 2000);
        }

    }
    return (
        <div>
            {showAlert && (<div>Input field is empty</div>)}
            <ul>
                {listItems.length===0?(<div>List is Empty</div>): listItems.map((ele,index) => {
                   return  (<li key ={index}>{ele}</li>)
                })}
                {showInputField && (<input type='text' value={itemName} onChange={(event) => { setItemName(event.target.value) }} />)}
            </ul>
            <div>
                <button onClick={addNewItemHandler}>{showInputField ?  'Save Item':'Add New Item' }</button>
            </div>

        </div>
    )
}

export default ItemListManager
