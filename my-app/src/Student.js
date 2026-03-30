import React,{useState} from 'react';

 
function App() { 

    //State Management
    const [count, setCount] = useState(0);

    //Event Handling function
    const increaseCounter = () => { 
        setCount(count + 1); 
    }
 
  return ( 
    <div> 
      <h1>Student Counter</h1> 
      <p>Count: {count}</p> 
      <button onClick={increaseCounter}> 
        Increase Counter 
      </button> 
    </div> 
  ); 
} 
 
export default Student;