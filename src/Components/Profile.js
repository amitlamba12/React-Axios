import React from "react";
import { useAuth } from "./auth";
import { useNavigate } from "react-router-dom";
import User from '../asset/Images/ava3.webp'
import '../App.css'
function Profile() {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <div>
      <h3>Welcome {auth.user}</h3>
      <img className="imageProfile" src={User} width={"150px"}  height={"250px"}  style={{borderRadius:'50%'}}/><br/><br/>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
