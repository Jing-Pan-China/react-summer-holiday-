import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function generateRandomHexColor() {
  const hexChars = '0123456789abcdef';
  let newColor = '#';
  for (let i = 0; i < 6; i++) {
    newColor += hexChars[Math.floor(Math.random() * 16)];
  }
  return newColor;
}



function App() {
  
  const [color, setColor]=useState("#add8e6");

  const handleColorChange=()=>{
    const newColor=generateRandomHexColor();
    setColor(newColor);

  }
  

  return(
    <div style={{ 
      backgroundColor: color, 
      minHeight: '100vh', 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center' 
    }}>
      <div>
        <h1>随机颜色生成器</h1>
        <div className="color-display">{color}</div>
        <button onClick={handleColorChange}>生成新的颜色</button>
      </div>
   </div>

  );
}

export default App
