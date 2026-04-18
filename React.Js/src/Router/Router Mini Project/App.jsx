import React, { useEffect, useState } from 'react'
import { BrowserRouter,Routes,Route, data } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Post from './Pages/Post'

const App = () => {
    const [post,setpost] = useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data)=>{
            return data.json()
        }).then((data)=>{
            return setpost(data)
        }).catch((data)=>{
            console.log(data.error)
        })
    },)
  return (
    <BrowserRouter>
    <Navbar data={post} />
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route> 
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/post/:id' element={<Post data={post}/>}>
        </Route>
    </Routes>

    </BrowserRouter>
  )
}

export default App