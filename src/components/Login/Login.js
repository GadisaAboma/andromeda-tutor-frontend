import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login, register, reset } from '../../redux/auth/authSlice';
import axios from 'axios';

import './Login.css'
export default function Login() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

const { isLoading, isSuccess, isError, user, message} = useSelector((state) => state.auth)

  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('tutor')

  const handleChange = (event, newValue) => {
    setType(newValue);
  };

  const loginUser = (e) => {
    e.preventDefault()
    
    const userData = {
     phoneNumber, password, type
    }

    dispatch(login(userData))
   
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
    
      navigate('/')
    }
    dispatch(reset())
  }, [dispatch, user, message, isError, isSuccess])


    return (
      <div className="auth-wrapper">
          <div className="auth-inner">
    <form >
      <h3>Sign In</h3>
      <Divider light />
      <div>
      <Box sx={{ width: '100%',margin: "10px"}}>
       
       <Tabs
         value={type}
         onChange={handleChange}
         textColor="primary"
         indicatorColor="primary"
         aria-label="secondary tabs example"
       >
         <Tab value="tutor" label="Tutor" />
                <Tab value="client" label="Client" />
       </Tabs>
     </Box>
      </div>
      
        <TextField
        autoComplete="off"
         onChange={(e) => setPhoneNumber(e.target.value)} 
         value={phoneNumber} sx={{ mt: 2, mb: 2, ml: 1, mr: 1, width: '100%' }} 
         type='text' 
          id="outlined-basic"
           label="Phone Number" 
           variant="outlined" />
        <TextField 
          autoComplete="off"
         
        onChange={(e) => setPassword(e.target.value)} 
        value={password} sx={{ mt: 2, mb: 2, ml: 1, mr: 1, width: '100%' }}
          id="outlined-basic"
           label="Password"
            type="password" 
            variant="outlined" />
     
     <Button onClick={(e) => loginUser(e)}  size='normal' sx={{m: 1, width: "100%",  maxWidth: '100%', maxHeight: '50px', minWidth: '300px', minHeight: '50px'}} variant="contained">Login</Button>
      <p className="forgot-password text-right">
        Don't you have account?<Link to="/sign-up">Register</Link>
      </p>
    </form>
    </div>
    </div>
  )

}