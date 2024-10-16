import React from "react";
import "../../src/App.css";



function Login() {
    return (
        <form action="">
            <div className="login-container">
                <div className="login-box">
                    <h1>Login</h1>
                    <div className="field-container">
                        <label>Email*</label>
                        <input type="text" placeholder="Enter Your Email" />
                    </div>
                    <div className="field-container">
                        <label>Password*</label>
                        <input type="password" placeholder="Enter Your Password" />
                    </div>
                    <span className="forgot-password">Forgot your Password?</span>

                    <button className="login-button">Login</button>
                    <span className="login-divider">---------Or, Login with----------</span>
                    <button className="google-auth-button">Login with Google</button>
                </div>
            </div>
        </form>
    );
}

export default Login;


