import React, { use, useState } from 'react'
import Form from './Form'
import Login from './Login'
import Login_faile from './Login_faile'

const App = () => {
    const [user,setUser] = useState("")
    const [Pass,setPassword] = useState("")
    const [Auth,setAuth] = useState(null)
    
    function Render(){
      if(Auth == 'success'){
        return <Login/>
      }
      else if(Auth == 'Fail'){
        return <Login_faile/>
      }
      else{
        console.log("Login Error")
        return null
      }
    }

  return (
    <div>
        <Form setUser={setUser} setPassword={setPassword} user={user} Pass={Pass} setAuth={setAuth}/>
        {/* {Auth == 'success'? <Login/> : Auth == 'Fail' ? <Login_faile/> : null} */}

        {/* Without Condition Rendering  */}
        {/* {Render()} */}
    </div>
  )
}

export default App