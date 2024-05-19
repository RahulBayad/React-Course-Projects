import React, { useState } from 'react'
import { useTodo } from '../contexts/todoContext'

const Todo = ({todo}) => {

  const {todos , editTodo , deleteTodo } = useTodo();
  const [todoMsg , setTodoMsg] = useState(todo.todo)
  const [isEditAllowed , setIsEditAllowed] = useState(false)
  
  return (
    // <div>
      
      <div 
        className={`grid bg-white py-2 rounded-md ${isEditAllowed ? 'bg-yellow-100' : ''}`}
        style={{ gridTemplateColumns : "5% auto 16%"}}
      >
        <div className='text-center'>1</div>

        <div className='px-4'>
          <input 
            className='outline-none  w-full py-0.5 '
            style={{backgroundColor : "transparent"}}
            type="text" 
            value={todoMsg}
            onChange={(e) => setTodoMsg(e.target.value)}
            readOnly={!isEditAllowed}
          />
        </div>

        <div className='flex flex-wrap gap-1 justify-center'>
          <button
            className='px-3 py-0.5 bg-green-300 rounded-md cursor-pointer'
            onClick={()=>{
              if(isEditAllowed){
                console.log(todoMsg)
                editTodo({...todo , todo : todoMsg}, todo.id)
                setIsEditAllowed(!isEditAllowed)  
              }
              else{
                setIsEditAllowed(!isEditAllowed)
              }
            }}
          > 
            { isEditAllowed ? "Save" : "Edit" }
          </button>

          <button
            className='px-3  bg-red-300 rounded-md cursor-pointer'
            onClick={()=>deleteTodo(todo.id) }
          >
            Delete
          </button>

        </div>

      </div>

    // </div>
  )
}

export default Todo
