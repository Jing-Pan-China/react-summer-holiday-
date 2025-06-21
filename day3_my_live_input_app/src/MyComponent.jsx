import React, {useState} from 'react';

function MyComponent(){

    const[inputValue,setInputValue]=useState(" ");

    const handleInputChange=(event)=>{
        setInputValue(event.target.value);
    }

    return(
        <div>
            <input type="text" value={inputValue} onChange={handleInputChange}
            placeholder="Enter your name"/>
            <p>{inputValue}</p>
        </div>
    );
}

export default MyComponent;
