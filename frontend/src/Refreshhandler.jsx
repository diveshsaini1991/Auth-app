import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Refreshhandler = ({ setisauthanticated }) => {
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setisauthanticated(true);
            if (location.pathname === "/" ||
                location.pathname === "/login" ||
                location.pathname === "/signup"
            ) {
                navigate("/home", { replace: false });
            }
        }
    }, [location, navigate, setisauthanticated])


    return (
        null
    )
}

export default Refreshhandler