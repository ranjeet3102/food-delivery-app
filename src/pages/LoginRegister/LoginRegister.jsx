
import './LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import React, {useState} from 'react';
import { FaEnvelope } from "react-icons/fa";

const LoginRegister =()=>{

    const [action,setAction]=useState('');

    const registerLink =()=>{
         setAction(' active');
    };
    
    const handleAlertClick=()=>{
        alert('Login successful!');
    }

    const loginLink =()=>{
        setAction('');
   };
    return (
        <div className="b">
        <div className="body">
       <div className={`Wrapper${action}`}>
          <div className="form-box login">
            <form action="">
                <h1>Login</h1>
                <div className="input-box">
                    <input type="text" placeholder='username' required/>
                    <FaUser className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className='icon' />
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" placeholder="Password" required/>Remember me</label>
                    <a href="/">Forget Password</a>
                </div>
                <button type="submit" onClick={handleAlertClick}>Login</button>
                <div className="register-link">
                    <p>Don't have an account? <a href="/" onClick={registerLink}>Register</a></p>
                </div>

            </form>
          </div>



          <div className="form-box register">
            <form action="">
                <h1>Registration</h1>
                <div className="input-box">
                    <input type="text" placeholder='username' required/>
                    <FaUser className='icon'/>
                </div><div className="input-box">
                    <input type="email" placeholder='Email' required/>
                    <FaEnvelope className='icon'/>
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                    <FaLock className='icon' />
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox" placeholder="Password" required/>I agree to the terms & conditions</label>
                    
                </div>
                <button type="submit" onClick={loginLink}>Register</button>
                <div className="register-link">
                    <p>Already have an account? <a href="/" onClick={loginLink}>Login</a></p>
                </div>

            </form>
          </div>
       </div>
       </div>
       </div>
    );
};
export default LoginRegister;