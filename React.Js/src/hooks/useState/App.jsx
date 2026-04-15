import React, { useState } from 'react'

const App = () => {
    const [count,setcount] = useState(0)
  return (
    <div>
        <button onClick={()=>{
            setcount(count + 1)
        }}>Add</button>
        <span>{count}</span>
        <button onClick={()=>{
            setcount(count - 1)
        }}>Sub</button>
    </div>
  )
}

export default App