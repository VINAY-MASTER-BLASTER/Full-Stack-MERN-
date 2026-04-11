import React from 'react'

const List = ({todos,setTodos,setEditTodo}) => {
  return (
    <ul>
        {todos.map((ele)=>{
            return <li key={ele.key}>{ele.Text}


            <button onClick={()=>{
                setEditTodo(ele)
            }}>Edit</button>


            <button onClick={()=>{
                const filterData = todos.filter((item)=>{
                    return item.key != ele.key
                })
                setTodos(filterData)
            }}>Delete</button>
            </li> 
        })}
    </ul>
  )
}

export default List