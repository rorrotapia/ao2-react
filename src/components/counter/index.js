import React, {useState, useEffect} from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1)
    }

    useEffect(() => {
      console.log('useEffect', count)
      document.title = `vous avez clique ${count} fois`
    }, [count])

    return (
      <div>
        <h1>counter</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={() => setCount(count - 1)}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    )
}

export default Counter