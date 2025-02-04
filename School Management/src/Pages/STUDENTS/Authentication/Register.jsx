import React from "react";
import "./StudentAuth.css";
import Left_Auth from "../../../Components/Left_Auth";

const Register = () => {
  return (
    <div className="Student_Auth_Container">
      <Left_Auth />
      <div className="Student_Right_Auth">
        <div className="Reg_box">
          <div className="Regtitle">
            <h1>Register As</h1>
            <p>Select your role to continue the registration process</p>
          </div>
          <div className="rolebtn">
            <button className="teacher">Teacher</button>
            <button className="student">Student</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
