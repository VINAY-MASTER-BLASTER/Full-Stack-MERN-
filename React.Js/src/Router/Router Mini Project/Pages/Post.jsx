import React from 'react'
import {useParams } from 'react-router-dom'
const Post = ({data}) => {

    const {id} =  useParams()
 const user = data.find((ele) => ele.id == id ) 
  return (
    <div>
        <h1>{user.body}</h1>
    </div>
  )
}
export default Post