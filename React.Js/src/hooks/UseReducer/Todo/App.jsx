import React, { useReducer, useState } from 'react'
import {initialState,reducer} from './reducer'
import List from './List'

const App = () => {
  const [todo,setdoto] = useState("")
  const [state,dispatch] = useReducer(reducer,initialState)
  const [Edit,SetEdit] = useState(null)
  console.log(Edit)

  return (
    <div>
      <input type="text" value={todo} onChange={(e)=>{
        setdoto(e.target.value.trim().replace(/\s+/g, ' '))
      }}/>
      <button onClick={()=>{
        if(Edit){
          dispatch({
            type:'EDIT',
            payload : {
              todo,todo,
              id : Edit
            }
          })
        }else{
           dispatch({
          type : "ADD",
          payload : todo
        })
        }
        setdoto('')
        SetEdit(null)
      }}>Add</button>

      <List todos={state} dispatch={dispatch} setdoto={setdoto} SetEdit={SetEdit}/>
    </div>
  )
}

export default App