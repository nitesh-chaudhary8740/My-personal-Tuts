import React, { useState } from 'react'
export default function ListDataInputComponent(props) {
    const {
        setShow,
        addList,
        getMissedFields,
        setShowAlert,
        addOrSaveButton,
        setAddOrSaveButton,
        title,setTitle,
        description,setDescription,
        date,setDate,
        selectedToDo,setSelectedToDo,
        todoList,
    } = props;
    
   
    

    const addNewList = (list) => { //this todo list object whill be passed when add btn will be clicked
        let nullKey = Object.keys(list).filter(key => list[key].trim() === '')//retrieveing empty fields{which are props of object}
        if(nullKey.length!==0){ 
            setShowAlert(true);
          getMissedFields(nullKey)
        }
        else{
            if(addOrSaveButton==='Add'){
                
                 addList((prevElements) => [...prevElements, list]); //pushing todo list object in container Array
                 
                 console.log("okokkkkkkkk")
            }
            else if(addOrSaveButton==='Save'){
                const newArr = [...todoList];
            //  const modifiedToto = {  title: newArr[selectedToDo].title}
                newArr.splice(selectedToDo,1,list)
                addList(newArr );
              
                setTitle(''); //leave empty after successfully pushing the todo object with all entries
                setDescription('');
                setDate('');
                // setSelectedToDo(null)
                console.log('skahfjashfdk')
            }
            setShowAlert(false);//hide alert if all fields filled
                setShow (false);//after adding new todo hide the data input field
        }
    }

    return (
        <div className='toDoListInputComponent'>
            <form >
                <div><b>Title: </b> <input type="text" placeholder='Title' value={title} onChange={(event) => { setTitle(event.target.value) }} /></div>
                <div><b>Description: </b><input type="text" placeholder='Desciption' value={description} onChange={(event) => { setDescription(event.target.value) }} /></div>
                <div><b>Date: </b><input type="date" placeholder='date' value={date} onChange={(event) => { setDate(event.target.value) }} /></div>
                <div><input type="submit" placeholder='date' value={addOrSaveButton} onClick={(event) => {
                    event.preventDefault();
                    addNewList(
                        {
                            title: title,
                            description: description,
                            date: date
                        }
                    )
               
                }} /></div>
                <div><button onClick={() => { setShow(false); setShowAlert(false)}}>Cancel</button></div>
            </form>
        </div>
    )
}
