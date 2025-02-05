import React from "react";
import { useState } from "react";

const TogglePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  //Handle Password Visibility
  const TogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return { showPassword, TogglePasswordVisibility };
};

export default TogglePassword;
