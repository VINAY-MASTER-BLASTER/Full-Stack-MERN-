import React from 'react'
import { Link, Outlet, useParams } from 'react-router-dom'
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

        <hr />
        <Link to={''}>Profile</Link>
        <Link to={'greads'}>Greades</Link>
        <Outlet/>
    </div>
  )
}

export default UserDetails