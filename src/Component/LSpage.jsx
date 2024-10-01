import React, { useState } from "react";
export default function LSpage() {
  const [action, setAction] = useState("Login");

  return (
    <div className="mainpage">
      <div>{action}</div>
      <div className="inputs">
        {action === "Sign Up" && (
          <div className="input">
            <input type="text" name="name" placeholder="Enter Name" />
          </div>
        )}
        <div className="input">
          <input type="email" name="Email" placeholder="Enter Email" />
        </div>
        <div className="input">
          <input type="password" name="Password" placeholder="Enter Password" />
        </div>
        
        {action === "Login" && (
          <div className="content">
            <h3>Forgot Password? <span>Click here</span></h3>
          </div>
        )}
        
        <div className="Btn">
          <div 
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => setAction("Login")}
          >
            Login
          </div>
          <div 
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => setAction("Sign Up")}
          >
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}