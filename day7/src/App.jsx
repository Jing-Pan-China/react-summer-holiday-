import { useState } from 'react'

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
    <button onClick={handleAddTodo}>Add</button>
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
