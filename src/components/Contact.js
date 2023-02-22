import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <div style={{paddingLeft:"3rem",paddingTop:"6rem", backgroundColor:"#F9F9FF",paddingBottom:"3rem"}}>
      <Row>
        <Col xs={12}>
          <h2 style={{color:"#454360"}}>Get in Touch!</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <h2 style={{color:"#454360",fontSize:"24px",fontFamily:"sans-serif"}}>Let's talk about everything!</h2>
          <p>Dont' like forms, please send an <a href="mailto:akashurrehman456@gmail.com"><span style={{color:"#FE7485",textDecoration:"none"}}>email</span></a></p>
        </Col>
        <Col xs={12} md={8}>
          <Form>
            <Row>
              <Col xs={12} md={6}>
                <Form.Control type="text" placeholder="Your name" style={{borderRadius:"14px"}}/>
              </Col>
              <Col xs={12} md={6}>
                <Form.Control type="email" placeholder="Email Address" style={{borderRadius:"14px"}}/>
              </Col>
            </Row>
            <Form.Group className="mb-3 mt-3" controlId="subject">
              <Form.Control placeholder="Subject" style={{borderRadius:"14px"}}/>
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={6} placeholder="Enter your message" style={{borderRadius:"14px"}}/>
            </Form.Group>
            <Button type="submit" className='mt-3 px-5' style={{backgroundColor:"#FE7485",borderRadius:"14px",borderColor:"#FE7485"}}>
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
