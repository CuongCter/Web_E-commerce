import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/login' element={<Login></Login>}/>
      <Route path='/signup' element={<SignUp></SignUp>}/>
        <Route path='/forgot-password' element={<ForgotPassword></ForgotPassword>}></Route>
    </Routes>
  </div>
  )
}

export default App
