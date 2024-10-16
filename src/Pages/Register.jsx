// import React from "react";
// import "../../src/App.css";

// function Signin() {
//     return (
//         <form action="">
//             <div className="signup-container">
//             <div className="signup-box">
//                 <h1>Sign Up</h1>
//                 <div className="input-container">
//                     <label>Email*</label>
//                     <input type="text" placeholder="Enter Your Email" id="userEmail"/>
//                 </div>
//                 <div className="input-container">
//                     <label>Password*</label>
//                     <input type="password" placeholder="Enter Your Password" id="Empasswrd" />
//                 </div>
//                 <span>Forgot your Password?</span>

//                 <button className="signup-button" id="Registerb">Sign Up</button>
//                 <span className="divider">---------Or, Login with----------</span>
//                 <button className="google-button">Sign up with Google</button>
//             </div>
//         </div>
//         </form>
//     );
// }

// export default Signin;
import React, { useState } from "react";
import { Link } from "react-router-dom";



import React from "react";
import "../../src/App.css";

function Signin() {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleSubmit() {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);
  }
    return (
        <form action="">
            <div className="signup-container">
            <div className="signup-box">
                <h1>Sign Up</h1>
                <div className="input-container">
                    <label>Email*</label>
                    <input type="text" placeholder="Enter Your Email" id="userEmail"/>
                </div>
                <div className="input-container">
                    <label>Password*</label>
                    <input type="password" placeholder="Enter Your Password" id="Empasswrd" />
                </div>
                <span>Forgot your Password?</span>

                <button className="signup-button" id="Registerb">Sign Up</button>
                <span className="divider">---------Or, Login with----------</span>
                <button className="google-button">Sign up with Google</button>
            </div>
        </div>
        </form>
    );
}

export default Signin;
