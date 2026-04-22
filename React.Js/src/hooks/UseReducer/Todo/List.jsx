import React from 'react'

const List = ({todos,dispatch,setdoto,SetEdit}) => {
  return (
    <ul>
       {todos.map(ele =>(
        <li key={ele.id}>{ele.text} 

        <button onClick={()=>{
          setdoto(ele.text)
          SetEdit(ele.id)
        }}>Edit</button> 

        <button onClick={()=>{
          dispatch({type:"DEL", payload:ele.id})
        }}>Delete</button></li>
       ))}
    </ul>
  )
}

export default List