import React from 'react';
import './Login.css';


const Login = () => {
  return (
    <div className="login-container">
      <div className="curvy-background"></div>
      <div className="login-form">
        <h2>SIGN IN</h2>
        <div className="input-field">
          <i className="fa fa-user"></i>
          <input type="text" placeholder="Username" />
        </div>
        <div className="input-field">
          <i className="fa fa-lock"></i>
          <input type="password" placeholder="Password" />
        </div>
        <p>Forgot password?</p>
        <button className="btn-login"></button>
        <p>OR</p>
        <button className="btn-register">REGISTER</button>
      </div>
    </div>
  );
};

export default Login;
