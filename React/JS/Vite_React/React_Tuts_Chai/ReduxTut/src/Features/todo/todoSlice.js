import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = { todos:[{id:1,text:'hello'}]} //state is an object which have 1 key todos value: and array, this array have a objecte
export const todoSlice = createSlice({
    name:'todo',//this is (name) is predifined propter which specify the name of slice
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo = {
                id:nanoid(10),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{const filteredState = state.todos.filter(todo=>todo.id!==action.payload)
            state.todos = filteredState;
        }
    }


})
export const {addTodo,removeTodo} = todoSlice.actions;
export default todoSlice.reducer;