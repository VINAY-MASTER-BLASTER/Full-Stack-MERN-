import React from 'react'
import { useParams } from 'react-router-dom'
const UserDetails = ({data}) => {
    const {id} = useParams()
    const [user] = data.filter((ele)=>{
        return ele.id == id
    })
  return (
    <div>
        <p>{user.name}</p>
        <h2>{user.designation}</h2>
        <h1>{user.description}</h1>
    </div>
  )
}

export default UserDetails