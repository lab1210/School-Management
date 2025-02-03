import React from 'react'
import "./StudentAuth.css"
const Login = () => {
  return (
    <div className='Student_Auth_Container'>
        <div className="Student_Left_Auth">
          <div className="login_box">
          <div className="logo">
          <img src="./logo 1.svg" alt="" />
        </div>
        <div className="login_form">
          <div className="title">

          <p>Welcome to Foursquare Management System</p>
          </div>
          <h1>Log in</h1>
<div className="Login_input">

          <label htmlFor="Email">Email</label>
          <input type="text" />
</div>
<div className="Login_input">
<div className="forgot_pswd">

          <label htmlFor="Password">Password</label>
          <p>Forgot Password?</p>
</div>
          <input type="password" />
</div>
<div className="loginbtn">

<button>
  LOG IN
</button>
</div>
<p>Don't have an account? <span>Apply for an account</span></p>
        </div>
          </div>
     
        </div>
        <div className="Student_Right_Auth">
          <div className="login_img">
          <img src="./loginimage.svg" alt="" />
          </div>
        </div>
    </div>
  )
}

export default Login
