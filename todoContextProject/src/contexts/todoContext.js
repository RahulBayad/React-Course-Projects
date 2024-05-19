import { createContext, useContext } from "react";

const todoContext = createContext({
    todos : [{ id : 1 , todo : "Bill"}],
    addTodo : ()=>{},
    editTodo : ()=>{},
    deleteTodo : ()=>{},
})

export const useTodo = ()=> useContext(todoContext)

export const TodoProvider = todoContext.Provider