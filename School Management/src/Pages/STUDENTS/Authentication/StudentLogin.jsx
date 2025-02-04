import React, { useState } from "react";
import "./StudentAuth.css";
// import { useHistory } from "react-router-dom";
import { PiEyeLight } from "react-icons/pi";
import { IoEyeOffOutline } from "react-icons/io5";
import Left_Auth from "../../../Components/Left_Auth";
const StudentLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [usernameerror, setUsernameerror] = useState("");
  const [passworderror, setPassworderror] = useState("");

  //Handle Password Visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  //Handle Form Submission
  const handleSubmit = async e => {
    e.preventDefault();
    setUsernameerror("");
    setPassworderror("");

    let valid = true;
    if (!username) {
      setUsernameerror("Username is required");
      valid = false;
    }

    if (!password) {
      setPassworderror("Password is required");
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      const reponse = await fetch("Submit_API_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, Password })
      });
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === "Invalid Username") {
          setUsernameerror(errorData.message);
        } else if (errorData.error === "Invalid Password") {
          setPassworderror(errorData.message);
        } else {
          throw new Error("Something went wrong");
        }
      } else {
        const data = await response.json();
        // Handle successful login
        console.log("Login successful", data);
        // history.push("/dashboard");
      }
    } catch (error) {
      setPassworderror(error.message);
      setUsernameerror(error.message);
    }
  };
  return (
    <div className="Student_Auth_Container">
      <Left_Auth />
      <div className="Student_Right_Auth">
        <div className="login_box">
          <div className="logo">
            <img src="./logo 1.svg" alt="" />
          </div>
          <div className="login_form">
            <div className="title">
              <p>Welcome to Foursquare Management System</p>
            </div>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>
              <div className="Login_input ">
                <label htmlFor="Username">Username</label>
                <input
                  className="username"
                  type="text"
                  value={username}
                  placeholder="Enter Username"
                  onChange={e => setUsername(e.target.value)}
                  required
                />
                {usernameerror &&
                  <p className="error">
                    {usernameerror}
                  </p>}
              </div>
              <div className="Login_input ">
                <div className="pswd">
                  <label htmlFor="Password">Password</label>
                  {passworderror && <p>Forgot Password?</p>}
                </div>
                <div className="toggle">
                  <input
                    className={passworderror ? "" : "username"}
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    value={Password}
                    onChange={e => setPassword(e.target.value)}
                    required
                  />

                  {showPassword
                    ? <PiEyeLight
                        className="eye"
                        size={20}
                        onClick={togglePasswordVisibility}
                      />
                    : <IoEyeOffOutline
                        className="eye"
                        size={20}
                        onClick={togglePasswordVisibility}
                      />}
                </div>
                {passworderror &&
                  <p className="error">
                    {passworderror}
                  </p>}
              </div>
              <div className="loginbtn">
                <button type="submit">LOG IN</button>
              </div>
            </form>
            <p className="NoAccount">
              Don't have an account? <span>Register now</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
