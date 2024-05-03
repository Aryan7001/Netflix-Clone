import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import {  Route, Routes, useNavigate } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase'


const App = () => {

const navigate= useNavigate();

useEffect(()=>{
onAuthStateChanged(auth,async(user)=>{
if(user){
  console.log('user is logged in ')
  navigate('/')
}else{

  console.log('logged out')
  navigate('/login')
}

})
},[])

  return (
    <div className='app-main'>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='Login' element={<Login/>}/>
        <Route path='Player/:id' element={<Player/>}/>
      </Routes>
    </div>
  )
}

export default App
