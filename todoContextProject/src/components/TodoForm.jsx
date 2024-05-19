import React from 'react'
import { useTodo } from '../contexts/todoContext'

const TodoForm = () => {

    const {todos ,addTodo} = useTodo();

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("val" , e.target.todo.value)
        addTodo(e.target.todo.value)
        console.log("todos" , todos)
    }

  return (
    <div className=' py-10  m-auto'>
      <form className='flex flex-row justify-center' onSubmit={handleSubmit}>
        <input 
            type="text" 
            placeholder='Write something here....'
            name='todo'
            className=' w-full px-1 py-2 outline-none text-sm'
            style={{borderTopLeftRadius : "5px" , borderBottomLeftRadius : "5px"}}
        />
        <button
            className='text-white bg-blue-500 px-4 py-1 border-none outline-none'
            style={{borderTopRightRadius : "5px" , borderBottomRightRadius : "5px"}}
        >Add</button>
      </form>
    </div>
  )
}

export default TodoForm
