import React, { use, useState } from 'react'

const Form = ({setPassword,setUser,Pass,user ,setAuth}) => {
    const username = "vinay"
    const Password = "12345"
  return (
    <div>
        <form action=""  >
            <label htmlFor="">Username</label>
            <input type="text" name="" id="" onChange={(e)=>{
                setUser(e.target.value)
            }}/>
            <label htmlFor="">Password</label>
            <input type="text" onChange={(e)=>{
                setPassword(e.target.value)
            }}/>
            <button onClick={(e)=>{
                e.preventDefault()
                if(username == user && Password == Pass){
                    setAuth('success')
                }
                else{
                    setAuth('Fail')
                }
            }}>Login</button>
        </form>
    </div>
  )
}

export default Form