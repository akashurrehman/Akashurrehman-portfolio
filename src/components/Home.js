import React,{useState,useEffect} from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import './../Styles/styles.css'
import profileimg from './../Images/new.jpg'
import About from "./About";
const Home = props => {
  const [textIndex, setTextIndex] = useState(0);
  const text = 'DEVELOPER';

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex) => (textIndex < text.length ? textIndex + 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

    return (
         <Container fluid>
            <Row>
              <Col xs={2} id="sidebar">      
                <Sidebar />
              </Col>
              <Col xs={10} >
      <section id="home" class="page-content" style={{backgroundColor:"#353353", color:"#E0E0E5"}}>
                  <div class="content">
                    <div className="circle-image-container">
                      <img src={profileimg} alt="My Image" className="circle-image" />
                    </div>
                    <div>
                      <h2>Akash Ur Rehman</h2>
                    </div>
                    <>
                    <h1 style={{fontSize:"1.5rem",fontFamily:"sans-serif"}}>MERN STACK {text.substring(0, textIndex)}</h1>
                    </>
                  <div className="social-icons">
                    <a href="#hero">
                      <i className="fa fa-facebook" />
                    </a>
                    <a href="#hero1">
                      <i className="fa fa-twitter" />
                    </a>
                    <a href="#hero2">
                      <i className="fa fa-linkedin" style={{color:"#F9F4F5"}}/>
                    </a>
                    <a href="abour">
                      <i className="fa fa-instagram" />
                    </a>
                    <a href="#about">
                      <i className="fa fa-youtube" />
                    </a>
                  </div>
                  <>
                  <Button style={{ backgroundColor: "#FF4C60", borderRadius: "50px" }}>
                    Hire me
                  </Button>
                  </>
                  </div> 
      </section>
      <section id="about">
      <About />  
      </section>             
    </Col> 
  </Row>
  </Container>

);
};
export default Home;