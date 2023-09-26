import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import { CircularProgress, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { register, reset } from '../../redux/auth/authSlice';

export default function SignUp() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { isError, isSuccess, message, user, isLoading } = useSelector((state) => state.auth)

  const [type, setType] = useState('tutor')
  const [gender, setGender] = useState('female')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [grade, setGrade] = useState('')

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
    if (isSuccess || user) {
      alert(isSuccess)
      navigate('/')
    }
    dispatch(reset())
  }, [dispatch, user, message, isError, isSuccess])

  const handleChange = (event, newValue) => {
    setType(newValue);
  };

  const submitForm = async () => {
   
    const userData = {
      name: name,
      grade: grade,
      email: email,
      password: password,
      type: type,
      gender,
      phoneNumber
    }

    dispatch(register(userData));

  }


  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form >
          <h3>Sign Up</h3>
          <Divider light />
          <div>
            <Box sx={{ width: '100%', margin: "10px" }}>

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

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField onChange={(e) => setName(e.target.value)} value={name} sx={{ m: 1, width: '100%' }} id="outlined-basic" label="Full Name" variant="outlined" />
            <TextField onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} sx={{ m: 1, width: '100%' }} id="outlined-basic" label="Phone Number" variant="outlined" />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField onChange={(e) => setEmail(e.target.value)} value={email} sx={{ m: 1, width: '100%' }} id="outlined-basic" label="Email Address" type="email" variant="outlined" />
            <TextField onChange={(e) => setPassword(e.target.value)} value={password} sx={{ m: 1, width: '100%' }} id="outlined-basic" label="Password" type="password" variant="outlined" />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField style={{ fleGrow: '1', marginRight: "20px" }} onChange={(e) => setGrade(e.target.value)} value={grade} sx={{ m: 1, width: '50%' }} id="outlined-basic" label="Grade" type="number" variant="outlined" />


            <FormControl style={{ width: '50%' }}>
              <FormLabel>Gender</FormLabel>
              <RadioGroup
                row
                defaultValue="female"
                name="radio-buttons-group"
                onChange={(e) => setGender(e.target.value)}
              >
                <FormControlLabel value="female" control={<Radio />} label="Female" />
                <FormControlLabel value="male" control={<Radio />} label="Male" />

              </RadioGroup>
            </FormControl>

          </div>
          {isLoading ? <div style={{
            display: 'flex',
            justifyContent: "center"
          }}><CircularProgress /></div> : <Button onClick={submitForm} size='normal' sx={{ m: 1, width: "100%", maxWidth: '100%', maxHeight: '50px', minWidth: '300px', minHeight: '50px' }} variant="contained">Sign Up</Button>}
          <p className="forgot-password text-right">
            Already registered <Link to="/sign-in">sign in?</Link>
          </p>
        </form>
      </div>
    </div>
  )

}