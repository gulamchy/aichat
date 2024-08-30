import { useAuth } from '@clerk/clerk-react'
import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Dashboardlayout = () => {
    const {userId, isLoaded} = useAuth();
    const navigate = useNavigate();

    useEffect(()=>{
        if (isLoaded && !userId) {
            navigate("/sign-in");
        }
    },[userId, isLoaded, navigate]);

    if(!isLoaded) return "Loading...";

  return (
    <div className="dashboardlayout">
      <div className="main">Menu</div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboardlayout
