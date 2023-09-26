import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom'
import Andromeda from '../../images/andromeda-new.png'
import Profile from '../../images/profile.jpg'
import { useSelector, useDispatch } from "react-redux";
import { logout, register, reset } from "../../redux/auth/authSlice";
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import "./Header.css"


const Header = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const navigateToSearchTutors = () => {
        navigate('/search-tutors')
    }

    return (
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
                    {
                        user ? <div style={{ marginLeft: "15px" }}>
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open Menus">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src={Profile} />
                                    </IconButton>
                                </Tooltip>
                               <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >

                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">Profile</Typography>
                                    </MenuItem>
                                   { user.type === "tutor" && <MenuItem onClick={handleCloseUserMenu}>
                                        
                                        <Typography textAlign="center">Requests</Typography>
                                    </MenuItem>}
                                   { user.type === "client" &&  <MenuItem onClick={(e) =>{ 
                                    navigateToSearchTutors();
                                    handleCloseUserMenu()
                                    }}>
                                        <Typography textAlign="center">Our Tutors</Typography>
                                    </MenuItem>}
                                    <MenuItem onClick={() => {
                                        handleCloseUserMenu()
                                        dispatch(logout())
                                        dispatch(reset())
                                    }} >
                                        <Typography textAlign="center">Logout</Typography>
                                    </MenuItem>
  
                                </Menu>
                            </Box>
                        </div> : <li><Link to="sign-in"><Button variant="contained">Login</Button></Link></li>
                    }
                </ul>
            </div>
        </div>
    );

}

export default Header;