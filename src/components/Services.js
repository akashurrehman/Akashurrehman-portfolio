import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';

function Services() {
    return (
        <div className="pt-5" style={{paddingLeft:"3rem",paddingTop:"6rem", backgroundColor:"#F9F9FF",paddingBottom:"3rem"}} id="Services">
            <Row>
                <Col xs={12}>
                    <h2>Services</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12} md={4}>
                    <Card style={{justifyContent:"center", textAlign:"center", backgroundColor:"#6c6ce5"}}>
                        <Card.Header>
                            <Card.Img src='' alt='logo-1'/>
                        </Card.Header>
                        <Card.Title>
                            UI/UX design
                        </Card.Title>
                        <Card.Body>
                            lorem ipsum
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} >
                    <Card style={{justifyContent:"center", textAlign:"center", backgroundColor:"#f9d74c"}}>
                        <Card.Header>
                            <Card.Img src='' alt='logo-2'/>
                        </Card.Header>
                        <Card.Title>
                            Web Development
                        </Card.Title>
                        <Card.Body>
                            lorem ipsum
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4}>
                    <Card style={{justifyContent:"center", textAlign:"center",backgroundColor:"#f97b8b"}}>
                        <Card.Header>
                            <Card.Img src='' alt='logo-3'/>
                        </Card.Header>
                        <Card.Title>
                            Mobile App Development
                        </Card.Title>
                        <Card.Body>
                            lorem ipsum
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};
export default Services;