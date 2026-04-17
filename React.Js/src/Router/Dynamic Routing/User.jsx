import React from 'react'
import { Link } from 'react-router-dom'

const User = ({data}) => {
  return (
    <div>
        {data.map(ele=>(
            <span key={ele.id}><Link to={`/user/${ele.id}`}>{ele.name}</Link></span>
            
        ))}
    </div>
  )
}

export default User