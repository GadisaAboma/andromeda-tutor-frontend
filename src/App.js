import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login'
import SignUp from './components/Signup/Signup'
import Header from './components/Header/header'
import Home from './components/Home/Home'
import SearchTutors from './components/search_Tutors/SearchTutors'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import SignUp from './components/signup.component'
function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/search-tutors" element={<SearchTutors />} />
        </Routes>



      </div>
    </Router>
    <ToastContainer />
    </>
  )
}
export default App