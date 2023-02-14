import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import profileimg from './../Images/new.jpg'
import ProgressBar from 'react-bootstrap/ProgressBar';

function About() {
    return (
        <div className="pt-5 pl-5" >
           <Col xs={12}>
                <h1 style={{paddingLeft:"3rem"}}>
                    About Me
                </h1>
            </Col>
            <Row>
                <Col xs={12} md={4}>
                    <div className="circle-image-container">
                        <img src={profileimg} alt="My Image" className="circle-image" />
                    </div>
                </Col>
                <Col xs={12} md={8}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col>
                                    <div style={{ height: '100%' }}>
                                        <h1 style={{fontSize:"1.2rem"}}>
                                        I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at WordPress.
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
        </div>           
    );
};
export default About;

