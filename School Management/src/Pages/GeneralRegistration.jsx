import React, { useState } from "react";
import Left_Auth from "../Components/Left_Auth";
import { PiEyeLight } from "react-icons/pi";
import { IoEyeOffOutline } from "react-icons/io5";
import "../Pages/STUDENTS/Authentication/StudentAuth.css";
import { Link } from "react-router-dom";
const GeneralRegistration = ({ showpassword, togglePasswordVisibility }) => {
  const [schoolid, setSchoolid] = useState("");
  const [Pin, setPin] = useState("");
  const [schooliderror, setSchooliderror] = useState("");
  const [pinerror, setPinerror] = useState("");

  //Handle Form Submission
  const handleSubmit = async e => {
    e.preventDefault();
    setSchooliderror("");
    setPinerror("");

    let valid = true;
    if (!schoolid) {
      setSchooliderror("School ID is required");
      valid = false;
    }

    if (!password) {
      setPinerror("Pin is required");
      valid = false;
    }

    if (!valid) {
      return;
    }

    try {
      const reponse = await fetch("Submit_API_URL", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ schoolid, Pin })
      });
      if (!response.ok) {
        const errorData = await response.json();
        if (errorData.error === "School ID does not exist") {
          setSchooliderror(errorData.message);
        } else if (errorData.error === "Invalid Pin or used OTP") {
          setPinerror(errorData.message);
        } else {
          throw new Error("Something went wrong");
        }
      } else {
        const data = await response.json();
        // Handle successful registration
        console.log("Registration successful", data);
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
        <div className="Reg_box2">
          <div className="login_form">
            <div className="Regtitle2">
              <h1>Register Now</h1>
              <p>Kindly provide the requested information to register.</p>
            </div>
            <form>
              <div className="Login_input ">
                <label htmlFor="SchoolID">School ID</label>
                <input
                  className="username"
                  type="text"
                  value={schoolid}
                  placeholder="Enter School ID"
                  onChange={e => setSchoolid(e.target.value)}
                  required
                />
                {schooliderror &&
                  <p className="error">
                    {schooliderror}
                  </p>}
              </div>

              <div className="Login_input ">
                <div className="pswd">
                  <label htmlFor="Pin">Pin</label>
                </div>
                <div className="toggle">
                  <input
                    className="username"
                    type={showpassword ? "text" : "password"}
                    placeholder="Enter Pin"
                    value={Pin}
                    onChange={e => setPin(e.target.value)}
                    required
                  />

                  {showpassword
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
                {pinerror &&
                  <p className="error">
                    {pinerror}
                  </p>}
              </div>
              <div className="loginbtn">
                <button type="submit">Register</button>
              </div>
            </form>
            <p className="NoAccount">
              Already Registered?
              <Link to="/">
                <span>Log In here</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralRegistration;
