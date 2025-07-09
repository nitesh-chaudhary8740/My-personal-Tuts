import React from 'react'

export default function ListItems(props) {
    const { titleValue, descriptionValue, dateValue, index, setAddOrSaveButton, setShowInputField, todoList,setTitle,setDescription,setDate, setSelectedToDo,setTodoList} = props;
    // let indexEL =0;
    return (
        <div >
            <h2>Title : {titleValue}</h2>
            <h3>Description: {descriptionValue}</h3>
            <h3>Date: {dateValue}</h3>
            <h3>indexTodo: {index}</h3>
            <button id={`edit-${index}`} onClick={
                (event) => {
                    let elementId = event.target.id;
                    let elementIndex =  parseInt(elementId.slice(5));
                   

                    // console.log("Elemett Id ",elementId,' index: ',elementIndex, ' type', typeof(elementIndex))
                    setTitle(todoList[elementIndex].title)
                    setDescription(todoList[elementIndex].description)
                    setDate(todoList[elementIndex].date)
                    setSelectedToDo(elementIndex);
                    setAddOrSaveButton('Save')
                    setShowInputField(true)
                }
            }>Edit</button>
            <button id={`delete-${index}`}onClick={(event)=>{
                // console.log("delete")
                let elementId = event.target.id;
                let elementIndex =  parseInt(elementId.slice(7));
                // console.log("index to remove"+elementIndex);
                 const tempArr = [...todoList]
                 tempArr.splice(elementIndex,1);
                 tempArr.forEach(ele=>console.log(ele))
                 setTodoList(tempArr);
                setShowInputField(false)
                 
            }}>Delete</button>
        </div>
    )
}
