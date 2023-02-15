import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import profileimg from './../Images/new.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {
    return (
        <div className="pt-5" style={{paddingLeft:"3rem"}} id="about">
           <Col xs={12}>
                <h1 style={{paddingLeft:"3rem"}}>
                    About Me
                </h1>
            </Col>
            <Row>
                <Col xs={12} md={3}>
                    <div className="circle-image-container">
                        <img src={profileimg} alt="My Image" className="circle-image" />
                    </div>
                </Col>
                <Col xs={12} md={9}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <div style={{ height: '100%' }}>
                                        <h1 style={{fontSize:"1.2rem", fontFamily:"serif"}}>
                                        I am Akash Ur Rehman, Mern Stack developer from Punjab, Pakistan. I have rich experience in web site design and building and customization, also I am good at WordPress.
                                        </h1>
                                        <Button style={{}} onClick={console.log("Download CV FROM BACKEND")}>
                                            Download CV
                                        </Button>    
                                    </div>
                                </Col>
                                <Col>
                                    <div style={{ height: '100%' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                            <h5>Development</h5>
                                            <h5>85%</h5>
                                        <ProgressBar striped variant="success" now={50} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                            <h5>Development</h5>
                                            <h5>85%</h5>
                                        <ProgressBar striped variant="info" now={70} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                                            <h5>Development</h5>
                                            <h5>85%</h5>
                                        <ProgressBar striped variant="warning" now={85} />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={3}>
                    <div className="circle-img-container">
                    <i className="fa-brands fa-gripfire" />
                        <h3>10+</h3>
                        <h2>Projects completed</h2>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="circle-img-container">
                        <i className="fa-solid fa-mug-hot" />
                        <h3>1523</h3>
                        <h2>Cup of Coffee</h2>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="circle-img-container">
                        <i className="fa fa-google"/>
                        <h3>15+</h3>
                        <h2>Satisfied Clients</h2>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="circle-img-container">
                        <i className="fa fa-google"/>
                        <h3>12</h3>
                        <h2>Nominees Winner</h2>
                    </div>
                </Col>
            </Row>
        </div>           
    );
};
export default About;

