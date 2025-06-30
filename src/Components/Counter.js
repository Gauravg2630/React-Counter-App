import './Counter.css'
import { useState } from 'react';
function Counter() {
    const [count , setCount] = useState(0);
    const MAX = 50;
    const MIN = 0;
    
    const Increment = () => {
        if (count<MAX)
        setCount(count+1);
    }

    const Decrement = () => {
        if (count>MIN)
        setCount(count -1);
    }

    const Reset = () => {
        setCount(0);
    }
  return (
    <div className='Container'>
        <h1>Counter App</h1>
        <h3>{count}</h3>

        <button onClick={Decrement} disabled={count<=MIN}>➖</button>
        <button onClick={Reset}>🔄</button>
        <button onClick={Increment} disabled={count>=MAX}>➕</button>
        

        {count === MAX && <p className="limit-message">⚠️ Maximum limit reached!</p>}
        {count === MIN && <p className="limit-message">⚠️ Minimum limit reached!</p>} 
    </div>
  )
}

export default Counter;
