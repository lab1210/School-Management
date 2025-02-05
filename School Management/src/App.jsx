import React from 'react'
import "./App.css"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import StudentLogin from './Pages/STUDENTS/Authentication/StudentLogin'
import RegisterRole from './Pages/STUDENTS/Authentication/RegisterRole';
import TogglePassword from "./Components/TogglePassword"
import GeneralRegistration from './Pages/GeneralRegistration';
const App = () => {
const{showPassword,TogglePasswordVisibility}=TogglePassword()
  return (
    <>
    <BrowserRouter>
    
     <div className='Desktop_Tablet'>
      <Routes>
        <Route path='/' element={<StudentLogin showpassword={showPassword} togglePasswordVisibility={TogglePasswordVisibility}/>}/>
        <Route path='/register/role' element={<RegisterRole/>}/>
        <Route path='/register/:role' element={<GeneralRegistration showpassword={showPassword} togglePasswordVisibility={TogglePasswordVisibility} />}/>

      </Routes>
    </div>
    <div className='Mobile'>
  </div>
    </BrowserRouter>
    </>
   
  )
}

export default App
