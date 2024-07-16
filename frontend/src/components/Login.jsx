import React, { useState,useEffect } from 'react'
import '../style/login.css';
import img from "../images/hero.jpeg"
import {useNavigate} from 'react-router-dom'
const Login = () => {

    const navigate = useNavigate();

    useEffect(()=>{
      const auth = localStorage.getItem("user");
      if(auth){
        navigate("/")
        }
        
    })

    const [name , setName]= useState("");
    const [email , setEmail]= useState("");
    const [password , setPassword]= useState("");

    const handleLogin=()=>{
        alert("hl")
    }

        const handleSignup = async (e) => {
          e.preventDefault();
          try {
            const response = await fetch("http://localhost:5000/signup", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, password }),
            });

            const data = await response.json();
            console.log(data);
            localStorage.setItem("user", JSON.stringify(data));

            if (response) {
              navigate("/");
            } else {
              console.error("Signup failed:", data);
            }
          } catch (error) {
            console.error("Error during signup:", error);
          }
        };

  return (
    <>
    <div className='panel'>
      <div className="container">
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={img} alt="" />
          </div>
          <div className="back">
            <img class="backImg" src={img} alt=""/>

          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required=""
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required=""
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text">
                    <a href="#">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    <input type="submit" defaultValue="Sumbit" onClick={handleLogin}></input>
                  </div>
                  <div className="text sign-up-text">
                    Don't have an account?{" "}
                    <label htmlFor="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user" />
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required=""
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope" />
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required=""
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock" />
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required=""
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                  </div>
                  <div className="button input-box">
                    <input type="submit" defaultValue="Sumbit" onClick={handleSignup}/>
                  </div>
                  <div className="text sign-up-text">
                    Already have an account?{" "}
                    <label htmlFor="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Login
