import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer} from 'react-toastify'
import { handelerr, handelsuccess } from '../utils';

const Home = () => {
  const [user, setuser]= useState('');
  const [products, setproducts]= useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    setuser(localStorage.getItem("loggedinUser"));
  },[])
  const handlelogout = (e)=>{
    localStorage.removeItem("token");
    localStorage.removeItem("loggedinUser");
    handelsuccess("Logout Sucessfull");
    setTimeout(() => {
      navigate("/login")
    }, 1500);
  }
  const getproducts = async ()=>{
    try{
      const url ="http://localhost:3001/products";
      const headers={
        headers:{
          "Authorization":localStorage.getItem("token")
        }
      }
      const response = await fetch(url,headers);
      const result = await response.json();
      setproducts(result);
    }catch(err){
      handelerr(err);
    }
  };
  useEffect(()=>{
    getproducts()
  },[])
  return (
    <div>
      <h1>{user}</h1>
      <button onClick={handlelogout}>LOGOUT</button>
      <div>
        {
          products.map((item,index)=>(
            <ul key={index}>
              <span>{item.name} : {item.price}</span>
            </ul>
          ))
        }
      </div>
      <ToastContainer/>
    </div>
  )
}

export default Home