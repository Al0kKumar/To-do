import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Todoprovider } from './context'
import { Todoform, Todoitem } from './context/components'

function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id:Date.now(),...todo},...prev] )

  }

  const updateTodo = (id,todo) => {
       setTodos ((prev) => prev.map((prevTodo) => 
      (prevTodo.id === id ? todo :prevTodo)))
  } 


  const deleteTodo = (id) =>{
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => 
      prevTodo.id === id ? {...prevTodo,completed : 
        !prevTodo.completed} : prevTodo))
  }

 useEffect(() => {
  const todos =  JSON.parse(localStorage.getItem("todos"));

  if(todos  && todos.length > 0) {
       setTodos(todos);
  }
 },[])

  useEffect(() => {
     localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])


  return (
    <Todoprovider value = {{todos,addTodo,updateTodo,deleteTodo,
    toggleComplete}}>
       <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black min-h-screen py-12 flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto bg-gray-900 shadow-lg rounded-lg p-8 text-white">
          <h1 className="text-3xl font-bold text-center mb-6">Manage Your Todos</h1>
          <div className="mb-4">
            <Todoform />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Todoitem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Todoprovider>
  )
}

export default App
