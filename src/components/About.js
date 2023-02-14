import React,{useState,useEffect} from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Sidebar from "./Sidebar";
import './../Styles/styles.css'
import profileimg from './../Images/new.jpg'
const About = props => {
  const [textIndex, setTextIndex] = useState(0);
  const text = 'End Developer';

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((textIndex) => (textIndex < text.length ? textIndex + 1 : 0));
    }, 500);

    return () => clearInterval(interval);
  }, []);

    return (

        <>
         <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar">      
                      <Sidebar />
                    </Col>
                    <Col xs={10} id="page-content">
                  <div class="content">
                    <div className="circle-image-container">
                      <img src={profileimg} alt="My Image" className="circle-image" />
                    </div>
                    <div>
                      <h2>Akash Ur Rehman</h2>
                    </div>
                    <>
                    <h2>Front {text.substring(0, textIndex)}</h2>;
                    </>
                  </div>  
    </Col> 
  </Row>
  </Container>
</>
);
};
export default About;