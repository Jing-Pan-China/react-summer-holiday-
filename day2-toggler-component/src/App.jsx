import { useState } from 'react'


function App() {
  const[isVisible,setIsVisible]=useState(true)
  const handleToggle=()=>{
    setIsVisible(!isVisible);
  }
  return(
    <div className="container">
      <h1>Toggler</h1>
      <button onClick={handleToggle}>{isVisible? "Hide":"Show"}</button>
      {isVisible && (
      <div className="toggled-content">
        <p>
          Hey! You find me!!!
        </p>
     </div>
  )}
    </div>

);
}

export default App;
