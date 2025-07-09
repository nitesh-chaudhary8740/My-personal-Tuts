import React, { useState } from 'react'
import ListItems from './ListItems'
import ListDataInputComponent from './ListDataInputComponent'
import './TodoList.css'
import Alert from './Alert'


export default function ToDoListContainer() {
    const [listItems, setNewListItem] = useState([])
    const [showInputField, setShowInputField] = useState(false)
    const [showAlert, setShowAlert] = useState(false);
    const [missedFields, getMissedFields] = useState([]);
    const [addOrSaveButton,setAddOrSaveButton] =useState('')
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [selectedToDo,setSelectedToDo] = useState(null)

    return (
        <div className='TodoListContainer'>
            {showAlert && (<Alert missedFields={missedFields} />)} 

            {(showInputField) && (<ListDataInputComponent 
            setShow={setShowInputField}//for show/hide
            addList={setNewListItem}//push todo object in listItem state array
            title={title}//a field of data object
            setTitle={setTitle}//set title filed
            description = {description}//same as b4
            setDescription = {setDescription}//sab4
            date = {date}//sab4
            setDate = {setDate}//sab4
            getMissedFields={getMissedFields}//return missed fields while input
            setShowAlert={setShowAlert}//set show/hide of alert, if all entries are filled(hide), missed(show)
            addOrSaveButton = {addOrSaveButton}//according to action button name, if new list(add) old modified(save)
            setAddOrSaveButton = {setAddOrSaveButton}//for setting name
            selectedToDo = {selectedToDo} //selected todo holds index(number value) which is specifying, index of toDolist array use (delete,edit toDo object)
            setSelectedToDo = {setSelectedToDo}
            todoList ={listItems} //entire array
            />)}




            <div>
                <button onClick={() => {
                    // setShowInputField(true)
                    setShowInputField(true) 
                    setAddOrSaveButton('Add')
                    setTitle(''); //leave empty after successfully pushing the todo object with all entries
                    setDescription('');
                    setDate('');
                }}> Add New To do list </button>
            </div>




            {listItems.map((list, index) => {
                return (<ListItems key={`listNo${index}`} 
                    index={index} //for identifying each todo list through edit button's id
                    titleValue={list.title} //to show title
                    descriptionValue={list.description}//as well des
                    dateValue={list.date}//and date
                    setAddOrSaveButton = {setAddOrSaveButton} //to convert InputComponent add button---->save
                    setShowInputField = {setShowInputField} //when click on 'edit' btn setShow Input fields true
                    todoList ={listItems}//entire todoList for fetching specfic index todoList then show on input field
                    setTodoList = {setNewListItem}
                    setTitle = {setTitle} //to set Title field
                    setDescription = {setDescription} //as well des
                    setDate = {setDate} //and set date too
                    setSelectedToDo = {setSelectedToDo} //for specifying which index toDo list is selected
                     />)
            }
            )}

    
        </div>
    )
}
