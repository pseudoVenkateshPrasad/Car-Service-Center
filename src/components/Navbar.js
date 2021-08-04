import React from "react";
import HomeIcon from '@material-ui/icons/Home';
import LocalCarWashIcon from '@material-ui/icons/LocalCarWash';
import GroupIcon from '@material-ui/icons/Group';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { deepOrange } from '@material-ui/core/colors';
import CallIcon from '@material-ui/icons/Call';
import Logo from "../images/logo.jpg";
import "../style.css";
import Book from "./Book";
import Call from "./Call";



const Navbar = () => {
    return(
        <>
            
            <div className = "position-fixed container-fluid border pt-2 d-flex justify-content-center align-items-center nav-bar-container">

                <div className = "container d-flex .justify-content-around align-items-center left-nav">
                    <img src = {Logo}  style = {{height : "80px"}} />
                </div>
            
                <div className = "container d-flex .justify-content-around align-items-center center-nav">
                    <div className = "container p-2 mx-4  d-flex justify-content-center align-items-center " title = "Home">
                        <Link className = "active-class" exact to = "/" ><HomeIcon style={{ color: deepOrange[600] }} /></Link>
                    </div>
                    <div className = "container p-2 mx-4  d-flex justify-content-center align-items-center " title = "About us">
                        <Link className = "active-class" exact to = "/about" ><GroupIcon style={{ color: deepOrange[600] }}/></Link>
                    </div>
                    <div className = "container p-2 mx-4  d-flex justify-content-center align-items-center" title = "Services">
                        <Link className = "active-class" exact to = "/services" ><LocalCarWashIcon style={{ color: deepOrange[600] }} /></Link>
                    </div>
                </div>
            
                <div className = "container p-2 d-flex flex-row justify-content-around align-items-center right-nav">
                    <Book /> 
                    <Call />
                </div>
                
            </div>

        </>
    )
}


export default Navbar;
