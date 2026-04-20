// import React, { useReducer, useState } from 'react'

// const App = () => {
//     const [count,setcount] = useState(0)
//     const [] = useReducer(0)
//   return (
//     <div>
//         <button onClick={()=>{
//             setcount(pre => pre + 1)
//             setcount(pre => pre + 1)
//             setcount(pre => pre + 1)
//         }}>Add</button>
//         <span>{count}</span>
//     </div>
//   )
// }

// export default App








import React, { useReducer } from 'react'
import initialState from './intialState'
import reducer from './reducer'
const App = () => {
  const [state,dispatch] = useReducer(reducer,initialState)

  return (
    <div>
      <h1>{state.name}</h1>
      <button onClick={()=>{
        dispatch({type : "ADD"})
      }}>+</button>
      <span>{state.count}</span>
      <button onClick={()=>{
        dispatch({type : "SUB"})
      }}>-</button>
    </div>
  )
}

export default App