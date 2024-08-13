import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer} from 'react-toastify'
import { handelerr, handelsuccess } from '../utils'
const Signup = () => {
  const [signupinfo,setsignupinfo] = useState({
    name:"",
    email:"",
    password:""
  })
  const navigate = useNavigate();
  const handlechange=(e)=>{
    const {name,value} = e.target;
    const copy={...signupinfo};
    copy[name]=value;
    setsignupinfo(copy);
  }
  // console.log(signupinfo)
  const handlesubmit= async (e)=>{
    e.preventDefault();
    const {name,email,password} = signupinfo;
    if(!name||!email||!password){
      return handelerr("All feilds are required")
    }
    try{
      const url = "https://auth-app-api-seven.vercel.app/auth/signup";
      const response = await fetch(url , {
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(signupinfo)
      });
      const {success,message,error} = await response.json();
      if(success){
        handelsuccess(message);
        setTimeout(() => {
          navigate("/login");
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
      <h1>Signup</h1>
        <form onSubmit={handlesubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input 
            onChange={handlechange}
              type="text"
              name='name'
              autoFocus
              value={signupinfo.name}
              placeholder='Enter your name ...'
               />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input 
              onChange={handlechange}
              type="email"
              name='email'
              value={signupinfo.email}
              placeholder='Enter your email ...'
               />
          </div><div>
            <label htmlFor="password">Password</label>
            <input 
              onChange={handlechange}
              type="password"
              name='password'
              value={signupinfo.password}
              placeholder='Enter your password ...'
               />
          </div>
          <button type='submit'>Signup</button>
          <span>
            already have an account?
            <Link to="/login">Login</Link>
          </span>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Signup
