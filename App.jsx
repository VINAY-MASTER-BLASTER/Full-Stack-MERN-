import React, { useState } from 'react'
import Header from './Header'
import Input from './Input'
import List from './List'
const App = () => {
    const [todos,setTodos] = useState([])
    const [editTodo,setEditTodo] = useState(null)
  return (
    <div>
        <Header/>
        <Input setTodos={setTodos} todos={todos} editTodo={editTodo} setEditTodo={setEditTodo}/>
        <List todos={todos} setTodos={setTodos} setEditTodo={setEditTodo}/>
    </div>
  )
}

export default App