
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './page/Login';
import Signup from './page/Signup';
import Home from './page/Home';
import Error from './page/Error';
import { useState } from 'react';
import Refreshhandler from './Refreshhandler';

function App() {
  const [isauthanticated,setisauthanticated] = useState(false);

  const PrivateRoute = ({element})=>{
    return isauthanticated ? element : <Navigate to="/login" />
  }

  return (

      <div>
        <Refreshhandler setisauthanticated={setisauthanticated}/>
        <Routes>
            <Route path='/' element={<Navigate to="/login"/>} />
            <Route path='/home' element={<PrivateRoute element={<Home/>} />} />
            <Route path='/login' element={<Login/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='*' element={<Error/>} />
        </Routes>
      </div>
  );
}

export default App;
