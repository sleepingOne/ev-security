import React,{useContext,useState,useEffect} from 'react';
import './index.scss';
import {NavLink} from 'react-router-dom';
import BBlogo from "../../Asset/NewLogoName.png";
import authenticationContext from '../../Context/Authenticator';
//this need to be redesigned
const Logout: React.FC = ()=>{
    let xauthenticator = useContext(authenticationContext);
    const handleClick=async()=>{
        let response = await xauthenticator.logOut();
    }
    return (
        <NavLink onClick={handleClick} to="/">Log Out</NavLink>
    )
}
const Navbar: React.FC = ()=>{
    const [status,setStatus]= useState(false);
    let authenticator = useContext(authenticationContext);
    useEffect(()=>{
        const check = async()=>{
        let response= await authenticator.doCheck();
        if (response)
            setStatus(response);
        }
        check();
    },[authenticator]);

    return(
        <div className="navbar">
            <NavLink to="/" >Home</NavLink>
            {(status)?<Logout/>:<>
            <NavLink to="/login"> Login</NavLink>
            <NavLink to="/register"> Sign Up</NavLink>
            </>
            }
            <span id="logo" ><img src={BBlogo} className="logo-img" alt="logo" /></span>
            <div className="dropdown">
              <button className="dropbtn">List
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
          </div>
        </div>
    )

};
export default Navbar;
