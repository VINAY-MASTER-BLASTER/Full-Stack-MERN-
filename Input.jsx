import React, { useEffect, useState } from 'react'

const Input = ({setTodos,todos,editTodo,setEditTodo}) => {
    const [todo,setTodo] = useState("")
    useEffect(()=>{
      if(editTodo){
        setTodo(editTodo.Text)
      }
    },[editTodo])
  return (
    <div>
        <input type="text" value={todo} onChange={(e)=>{
          setTodo(e.target.value)
        }}/>
        <button onClick={()=>{
          if(editTodo){
            setTodos(todos.map((ele)=>{
              return editTodo.key == ele.key?{...ele,Text:todo}:ele
            }))
          }
          else{
            setTodos([...todos,{key:Date.now(),Text:todo}])
          }
          setTodo('')
        }}>Add</button>
        <button onClick={()=>{
          setTodos([])
          setEditTodo(null)
          setTodo('')
        }}>Reset</button>
    </div>
  )
}

export default Input