import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import axios from 'axios';

export default function SignUp () { 

  const [type, setType] = useState('Tutor')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [grade, setGrade] = useState('')

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setType(newValue);
  };

  const submitForm = async () => {

    const config = {
      headers: {
          'Content-Type': 'application/json',
      }
  }

    const { data } = await axios.post("https://andromeda-production.up.railway.app/api/auth/register", {
      body: {
        name: name,
        grade: grade,
        email: email,
         password: password, 
         type: type,
        gender: "male"
      },
      config
    })

    console.log(data)
 
  }
  

    return (
        <div className="auth-wrapper">
            <div className="auth-inner">
      <form >
        <h3>Sign Up</h3>
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
           <Tab value="Tutor" label="Tutor" />
           <Tab value="Student" label="Student" />
         </Tabs>
       </Box>
        </div>
        
          <TextField onChange={(e) => setName(e.target.value)} value={name} sx={{ m: 1, width: '100%' }}  id="outlined-basic" label="Full Name" variant="outlined"  />
          <TextField onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} sx={{ m: 1, width: '100%' }}  id="outlined-basic" label="Phone Number" variant="outlined" />
          <TextField onChange={(e) => setEmail(e.target.value)} value={email} sx={{ m: 1, width: '100%' }}  id="outlined-basic" label="Email Address" type="email" variant="outlined" />
          <TextField onChange={(e) => setPassword(e.target.value)} value={password} sx={{ m: 1, width: '100%' }}  id="outlined-basic" label="Password" type="password" variant="outlined" />
          <TextField onChange={(e) => setGrade(e.target.value)} value={grade} sx={{ m: 1, width: '100%' }}  id="outlined-basic" label="Grade" type="number" variant="outlined" />
       
        {/* <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <label>Grade</label>
          <input
            type="number"
            className="form-control"
            placeholder="Grade"
          />
        </div> */}
       
       <Button onClick={submitForm} size='normal' sx={{m: 1, width: "100%",  maxWidth: '100%', maxHeight: '50px', minWidth: '300px', minHeight: '50px'}} variant="contained">Sign Up</Button>
        <p className="forgot-password text-right">
          Already registered <Link to="/sign-in">sign in?</Link>
        </p>
      </form>
      </div>
      </div>
    )
  
}