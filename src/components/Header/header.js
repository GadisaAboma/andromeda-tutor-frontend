import React from "react";
import { Button } from "@mui/material";
import { Link } from 'react-router-dom'
import Andromeda from '../../images/andromeda-new.png'
import "./Header.css"

const Header = () => {
    
    return(
        <div className="header-contianer" >
            <div className="app-name"><Link to="/"><h2>Andromeda</h2></Link>
            <img className="logo-container" src={Andromeda} />
            {/* <img src={andromeda} alt="andromeda" /> */}
            </div>

            <div>
                <ul>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#footer">Misson and Vision</a></li>
                    <li><a href="#footer">About Us</a></li>
                    <li><Link to="sign-in"><Button variant="contained">Login</Button></Link></li>
                </ul>
        </div>
        </div>
    );

}

export default Header;