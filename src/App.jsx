import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
function App() {

  return (
    <div className="App">
    <Routes>
      <Route path='/login' element={<Login></Login>}/>
    </Routes>
  </div>
  )
}

export default App
