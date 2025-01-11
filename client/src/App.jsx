import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/login' element={<SignIn />}></Route>
          <Route path='/register' element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
