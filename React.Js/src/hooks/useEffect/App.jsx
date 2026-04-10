import React, { useEffect, useState } from 'react'

const App = () => {
    const [count,setcount] = useState(0)
    useEffect(()=>{
        console.log("Count updated:", count)
    },[count])
  return (
    <div>
          {console.log("Rendered Successfully")}
          <h1>{count}</h1>
          <button onClick={()=> setcount(count + 1)}>Increment</button>
    </div>
  )
}

export default App