import React from 'react'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import StudentLogin from './Pages/STUDENTS/Authentication/StudentLogin'
import Register from './Pages/STUDENTS/Authentication/Register';
const App = () => {
  return (
    <>
    <BrowserRouter>
    
     <div className='Desktop_Tablet'>
      <Routes>
        <Route path='/login' element={<StudentLogin/>}/>
        <Route path='/' element={<Register/>}/>
      </Routes>
    </div>
    <div className='Mobile'>
  </div>
    </BrowserRouter>
    </>
   
  )
}

export default App
