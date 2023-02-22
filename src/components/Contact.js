import React from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

function Contact() {
  return (
    <div style={{paddingLeft:"3rem"}}>
      <Row>
        <Col xs={12}>
          <h2>Get in Touch!</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <h3>Let's talk about everything!</h3>
          <p>Dont' like forms, please send an <a href="mailto:akashurrehman456@gmail.com">email</a></p>
        </Col>
        <Col xs={12} md={6}>
          <Form>
            <Row>
              <Col xs={12} md={6}>
                <Form.Control type="text" placeholder="Your name" />
              </Col>
              <Col xs={12} md={6}>
                <Form.Control type="email" placeholder="Email Address" />
              </Col>
            </Row>
            <Form.Group className="mb-3 mt-3" controlId="formGridAddress1">
              <Form.Control placeholder="Subject" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Contact;
