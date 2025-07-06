import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos]=useState(["Practice React","Practice Nodejs","Practice Go"])
  const [newTodo, setNewTodo]=useState("")

  const handleAddTodo=()=>{
    const updatedTodos=[...todos,newTodo];
    setTodos(updatedTodos);
  }
  return (
  <div>
    <h1>Hello List</h1>
    <input type="text" value={newTodo} 
    onChange={(event)=>setNewTodo(event.target.value)}/>
    <button onClick={handleAddTodos}>Add</button>
    <ul>    
      {
        todos.map((todo,index)=>(
          <li key={index}>{todo}</li>
        ))
      }    
    </ul>
  </div>
  )
}

export default App
