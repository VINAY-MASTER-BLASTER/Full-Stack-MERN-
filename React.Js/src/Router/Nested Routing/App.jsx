import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import User from './User';
import UserDetails from './UserDetails';
import Profile from './Page/Profile';
import Greads from './Page/Greads';
const App = () => {
    const users = [
  {
    id: 1,
    name: "Vinay",
    description: "React Developer",
    designation: "Frontend Developer"
  },
  {
    id: 2,
    name: "Rahul",
    description: "Node.js Developer",
    designation: "Backend Developer"
  },
  {
    id: 3,
    name: "Amit",
    description: "Full Stack MERN Developer",
    designation: "Software Engineer"
  },
  {
    id: 4,
    name: "Neha",
    description: "UI/UX Designer",
    designation: "Product Designer"
  },
  {
    id: 5,
    name: "Priya",
    description: "QA Testing Specialist",
    designation: "QA Engineer"
  }
];

  return (
    <BrowserRouter>
    <User data={users}/>
    <Routes>
        <Route path='/user/:id' element={<UserDetails data={users}/>}>
        <Route index element={<Profile/>}/>
        <Route path="greads" element={<Greads/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App