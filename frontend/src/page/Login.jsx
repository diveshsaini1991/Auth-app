import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import { handelerr, handelsuccess } from '../utils'
const Login = () => {
  const [logininfo,setlogininfo] = useState({
    email:"",
    password:""
  })
  const navigate = useNavigate();
  const handlechange=(e)=>{
    const {name,value} = e.target;
    const copy={...logininfo};
    copy[name]=value;
    setlogininfo(copy);
  }
  // console.log(logininfo)
  const handlesubmit= async (e)=>{
    e.preventDefault();
    const {email,password} = logininfo;
    if(!email||!password){
      return handelerr("All feilds are required")
    }
    try{
      const url = "https://auth-app-1y6dfn9ef-divesh-sainis-projects-d9532adf.vercel.app/auth/login";
      const response = await fetch(url , {
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(logininfo)
      });
      const {success,message,jwtToken,name,error} = await response.json();
      if(success){
        handelsuccess(message)
        localStorage.setItem("token",jwtToken);
        localStorage.setItem("loggedinUser",name);
        setTimeout(() => {
          navigate("/home");
        }, 1500);
      }else if(error){
        const details = error?.details[0].message;
        handelerr(details);
      }else if(!success){
        handelerr(message);

      }

    }catch(err){
      handelerr(err);
    }
  }
  return (
    <div className='container'>
      <h1>Login</h1>
        <form onSubmit={handlesubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              onChange={handlechange}
              type="email"
              name='email'
              value={logininfo.email}
              placeholder='Enter your email ...'
               />
          </div><div>
            <label htmlFor="password">Password</label>
            <input 
              onChange={handlechange}
              type="password"
              name='password'
              value={logininfo.password}
              placeholder='Enter your password ...'
               />
          </div>
          <button type='submit'>Login</button>
          <span>
            Don't have an account?
            <Link to="/signup">Signup</Link>
          </span>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Login
