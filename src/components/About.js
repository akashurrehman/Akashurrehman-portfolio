import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import profileimg from './../Images/new.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {
    return (
        <div className="pt-5" style={{paddingLeft:"3rem",paddingTop:"3rem", backgroundColor:"#F9F9FF"}} id="about">
           <Col xs={12}>
                <h1 style={{paddingLeft:"1.5rem"}}>
                    About Me
                </h1>
            </Col>
            <Row>
                <Col xs={12} md={3}>
                    <div className="circle-image-container">
                        <img src={profileimg} alt="My Image" className="circle-image" style={{width:"100%",height:"100%",fontSize:"60px"}}/>
                    </div>
                </Col>
                <Col xs={12} md={9}>
                    <Card style={{borderRadius:"18px",paddingTop:"1.2rem",paddingBottom:"1.5rem"}}>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <div style={{ height: '100%' }}>
                                        <h1 style={{fontSize:"1.2rem", fontFamily:"serif"}}>
                                        I am Akash Ur Rehman, Mern Stack developer from Punjab, Pakistan. I have rich experience in web site design and building and customization, also I am good at WordPress.
                                        </h1>
                                        <Button className="px-4 mt-3" style={{borderRadius:"16px",borderColor:"#FF4C60",backgroundColor:"#FF4C60"}} onClick={console.log("Download CV FROM BACKEND")}>
                                            Download CV
                                        </Button>    
                                    </div>
                                </Col>
                                <Col>
                                    <div style={{ height: '100%' }}>
                                        <div style={{paddingBottom:"1rem"}}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                                <h5 style={{ margin: 0 }}>Web Development</h5>
                                                <h5 style={{ margin: 0 }}>90%</h5>
                                            </div>
                                            <ProgressBar striped variant="success" now={90} style={{height:"8px"}}/>
                                        </div>
                                        <div style={{paddingBottom:"1rem"}}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                                <h5>Mobile Development</h5>
                                                <h5>80%</h5>
                                            </div>        
                                            <ProgressBar striped variant="info" now={80} style={{height:"8px"}}/>
                                        </div>
                                        <div style={{paddingBottom:"1rem"}}>
                                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                                <h5>MERN Stack Development</h5>
                                                <h5>75%</h5>
                                            </div>        
                                            <ProgressBar striped variant="warning" now={75} style={{height:"8px"}}/>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={1}>
                    <i className="fa fa-google" />
                </Col>
                <Col xs={12} md={2}>
                    <h3>10+</h3>
                    <h2>Projects completed</h2>
                </Col>
                <Col xs={12} md={1}>
                    <i className="fa fa-google" />
                </Col>
                <Col xs={12} md={2}>
                    <h3>10+</h3>
                    <h2>Projects completed</h2>
                </Col>
                <Col xs={12} md={1}>
                    <i className="fa fa-google" />
                </Col>
                <Col xs={12} md={2}>
                    <h3>10+</h3>
                    <h2>Projects completed</h2>
                </Col>

                <Col xs={12} md={1}>
                    <i className="fa fa-google" />
                </Col>
                <Col xs={12} md={2}>
                    <h3>10+</h3>
                    <h2>Projects completed</h2>
                </Col>
            </Row>
        </div>           
    );
};
export default About;

