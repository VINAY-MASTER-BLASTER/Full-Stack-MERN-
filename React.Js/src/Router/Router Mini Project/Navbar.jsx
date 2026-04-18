import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({data}) => {
  return (
    <div>
        <Link to ={""}>Home</Link>
        <Link to ={"/about"}>About</Link>
        <Link to ={"/contact"}>Contact</Link>
        <br />
        {data.map(ele=>(
            <span key={ele.id}>
                <Link to={`/post/${ele.id}`}>{ele.title}</Link>
                <br />
            </span>
        ))}
    </div>
  )
}

export default Navbar