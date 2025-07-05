import { useState } from 'react'
import './App.css'

function App() {
  
  const [boxStyle, setBoxStyle] = useState({ 
    width: '200px', height: '200px', backgroundColor: 'cornflowerblue' });
  
    const handleStyleChange = () => {
  
      if (boxStyle.backgroundColor === 'cornflowerblue') {
       
        setBoxStyle({
          ...boxStyle,
          backgroundColor: 'tomato',
          borderRadius: '50%',
          transform: 'rotate(360deg)' // 再加点花样！
        });
      } else {
      
        setBoxStyle({
          ...boxStyle,
          backgroundColor: 'cornflowerblue',
          borderRadius: '10px',
          transform: 'rotate(0deg)'
        });
      }
    };
  
  return (
    <div>
      <div style={boxStyle}>
  
      </div>

      <button onClick={handleStyleChange}>Click me</button>
  </div>


  )
}
  
  

export default App
