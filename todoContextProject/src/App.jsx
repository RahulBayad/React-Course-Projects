import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/todoContext'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

function App() {
  
  const [todos , setTodos] = useState([])
  // const [todo , setTodo] = useState("")
  // const [isEditable , setIsEditable] = useState(false)
  
  const addTodo = (todo)=> {
    setTodos((prevTodos)=> {
      return [ ...prevTodos ,{id : Date.now() , todo} ]
    })
    // sessionStorage.removeItem("todos")
    console.log(todos)
  }
  const editTodo = (updatedTodo , id)=> {
    setTodos((prevTodos)=> (
      prevTodos.map((todoVal)=>(
        todoVal.id === id ? updatedTodo : todoVal
      ))
    ))
  }

  const deleteTodo = (id)=> {
    setTodos((prevTodos) => prevTodos.filter((todoVal) => todoVal.id !== id ))
  }
  
  useEffect(()=>{
    const fetchTodos = JSON.parse(localStorage.getItem("todos"))
    
    if (fetchTodos && fetchTodos.length > 0) {
      setTodos(fetchTodos)
    }
    // if(fetchTodos) setTodos(fetchTodos) 
    },[])
  
  useEffect(()=>{
    localStorage.setItem("todos" , JSON.stringify(todos))
  },[todos])

  return (
    <div className=' m-auto max-w-4xl'>
      <TodoProvider value={{todos , addTodo , editTodo , deleteTodo }}>
        
        <h1 className='text-3xl py-2 text-white font-semibold text-center pt-3'>Welcome to Todo Project</h1>
        
        <TodoForm/>
        <div className='flex max-h-96 flex-col gap-2 overflow-y-auto'>

        {
          todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))
        }
        </div>

      </TodoProvider>
    </div>
  )
}

export default App
