
import {useState} from 'react';
function Counter(){
    const[count,setCount]=useState(0);
    return(
        <div className="container">
            <h1>Counter</h1>
            <p className="count-display">{count}</p>
            <button onClick={()=>setCount(count+1)}>
                add 1 
            </button>
            <button onClick={()=>setCount(count-1)}>
                minus 1
            </button>

        </div>
    );

}

export default Counter;