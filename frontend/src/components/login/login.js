import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"
import logo from './sign-up.svg';
import logo1 from './sign-in.svg';
import logo2 from './infoapto.png';
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import { FaLock } from "@react-icons/all-files/fa/FaLock";

const Login = ({ setLoginUser}) => {
    const shoot = () => {
        const sign_in_btn = document.querySelector('#sign-in-button');
        const sign_up_btn = document.querySelector('#sign-up-button');
        const container = document.querySelector('.container');

        sign_up_btn.addEventListener('click', () => {
        
        container.classList.add('sign-up-mode');
        
        });
        
        
        sign_in_btn.addEventListener('click', () => {
        
        container.classList.remove('sign-up-mode');
        
        });
      }

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })


    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })

       
    }


    
    
    return (

<div className="container">
        
        <div className="forms-container">
          <div className="signin-signup">
  
          <div className="login sign-in-form" >
          <img alt="" src={logo2}  />
                  <h3>User Login</h3>
                  <p>Enter your Email-id here. Entered Email-id should be the same you used for Registering.</p>
            <div className="input-field">
                <FaEnvelope />
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            </div>
            <div className="input-field">
                <FaLock />
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            </div>
            <button  className="button-btn login" onClick={login}>Login</button>
           
        </div>
  
  
  
        <form  className="sign-up-form">
             <img alt="" src={logo2}  />
          <h3>Get One Time Password</h3>
          <p>Create a Password first by 'Get OTP' method & use it here.</p>
          <div class="input-field">
              <FaEnvelope />
                           <input type="text" placeholder="Enter Email" id="name" name="username" value="" required />
  
                       </div>
        <button type="button" id="verifyotp" class="button-btn verifyotp">Submit</button>
          
        </form>
  
        </div>
  
  
  </div>
  <div className="panels-container">
                  <div className="panel left-panel">
                      <div className="content content1" >
                          <button className="btn transparent" onClick={shoot} id="sign-up-button" >Get OTP</button>                 
                          <img  className="logo" alt="" src={logo}  />
                      </div>
                  </div>
                  <div className="panel right-panel">
                      <div className="content content1"  >
                          <button className="btn trans" id="sign-in-button">Sign-in</button>
                          <img className="logo1" alt="" src={logo1}  />
                          </div>
                  </div>
    </div>
  </div>

      

        
    )
}

export default Login