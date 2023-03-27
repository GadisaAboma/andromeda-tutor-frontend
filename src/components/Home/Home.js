import { Button } from "@mui/material";
import React from "react";
import Footer from "../Footer/Footer";
import Andromeda from '../../images/andromeda-new.png'
import './Home.css';

const Home = () => {
    return <div className="homepage-container" >
        <div className="home-container">
            <div>
                <h1>Learn From Industry Experts</h1>
                <p className="home_description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in</p>
                <Button style={{ maxWidth: '300px', maxHeight: '60px', minWidth: '300px', minHeight: '60px', color: "white" }} color="primary" variant="contained">Get Started</Button>

            </div>
            <div>
                <img src={Andromeda
                } />
            </div>

        </div>
        <div className="services-container">
            
               <div id="services" className="services_header">
               <h1>Our Services</h1>
                <p className="services_description">A Tutor is responsible for helping students learn and understand new concepts and complete assignments. They prepare lessons by studying lesson plans, reviewing textbooks in detail to understand the topic they will be teaching and providing additional projects if needed during a session.</p>
                   
                   <div className="services_inner">

                    <div className="services">
                    <i className="uil uil-arrow"></i>
                       <h5>Website Development</h5>

                       <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications.</p>
                    </div>
                    <div className="services">
                       <i className="uil uil-apps"></i>
                        
                        <h5>Mobile Application Development</h5>
                        <p>Mobile app development is the act or process by which a mobile app is developed for one or more mobile devices, which can include personal digital assistants, enterprise digital assistants, or mobile phones.</p>
                    </div>
                    <div className="services">
                    <i className="uil uil-camera"></i>
                       <h5>Adobe Photoshop </h5>
                       <p>Adobe Photoshop is a raster graphics editor developed and published by Adobe Inc. for Windows and macOS. It was originally created in 1987 by Thomas and John Knoll. Since then, the software has become the most used tool for professional digital art, especially in raster graphics editing</p>
                    </div>
                    <div className="services">
                    <i className="uil uil-robot"></i>
                      <h5>Machine Learning</h5>
                      <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications.</p>
                    </div>
                    <div className="services">
                    <i className="uil uil-apps"></i>
                     
                      <h5>Artificial Intelligence</h5>
                      <p>Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network). Web development can range from developing a simple single static page of plain text to complex web applications.</p>
                    </div>
                </div> 
                    
        </div>
        {/* <div className="services-container">
            <div id="mission-and-vision">
                <h1>Our Services</h1>
                <p></p>
            </div>
            </div> */}
           
        </div>
        <Footer />

    </div>
}

export default Home